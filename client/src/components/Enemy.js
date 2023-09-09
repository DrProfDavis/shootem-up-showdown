import React from "react";
import EnemyImage from "../images/cowboy2.png"; 


const Enemy = () =>  {           
  return (
      <image className ="enemy" href={EnemyImage} width="10" height="10" />
  );
    }

export {Enemy};