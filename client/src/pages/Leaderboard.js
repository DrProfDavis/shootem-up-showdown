import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { QUERY_LEADERBOARDS } from '../utils/queries';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {

  //Gets the data from our query "QUERY_LEADERBOARDS" that is made from our GraphQL
  const { loading, data } = useQuery(QUERY_LEADERBOARDS);
  // console.log("THIS IS THE LEADERBOARD DATA", data);

  //This gets our leaderboards in our database, and then makes an array and sorts it because we can't "sort" the array atrieved from apollo. 
  const sortedLeaderboards = data?.leaderboards
    ? [...data.leaderboards].sort((a, b) => a.score - b.score)
    : [];

    const topTenLeaderboards = sortedLeaderboards.slice(0, 10);

  return (
     <div className="leaderboard center">
      <div>
        <Link to="/"><button class="btn btn-lg btn-light btn-block">🔙 HOME</button></Link>

        <br></br>
        <br></br>

        <h1>LEADERBOARD</h1>

        <br></br>

        <ul>
          {topTenLeaderboards.map((user) => (
            <li key={user._id}>
              {user.leaderboardUser} ⭐ {user.score}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;