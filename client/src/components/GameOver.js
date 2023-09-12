import React from 'react';
import { useMutation } from '@apollo/client'; 
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'; 
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import { ADD_LEADERBOARD } from '../utils/mutations';

const GameOver = ({timer}) => {

    const currentUser = Auth.getProfile();
    console.log("THE CURRENT USER LOGGED IN IS: ", currentUser);
    const [addLeaderboard] = useMutation(ADD_LEADERBOARD);

    const handleAddToLeaderboard = () => {
        addLeaderboard({
          variables: { timer },
        })
          .then((response) => {
            console.log("Score added to leaderboard:", response);
          })
          .catch((error) => {
            console.error("Error adding score to leaderboard:", error);
          });
      };


return (
    <div className="gameover main-container content">
      <h1>Game Over</h1>

      {currentUser && (
        <>
        {/* <p>User ID: {currentUser.data._id}</p> */}
        <p>Current User: {currentUser.data.username}</p>
        <p>Score: {timer}</p>
        </>
      )}

      <Button
        className="btn btn-block btn-warning"
        style={{ cursor: 'pointer' }}
        type="submit"
        onClick={handleAddToLeaderboard}>
        <Link to="/leaderboard" className="btn btn-block btn-secondary">
          LEADERBOARD
        </Link>
      </Button>
    </div>
  );
}

export default GameOver;