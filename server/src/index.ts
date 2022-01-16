import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, NonEmptyArray } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { UserCrudResolvers } from "./resolvers/user";
import { Context } from "./types";

const prisma = new PrismaClient();

const resolvers = [...UserCrudResolvers] as NonEmptyArray<Function>;

const main = async () => {
  const app = express();
  const schema = await buildSchema({
    resolvers,
  });
  const apolloServer = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4001, () => {
    console.log("Server start at port 4001");
  });
};

main()
  .catch((err) => {
    console.error(err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
