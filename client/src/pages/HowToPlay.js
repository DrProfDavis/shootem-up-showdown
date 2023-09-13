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

          <p>Your goal is to accumulate the highest score possible by hitting as many cowboys as you can while avoiding cowgirls. Keep an eye on your time, as it's crucial to stay in the game.
          </p>
          
          <h3>Instructions:</h3>
          
          <ul>
          <li> Your game begins with a certain amount of time on the clock.</li>
          <li>Hit as many cowboys as you can to increase your remaining time.</li>
          <li>Every cowboy you hit adds to your time, extending your gameplay.</li>
          <li>Be extremely cautious and avoid hitting any cowgirls.</li>
          <li>If you run out of time, the game is over.</li>
          <li>Your final score will be determined by the number of cowboys you successfully hit.</li>
          <li>Good luck, and let's see how many cowboys you can round up!</li></ul>
        </Card>
      </main>
    </div>
  );
};

export default HowToPlay;
