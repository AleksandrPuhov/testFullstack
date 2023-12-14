import { faker } from "@faker-js/faker";
import { TransactionType, type Prisma } from "@prisma/client";
import { generateTotal } from "./helper";

// eslint-disable-next-line prefer-const
let ids: { parentId: string; type: TransactionType }[] = [];
// eslint-disable-next-line prefer-const
let userIdSnapshot: number | null = null;

export const generateCategories = (userId: number) =>
  generateTotal<Prisma.CategoryCreateManyInput>(40, (_, index) => {
    if (!userIdSnapshot) {
      userIdSnapshot = userId;
    } else if (userIdSnapshot !== userId) {
      ids = [];
      userIdSnapshot = userId;
    }

    const id = faker.string.uuid();
    const type = faker.helpers.arrayElement(Object.values(TransactionType));
    const isParent = index < 5;
    let parent: { parentId: string; type: TransactionType } | object = {};

    if (isParent) {
      ids.push({ parentId: id, type });
    } else {
      parent = faker.helpers.arrayElement(ids);
    }

    return {
      id,
      name: `[${faker.number.int(100)}] ${faker.commerce.department()}`,
      archived: faker.datatype.boolean({
        probability: 0.1,
      }),
      description: faker.lorem.sentence(),
      userId,
      type,
      parentId: undefined,
      ...parent,
    };
  });
