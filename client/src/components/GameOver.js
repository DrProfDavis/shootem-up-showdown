import React from 'react';
import { useMutation } from '@apollo/client'; 
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'; 
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import { ADD_LEADERBOARD } from '../utils/mutations';

const GameOver = ({score}) => {

    const currentUser = Auth.getProfile();
    console.log("THE CURRENT USER LOGGED IN IS: ", currentUser);
    const [addLeaderboard] = useMutation(ADD_LEADERBOARD);

    const handleAddToLeaderboard = () => {
        addLeaderboard({
          variables: { score },
        })
          .then((response) => {
            console.log("Score added to leaderboard:", response);
          })
          .catch((error) => {
            console.error("Error adding score to leaderboard:", error);
          });
      };


return (
    <div className="gameover main-container center content">
      <main>
        <h1>Game Over</h1>
        <div className='content_box'>
          {currentUser && (
            <>
            {/* <p>User ID: {currentUser.data._id}</p> */}
            <h5>Current User: <span className='yellow'>{currentUser.data.username}</span></h5>
            <h5>Score: <span className='yellow'>{score}</span></h5>
            </>
          )}
        </div>
        <br></br>
        
          <Link to="/leaderboard"><button
          className="button"
          style={{ cursor: 'pointer' }}
          type="submit"
          onClick={handleAddToLeaderboard}>LEADERBOARD</button></Link>
        
        
      </main>
    </div>
  );
}

export default GameOver;