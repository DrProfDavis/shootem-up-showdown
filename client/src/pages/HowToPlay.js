import React from 'react';

import { Link } from 'react-router-dom';

const HowToPlay = () => {

  return (
    <div className="howtoplay main-container center content">
      <main>
        <button><Link to="/home">Click here to go back</Link></button>

        <h1>HowToPlay</h1>
      </main>
    </div>
  );
};

export default HowToPlay;
