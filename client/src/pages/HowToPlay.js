import React from 'react';

import { Link } from 'react-router-dom';

const HowToPlay = () => {

  return (
    <div className="howtoplay main-container center content">
      <main>
        <Link to="/home"><button class="btn btn-lg btn-light btn-block">🔙 HOME</button></Link>

        <br></br>
        <br></br>
        
        <h1>HowToPlay</h1>
        <p>Practice your aim here in the wild west!</p>
        <p>Try to hit as many cowboys as you can! Each cowboy will increase your time! When your time hits 0, it's game over! It's also game over if you hit a cowgirl, so avoid that at all costs! Your score will be tallied up in the end based on the number of cowboys that you hit!</p>
      </main>
    </div>
  );
};

export default HowToPlay;
