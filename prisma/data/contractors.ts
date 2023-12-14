import { faker } from "@faker-js/faker";
import { type Prisma } from "@prisma/client";
import { generateTotal } from "./helper";

export const generateContractors = (userIds: number[]) =>
  generateTotal<Prisma.ContractorCreateManyInput>(100, () => {
    return {
      id: faker.string.uuid(),
      name: faker.company.name(),
      inn: faker.finance.accountNumber({ length: 11 }),
      accountNumber: faker.finance.accountNumber({ length: 11 }),
      description: faker.lorem.paragraph(),
      archived: faker.datatype.boolean({
        probability: 0.1,
      }),
      userId: faker.helpers.arrayElement(userIds),
    };
  });
