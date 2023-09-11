/*eslint-disable */
// import { React, useState, useEffect } from 'react';


const HandleClick = (bullets, setBulletCount, playGunshotSound) => {
    setBulletCount((prevBullets) => prevBullets - 1)

    playGunshotSound();
}

export { HandleClick };