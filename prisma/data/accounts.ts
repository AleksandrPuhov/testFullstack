import { faker } from "@faker-js/faker";
import { AccountType, type Prisma } from "@prisma/client";
import { generateTotal } from "./helper";

export const generateAccounts = (
  userId: number,
  groupIds: string[],
  currencyIds: string[]
) =>
  generateTotal<Prisma.AccountCreateManyInput>(100, () => {
    return {
      id: faker.string.uuid(),
      name: `[${faker.number.int(100)}] ${faker.finance.accountName()}`,
      archived: faker.datatype.boolean({
        probability: 0.1,
      }),
      type: faker.helpers.arrayElement(Object.values(AccountType)),
      balance: faker.finance.amount({
        dec: 2,
        min: 0,
        max: 10000000,
      }),
      number: faker.finance.accountNumber(10),
      balanceDate: faker.date.past(),
      hideInTotal: faker.datatype.boolean({
        probability: 0.2,
      }),
      userId,
      groupId: faker.helpers.arrayElement(groupIds),
      currencyId: faker.helpers.arrayElement(currencyIds),
    };
  });
