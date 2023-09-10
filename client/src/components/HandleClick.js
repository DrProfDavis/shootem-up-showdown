/*eslint-disable */
// import { React, useState, useEffect } from 'react';


const HandleClick = (bullets, setBulletCount) => {
    setBulletCount((prevBullets) => prevBullets - 1)
}

export { HandleClick };