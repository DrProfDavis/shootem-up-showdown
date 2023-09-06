import React from "react";
import playerImage1 from "../images/cowboy.png"; 
import playerImage2 from "../images/cowboy.png"; 

const Player = ({ playerNumber }) => {

  const playerImage = playerNumber === 1 ? playerImage1 :
                      playerNumber === 2 ? playerImage2 :
                      null;

                      
  return (
      <image className ="player" href={playerImage} width="10" height="10" />
  );
};

export {Player};