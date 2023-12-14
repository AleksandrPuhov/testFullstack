import { faker } from "@faker-js/faker";
import { type Prisma } from "@prisma/client";
import { generateTotal } from "./helper";

const amountOfUsers = 3;

export const users = generateTotal<Prisma.UserCreateManyInput>(
  amountOfUsers,
  (_, index) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
      name: `${firstName} ${lastName}`,
      email: `a${index}@gldk.ru`,
      password: "qwerty",
    };
  }
);
