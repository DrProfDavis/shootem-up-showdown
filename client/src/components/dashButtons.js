import React from 'react'


function DashButtons({ toggleMute, isMuted }) {
  return (
    <div className="button-ctn">
      <button className="btn btn-dark btn-block btn-style" onClick={toggleMute}>
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  )
}

export default DashButtons;