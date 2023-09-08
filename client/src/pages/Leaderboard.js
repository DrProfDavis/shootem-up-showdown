import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { QUERY_LEADERBOARDS } from '../utils/queries';

const Home = () => {

  //Gets the data from our query "QUERY_LEADERBOARDS" that is made from our GraphQL
  const { loading, data } = useQuery(QUERY_LEADERBOARDS);
  // console.log("THIS IS THE LEADERBOARD DATA", data);

  //This gets our leaderboards in our database, and then makes an array and sorts it because we can't "sort" the array atrieved from apollo. 
  const sortedLeaderboards = data?.leaderboards
    ? [...data.leaderboards].sort((a, b) => b.score - a.score)
    : [];



  return (
    <main>
      <h2>SCORES:</h2>
      <ul>
        {sortedLeaderboards?.map((user) => (
          <li key={user._id}>
            {user.leaderboardUser} - {user.score}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
