import { faker } from "@faker-js/faker";
import { type Prisma } from "@prisma/client";
import { generateTotal } from "./helper";

export const generateAccountGroups = (userId: number) =>
  generateTotal<Prisma.AccountGroupCreateManyInput>(10, () => {
    return {
      id: faker.string.uuid(),
      name: `[${faker.number.int(100)}] ${faker.finance.accountName()}`,
      archived: faker.datatype.boolean({
        probability: 0.1,
      }),
      userId: userId,
    };
  });
