import React from 'react';

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap';

const HowToPlay = () => {

  return (
    <div className="howtoplay main-container center ">
      <main>
        <Link to="/" className="btn btn-lg btn-light btn-block btn-style">🔙 HOME</Link>

        <br></br>
        <br></br>

        <h1>HowToPlay</h1>
        <Card className='card-txt'>
          <h3>Objective: </h3>

          <p>Your goal is to complete the game as fast as possible! Shoot all of the evil cowboys while avoiding the poor and defenseless cowgirls. Keep an eye on your time, only the cowboys with the quickest reaction times will be able to make the leaderboard.
          </p>
          
          <h3>Instructions:</h3>
          
          <ul>
          <li> Your game begins with with a time of 0, try to finish the game as fast as possible!</li>
          <li>Shoot all of the cowboys on the screen to go to the next stage!</li>
          <li>Be extremely cautious and avoid hitting any cowgirls! Hitting them adds time to your timer, so be a good shot!</li>
          <li>The game is over when you complete level 5!</li>
          <li>Your final score will be determined by the time that it took you to complete all 5 levels.</li>
          <li>Good luck, and let's see how many cowboys you can round up!</li></ul>
        </Card>
      </main>
    </div>
  );
};

export default HowToPlay;
