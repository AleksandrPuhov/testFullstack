# Finance app

## Used libs

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Mantine v6](https://v6.mantine.dev/)
- [Zenstack](https://zenstack.dev/)
- [Lingui](https://lingui.dev/)
- [Nanostores](https://github.com/nanostores/react)
- [React-ts-form](https://react-ts-form.com/)


## How start dev server

Run command

```
yarn dev
```

and open [http://localhost:4001](http://localhost:4001) in browser

Use [this docs](https://zenstack.dev/docs/quick-start/nextjs) and [this](https://zenstack.dev/docs/guides/dev-workflow) for help start work with zenstack shemas.

## Start local postgresql from docker

Run command

```
docker compose up -d postgres
```

Connect with

```
postgresql://postgres:postgres@localhost:5432/postgres?schema=public&sslmode=prefer
```

## Prisma commands for local development

```
npx prisma generate
npx prisma db push
```

Seed demo data for local developnent
```
npx prisma db seed
```

Create new migration ([docs](https://www.prisma.io/docs/concepts/components/prisma-migrate/get-started))
```
npx prisma migrate dev --name <migration name>
```

Reset database
```
npx prisma migrate reset
```

[More information about Prisma CLI](https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-reset)