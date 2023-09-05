import { useState } from "react"
import Cell from './Cell'

const Player = ({ q, r }) => {
    const playerStyle = {
      position: 'fixed',
      width: '20px',
      height: '20px',
      backgroundColor: 'red',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)', // Center the dot
    };
   
    return (
      <div style={{ ...playerStyle, top: `${q * 50}px`, left: `${r * 50}px` }}>
        {/* You can customize the appearance of the player here */}
      </div>
    );
  };
  
  export default Player;