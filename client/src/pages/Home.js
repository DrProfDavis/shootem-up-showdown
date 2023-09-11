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
      <div>
        <h1>SHOWDOWN</h1>
      <br></br>


        {!isAuthenticated ? (
          <Link to="/login"><button class="btn btn-lg btn-warning btn-block" >LOG IN</button></Link>
        ) : (
          <div className='main-container'>
            <h3>HOWDY {currentUser.data.username}🌵</h3>
          </div>
        )}

        <br></br>

        {!isAuthenticated ? (
          <Link to="/signup"><button class="btn btn-lg btn-warning btn-block">SIGN UP</button></Link>
        ) : (
            <Link to="/"><button class="btn btn-lg btn-warning btn-block">PLAY GAME</button></Link>
        )}

        <br></br>
        <br></br>

        <Link to="/howtoplay"><button class="btn btn-lg btn-warning btn-block" >HOW TO PLAY</button></Link>
        <br></br>
        <br></br>

        <Link to="/leaderboard"><button class="btn btn-lg btn-warning btn-block" >LEADERBOARD</button></Link>

        <br></br>
        <br></br>

        <nav>
          {isAuthenticated ? (
            <button class="btn btn-sm btn-danger btn-block" onClick={userLogout}>LOG OUT</button>
          ) : null}
        </nav>

      </div>
    </div>
  );
};

export default Home;
