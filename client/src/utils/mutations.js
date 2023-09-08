import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $username: String!, $password: String!) {
    login(email: $email, username: $username, password: $password) {
      token
      user {
        email
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
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
