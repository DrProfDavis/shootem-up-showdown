import React from 'react';

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap';

const HowToPlay = () => {

  return (
    <div className="howtoplay main-container center content">
      <main>
        <Link to="/" className="btn btn-lg btn-light btn-block btn-style">🔙 HOME</Link>

        

        <h1>HowToPlay</h1>
        {/* <Card className='card-txt'> */}
          <h5>Practice your aim here in the wild west!</h5>
          <h6>Try to hit all the cowboys while avoiding the cowgirls or "damsels".</h6> 
          <h6>Hitting all the cowboys will progress to the next stage.</h6> 
          <h6>Make sure to reload using the "R" key.</h6>
          <h6>There are five stages total so be quick.</h6> 
          <h6>Hitting a damsel will increase your time so be sure to avoid them.</h6>
        {/* </Card> */}
      </main>
    </div>
  );
};

export default HowToPlay;