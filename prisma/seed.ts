import { PrismaClient } from "@prisma/client";
import { currencies } from "./initial/currencies";
import { users } from "./data/users";
import { generateAccountGroups } from "./data/account-groups";
import { generateAccounts } from "./data/accounts";
import { hashSync } from "bcryptjs";
import { generateCategories } from "./data/categories";
import { generateTransactions } from "./data/transactions";
// import { generateContractors } from "./data/contractors";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  await prisma.transaction.deleteMany();
  console.log("Deleted records in transaction table");

  await prisma.user.deleteMany();
  console.log("Deleted records in user table");

  await prisma.currency.deleteMany();
  console.log("Deleted records in currency table");

  await prisma.currency.createMany({
    data: currencies,
  });
  console.log("Added currency data");

  await prisma.$queryRaw`ALTER SEQUENCE "Transaction_id_seq" RESTART WITH 1`;
  console.log("reset transaction auto increment to 1");

  await prisma.$queryRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`;
  console.log("reset user auto increment to 1");

  await prisma.user.createMany({
    data: users.map((u) => ({
      ...u,
      password: hashSync(u.password, 10),
    })),
    skipDuplicates: true,
  });
  console.log("Added user data");

  const dbUsers = await prisma.user.findMany({ select: { id: true } });
  const dbCurrencies = await prisma.currency.findMany({ select: { id: true } });
  const currencyIds = dbCurrencies.map((c) => c.id!);

  for (const user of dbUsers) {
    const accountGroups = generateAccountGroups(user.id);

    await prisma.accountGroup.createMany({
      data: accountGroups,
      skipDuplicates: true,
    });

    const groupIds = accountGroups.map((g) => g.id!);

    console.log(`[${user.id}] Added accountGroup data`);

    const accounts = generateAccounts(user.id!, groupIds, currencyIds);

    await prisma.account.createMany({
      data: accounts,
      skipDuplicates: true,
    });

    console.log(`[${user.id}] Added account data for user`);

    const categories = generateCategories(user.id!);

    await prisma.category.createMany({
      data: categories,
      skipDuplicates: true,
    });

    console.log(`[${user.id}] Added category data for user`);

    const dbAccounts = await prisma.account.findMany({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
        currency: {
          select: {
            id: true,
            code: true,
          },
        },
      },
    });

    const transactions = generateTransactions(
      user.id!,
      dbAccounts,
      categories.map((c) => c.id!)
    );

    await prisma.transaction.createMany({
      data: transactions,
      skipDuplicates: true,
    });

    console.log(`[${user.id}] Added transactions for user`);
  }

  console.log("Database has been seeded. 🌱");

  console.log("Check user data");
  console.log(`Test account: ${users[0]?.email}, ${users[0]?.password}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
