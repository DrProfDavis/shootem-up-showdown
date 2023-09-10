import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'; 
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col } from 'react-bootstrap';

const GameOver = ({score}) => {

    const currentUser = Auth.getProfile();
    console.log("THE CURRENT USER LOGGED IN IS: ", currentUser);


return (
    <div className="gameover main-container content">
      <h1>Game Over</h1>

      {currentUser && (
        <>
        <p>Current User: {currentUser.data.username}</p>
        <p>Score: {score}</p>
        </>
      )}

      <Button
        className="btn btn-block btn-warning"
        style={{ cursor: 'pointer' }}
        type="submit">
        <Link to="/leaderboard" className="btn btn-block btn-secondary">
          LEADERBOARD
        </Link>
      </Button>
    </div>
  );
}

export default GameOver;