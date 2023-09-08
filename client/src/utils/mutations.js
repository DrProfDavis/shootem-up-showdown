import { gql } from '@apollo/client';

// removed email string from login mutation
export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// removed email from add user mutation
export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_LEADERBOARD = gql`
  mutation addLeaderboard($leaderboardText: String!) {
    addLeaderboard(leaderboardText: $leaderboardText) {
      _id
      score
    }
  }
`;
