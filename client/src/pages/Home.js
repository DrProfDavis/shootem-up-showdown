import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImage from '../images/background1.png'; 
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  
  const h1Style = {
    fontSize: '50px', // Adjust the font size as needed
  };
  
  return (
    <div className="main-container">
      <img src={backgroundImage} alt="Description of the image" className="background-image" />

      {/* Content */}
      <div className="content">
        <h1 style={h1Style}>SHOWDOWN</h1>
        <br></br>
        <br></br>

        <button><Link to="/login">LOG IN</Link></button>

        <br></br>
        <br></br>

        <button><Link to="/signup">SIGN UP</Link></button>

        <br></br>
        <br></br>

        <button><Link to="/leaderboard">LEADERBOARD</Link></button>
      </div>
    </div>
  );
};

export default Home;
