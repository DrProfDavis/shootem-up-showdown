import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col } from 'react-bootstrap';


const Home = () => {

  const isAuthenticated = Auth.loggedIn();
  const currentUser = isAuthenticated ? Auth.getProfile() : null;

  const userLogout = () => {
    Auth.logout();
  }

  return (
    <div className="home main-container center">

      <div className="content d-grid gap-2">
        <h1>SHOWDOWN</h1>
        <br></br>
        <br></br>

        {!isAuthenticated ? (
          <Button variant="light" size="lg"><Link to="/login">LOG IN</Link></Button>
        ) : (
          <div>
            <p>Welcome: {currentUser.data.username}</p>
          </div>
        )}

        <br></br>
        <br></br>

        {!isAuthenticated ? (
          <Button variant="light" size="lg"><Link to="/signup">SIGN UP</Link></Button>
        ) : (
          <div>
            <Button variant="light" size="lg"><Link to="/">PLAY GAME</Link></Button>
          </div>
        )}

        <br></br>
        <br></br>

        <Button variant="light" size="lg"><Link to="/howtoplay">HOW TO PLAY</Link></Button>

        <Button variant="light" size="lg"><Link to="/leaderboard">LEADERBOARD</Link></Button>

        {isAuthenticated ? (
          <button onClick={userLogout}>Logout</button>
        ) : null}

      </div>
    </div>
  );
};

export default Home;
