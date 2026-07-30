import { ApolloServer } from "@Apollo/server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

export const server = new ApolloServer({
    typeDefs,
    resolvers,
});