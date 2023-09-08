import React from 'react';
import { useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';

import { QUERY_LEADERBOARDS } from '../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_LEADERBOARDS);
  console.log("THIS IS THE LEADERBOARD DATA", data);


  return (
    <main>
      <h2>SCORES:</h2>
      <ul>
        {data?.leaderboards.map((user) => (
          <li key={user._id}>
            {user._id} - {user.score}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
