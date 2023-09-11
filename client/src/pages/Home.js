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


        <div className="d-grid gap-2">
          {!isAuthenticated ? (
            <Link to="/login" className="btn btn-block btn-warning">LOG IN</Link>
          ) : (
            <div className='main-container'>
              <h3>HOWDY {currentUser.data.username}🌵</h3>
            </div>
          )}
          <br></br>
          <br></br>
          {!isAuthenticated ? (
            <Link to="/signup" className="btn btn-block btn-warning">SIGN UP</Link>
          ) : (
              <Link to="/game" className="btn btn-block btn-warning">PLAY GAME</Link>
          )}
          <br></br>
          <br></br>
          <Link to="/howtoplay" className="btn btn-block btn-warning">HOW TO PLAY</Link>
          <br></br>
          <br></br>
          <Link to="/leaderboard" className="btn btn-block btn-warning">LEADERBOARD</Link>
          <br></br>
          <br></br>
          <nav>
            {isAuthenticated ? (
              <button class="btn btn-sm btn-danger btn-block" onClick={userLogout}>LOG OUT</button>
            ) : null}
          </nav>
          <br></br>
          {!isPlaying && (
            <button class="btn btn-sm btn-dark btn-block" onClick={startBackgroundMusic}>
              🔊
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default Home;
