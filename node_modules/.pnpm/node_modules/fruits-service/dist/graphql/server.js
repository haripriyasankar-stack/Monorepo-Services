"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const server_1 = require("@apollo/server");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
exports.server = new server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
