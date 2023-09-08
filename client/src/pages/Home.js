import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <main>
      <h1>HOMEPAGE</h1>
      <button><Link to="/login">LOG IN</Link></button>

      <br></br>
      <br></br>

      <button><Link to="/signup">SIGN UP</Link></button>
      <br></br>
      <br></br>
      <button><Link to="/leaderboard">LEADERBOARD</Link></button>
    </main>
  );
};

export default Home;
