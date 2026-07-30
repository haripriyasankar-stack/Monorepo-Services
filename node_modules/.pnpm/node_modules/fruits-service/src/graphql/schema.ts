
import gql from "graphql-tag";

export const typeDefs = gql`
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