import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col } from 'react-bootstrap';


const Home = () => {

  return (
    <div className="home main-container center">

      <div className="content d-grid gap-2">
        <h1>SHOWDOWN</h1>
        <br></br>
        <br></br>

        <Button variant="light" size="lg"><Link to="/login">LOG IN</Link></Button>

        <br></br>
        <br></br>

        <Button variant="light" size="lg"><Link to="/signup">SIGN UP</Link></Button>

        <br></br>
        <br></br>

        <Button variant="light" size="lg"><Link to="/leaderboard">LEADERBOARD</Link></Button>
      </div>
    </div>
  );
};

export default Home;
