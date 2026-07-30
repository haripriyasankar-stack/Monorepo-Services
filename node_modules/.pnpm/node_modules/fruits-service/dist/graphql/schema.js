"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.typeDefs = (0, graphql_tag_1.default) `
  type Fruit {
    id: ID!
    name: String!
    color: String!
    addedBy: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }

  type Query {
    fruits: [Fruit!]!
    fruit(id: ID!): Fruit
  }

  type Mutation {
    createFruit(name: String!, color: String!, addedBy: ID!): Fruit!
}
`;
