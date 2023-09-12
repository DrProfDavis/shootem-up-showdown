import React from "react";


function DashInfo({ isAuthenticated, currentUser, timer, level, score }) {
  return (
    <div className="playerInfo">
      <div className="user">
        <h4 className="head">Player</h4>
        {isAuthenticated && (<h4 className="info"> {currentUser.data.username}</h4>)}
      </div>
      <div className="timer">
        <h4 className="head">Timer</h4>
        <h4 className="infoTimer">{timer}</h4>
      </div>
      <div className="score level">
        <div>
          <h4 className="head">Level</h4>
          <h4 className="info">{level}</h4>
        </div>
        <div>
          <h4 className="head">Score</h4>
          <h4 className="info">{score}</h4>
        </div>
      </div>
    </div>
  )
}

export default DashInfo;