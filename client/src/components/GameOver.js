// GameOver.js
import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col } from 'react-bootstrap';

const GameOver = () => {
  return (
    <div className="gameover main-container content">
        <h1>Game Over</h1>

      <Button
        className="btn btn-block btn-warning"
        style={{ cursor: 'pointer' }}
        type="submit"><Link to="/leaderboard"
        className="btn btn-block btn-secondary">LEADERBOARD</Link>
      </Button>

  </div>
  );
}

export default GameOver;