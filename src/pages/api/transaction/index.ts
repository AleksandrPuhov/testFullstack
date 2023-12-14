import type { NextApiRequest, NextApiResponse } from "next";
import { getPrisma } from "../model/[...path]";
import { Prisma, type TransactionType, type Transaction } from "@prisma/client";
import { getServerAuthSession } from "@/server/auth";
import { TransactionFormSchema } from "@/feature/TransactionForm/types";

// TODO: service

type ResponseData = {
  data?: Transaction;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const session = await getServerAuthSession({ req, res });

  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  if (!req.body) {
    res.status(400).json({ error: "Invalid data" });
    return;
  }

  const prisma = await getPrisma(req, res);

  if (req.method === "POST") {
    try {
      const result = TransactionFormSchema.safeParse(req.body);

      if (!result.success) {
        console.log(result.error);
        res.status(400).json({ error: "Invalid data" });
        return;
      }

      const data = result.data;
      let currencyRate: Prisma.Decimal | 1 = 1;

      if (
        data.type === "TRANSFER" &&
        data.amountDestination &&
        data.amount !== data.amountDestination
      ) {
        const amount = new Prisma.Decimal(data.amount);
        const amountDestination = new Prisma.Decimal(data.amountDestination);

        currencyRate = amountDestination.div(amount);
      }

      const accounts = await prisma.account.findMany({
        where: {
          id: {
            in:
              data.type === "TRANSFER"
                ? [data.accountId, data.destinationAccountId]
                : [data.accountId],
          },
        },
        select: {
          id: true,
          balance: true,
          currency: true,
        },
      });

      const previousAccountState = accounts.find(
        (account) => account.id === data.accountId
      );

      const previousDestinationAccountState =
        data.type === "TRANSFER"
          ? accounts.find((account) => account.id === data.destinationAccountId)
          : undefined;

      const transactionResult = await prisma.$transaction(
        async (tx) => {
          const logs: Prisma.AuditLogCreateManyInput[] = [];
          const transaction = await tx.transaction.create({
            data: {
              type: data.type as TransactionType,
              date: data.date,
              amount: data.amount,
              amountDestination:
                data.type === "TRANSFER" ? data.amountDestination : null,
              description: data.description,
              currency: previousAccountState?.currency.code ?? "",
              currencyDestination:
                previousDestinationAccountState?.currency.code,
              creator: {
                connect: {
                  id: session.user.id,
                },
              },
              account: {
                connect: {
                  id: data.accountId,
                },
              },
              category: {
                connect: {
                  id: data.categoryId,
                },
              },
              currencyRate,
              ...(data.type === "TRANSFER"
                ? {
                    destinationAccount: {
                      connect: {
                        id: data.destinationAccountId,
                      },
                    },
                  }
                : {}),
            },
          });

          logs.push({
            type: "CREATED",
            subjectType: "TRANSACTION",
            subjectId: transaction.id.toString(),
            newValue: {
              ...transaction,
              date: transaction.date.toISOString(),
            },
            userId: session.user.id,
          });

          const method = data.type === "OUTCOME" ? "decrement" : "increment";

          const next = await tx.account.update({
            where: {
              id: data.accountId,
            },
            data: {
              balance: {
                [method]: data.amount,
              },
            },
          });

          logs.push({
            type: "UPDATED",
            subjectType: "ACCOUNT",
            subjectId: data.accountId,
            previousValue: {
              balance: previousAccountState?.balance,
            },
            newValue: {
              balance: next.balance,
              transactionId: transaction.id,
            },
            userId: session.user.id,
          });

          if (data.type === "TRANSFER" && data.amountDestination) {
            const nextDestination = await tx.account.update({
              where: {
                id: data.destinationAccountId,
              },
              data: {
                balance: {
                  decrement: data.amountDestination,
                },
              },
            });

            logs.push({
              type: "UPDATED",
              subjectType: "ACCOUNT",
              subjectId: data.destinationAccountId,
              previousValue: {
                balance: previousDestinationAccountState?.balance,
              },
              newValue: {
                balance: nextDestination.balance,
                transactionId: transaction.id,
              },
              userId: session.user.id,
            });
          }

          await tx.auditLog.createMany({
            data: logs,
          });

          return transaction;
        },
        {
          isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
        }
      );

      res.status(200).json({ data: transactionResult });
    } catch (e) {
      console.log(e);

      res.status(400).json({ error: "Something went wrong" });
    }

    return;
  }

  res.status(405).json({ error: "Not allowed" });
}
