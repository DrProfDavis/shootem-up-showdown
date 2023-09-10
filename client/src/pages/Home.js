import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'animate.css';

const Home = () => {

  return (
    <main className='home-div'>
      <div className="d-grid gap-4 card p-5">
        <h1 className="text-center home-text">SHOOTEM UP SHOWDOWN</h1>
        <Link to="/login" className="btn btn-block btn-secondary">LOG IN</Link>
        <br></br>
        <br></br>
        <Link to="/signup" className="btn btn-block btn-secondary">SIGN UP</Link>
        <br></br>
        <br></br>
        <Link to="/leaderboard" className="btn btn-block btn-secondary">LEADERBOARD</Link>
      </div>
    </main>
  );
};

export default Home;
