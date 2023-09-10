// GameOver.js
import React from 'react';
import Auth from '../utils/auth'; // Import the Auth utility

const GameOver = () => {

    const currentUser = Auth.getProfile();
    
    return (
        <div className="game-over">
          <h1>Game Over</h1>
          {currentUser ? (
            <p>Logged in as: {currentUser.username}</p>
          ) : (
            <p>Not logged in</p>
          )}
        </div>
      );
    }
    
    export default GameOver;