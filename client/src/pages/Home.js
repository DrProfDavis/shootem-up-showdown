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

  const pauseBackgroundMusic = () => {
    audio.pause();
    setIsPlaying(false);
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
      <div className="home_box">
        <h1>SHOWDOWN</h1>
      <br></br>


        <div className="selection_ctn">
          {!isAuthenticated ? (
            <Link to="/login" className="button green">LOG IN</Link>
          ) : (
            <div className='main-container'>
              <span>&#x25C6;</span>
              <h3>HOWDY {currentUser.data.username}🌵</h3>
              <span>&#x25C6;</span>
            </div>
          )}
          <br></br>
          <br></br>
          {!isAuthenticated ? (
            <Link to="/signup" className="button blue">SIGN UP</Link>
          ) : (
              <Link to="/game" className="button">PLAY GAME</Link>
          )}
          <br></br>
          <br></br>
          <Link to="/howtoplay" className="button">HOW TO PLAY</Link>
          <br></br>
          <br></br>
          <Link to="/leaderboard" className="button">LEADERBOARD</Link>
          <br></br>
          <nav>
            {isAuthenticated ? (
              <button class="button red" onClick={userLogout}>LOG OUT</button>
              ) : null}
          </nav>
              <br></br>
          </div>

          <div>
            {isPlaying ? (
              <button className="btn btn-dark btn-block btn-style" onClick={pauseBackgroundMusic}>
                🔇
              </button>
            ) : (
              <babelutton className="btn btn-dark btn-block btn-style" onClick={startBackgroundMusic}>
                🔊
              </babelutton>
            )}
          </div>

        </div>

      </div>
  );
};

export default Home;
