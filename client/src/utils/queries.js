import { gql } from '@apollo/client';

// removed email from query
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      leaderboard {
        _id
        score
      }
    }
  }
`;

export const QUERY_LEADERBOARDS = gql`
  query getLeaderboard {
    leaderboard {
      _id
      score
    }
  }
`;

export const QUERY_SINGLE_LEADERBOARD = gql`
  query getSingleLeaderboard($leaderboardId: ID!) {
    leaderboard(leaderboardId: $leaderboardId) {
      _id
      score
    }
  }
`;

// removed email from query
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      leaderboard {
        _id
        score
      }
    }
  }
`;
