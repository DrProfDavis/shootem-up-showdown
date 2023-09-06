const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userame: String
    email: String
    leaderboard: [Leaderboard]
  }

  type Leaderboard {
    _id: ID
    score: Int
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    leaderboard(_id: ID!): Leaderboard
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addLeaderboard(products: [ID]!): Leaderboard
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
