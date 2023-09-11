import React from 'react';

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap';

const HowToPlay = () => {

  return (
    <div className="howtoplay main-container center content">
      <main>
        <Link to="/home" className="btn btn-lg btn-light btn-block btn-style">🔙 HOME</Link>

        <br></br>
        <br></br>

        <h1>HowToPlay</h1>
        <Card className='card-txt'>
          <p>Practice your aim here in the wild west!</p>
          <p>Try to hit as many cowboys as you can! Each cowboy will increase your time! When your time hits 0, it's game over! It's also game over if you hit a cowgirl, so avoid that at all costs! Your score will be tallied up in the end based on the number of cowboys that you hit!</p>
        </Card>
      </main>
    </div>
  );
};

export default HowToPlay;
