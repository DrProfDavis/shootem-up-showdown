import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import backgroundMusic from '../audio/background-home.mp3'


const Home = () => {

  const [audio] = useState(new Audio(backgroundMusic));
  const [isPlaying, setIsPlaying] = useState(false);

  const isAuthenticated = Auth.loggedIn();
  const currentUser = isAuthenticated ? Auth.getProfile() : null;

  const userLogout = () => {
    Auth.logout();
  }

  const startBackgroundMusic = () => {
    audio.play();
    setIsPlaying(true);
  }

  useEffect(() => {
    // Cleanup the audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

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

        {!isPlaying && (
          <button class="btn btn-sm btn-dark btn-block" onClick={startBackgroundMusic}>
            🔊
          </button>
        )}

      </div>
    </div>
  );
};

export default Home;
