const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    leaderboard: [Leaderboard]
  }

  type Leaderboard {
    _id: ID
    score: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    leaderboards(username: String): [Leaderboard]
    leaderboard(leaderboardId: ID!): Leaderboard
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addLeaderboard(products: [ID]!): Leaderboard
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
