/*eslint-disable */
// import { React, useState, useEffect } from 'react';


const HandleClick = (bullets, setBulletCount, playGunshotSound, isReloading, setIsReloading) => {
    if (!isReloading && bullets > 0) { // Check if there are bullets available
        setBulletCount((prevBullets) => prevBullets - 1);
        playGunshotSound();
    } 
}

export { HandleClick };