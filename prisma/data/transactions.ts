import { TransactionType, type Prisma, type Currency } from "@prisma/client";
import { generateTotal } from "./helper";
import { faker } from "@faker-js/faker";

export const generateTransactions = (
  userId: number,
  accounts: { id: string; currency: Pick<Currency, "id" | "code"> }[],
  categories: string[]
) =>
  generateTotal<Prisma.TransactionCreateManyInput>(1000, () => {
    const account = faker.helpers.arrayElement(accounts);
    const type = faker.helpers.arrayElement(Object.values(TransactionType));
    const amount = faker.number.float({ min: 0, max: 100000, precision: 2 });
    let additionalData = {};

    if (type === TransactionType.TRANSFER) {
      const destinationAccount = faker.helpers.arrayElement(
        accounts.filter((acc) => acc.id !== account.id)
      );

      additionalData = {
        destinationAccountId: destinationAccount.id,
        currencyDestination: destinationAccount.currency.code,
        amountDestination:
          account.currency.code === destinationAccount.currency.code
            ? amount
            : faker.number.float({ min: 0, max: 100000, precision: 2 }),
      };
    }

    return {
      type,
      accountId: account.id,
      currency: account.currency.code,
      amount,
      date: faker.date.past(),
      description: faker.lorem.paragraph(),
      creatorId: userId,
      categoryId: faker.helpers.arrayElement(categories),
      ...additionalData,
    };
  });
