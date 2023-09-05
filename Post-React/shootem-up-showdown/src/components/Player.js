import React from "react";
import player1Image from "../images/cowboy.png"; 
import player2Image from "../images/cowboy2.png"; 

const Player = ({ playerNumber }) => {

  const playerImage = playerNumber === 1 ? player1Image :
                      playerNumber === 2 ? player2Image :
                      null;


  if (!playerImage) {
    return null;
  }

  return (
  
      <image className ="player" href={playerImage} width="10" height="10" />

  );
};

export default Player;