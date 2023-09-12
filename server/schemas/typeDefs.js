const { gql } = require('apollo-server-express');

// removed email from addUser and log in mutation and type User
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    leaderboard: [Leaderboard]
  }

  type Leaderboard {
    _id: ID
    leaderboardUser: String
    score: Float
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
    addUser(username: String!, password: String!): Auth
    addLeaderboard(score: Float!): Leaderboard
    login(username:String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
