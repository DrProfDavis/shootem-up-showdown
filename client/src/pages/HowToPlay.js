import React from 'react';

import { Link } from 'react-router-dom';

const HowToPlay = () => {

  return (
    <main>
      <button><Link to="/login">LOG IN</Link></button>

      <br></br>
      <br></br>

      <button><Link to="/signup">SIGN UP</Link></button>
      <br></br>
      <br></br>
      <button><Link to="/leaderboard">LEADERBOARD</Link></button>
      <h1>HowToPlay</h1>
    </main>
  );
};

export default HowToPlay;
