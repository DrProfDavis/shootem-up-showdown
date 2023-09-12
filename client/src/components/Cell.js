import { React, useState, useEffect } from 'react';
import { Hexagon, Text } from 'react-hexgrid'
import { Player } from './Player' // Import the Player component
import { Enemy } from './Enemy' // Import the Enemy component
import { Friendly } from './Friendly' // Import the Friendly component
import { EnemyShot } from './EnemyShot';
import { FriendlyShot } from './FriendlyShot';
import { HandleClick } from "./HandleClick";
import gunshotSound from '../audio/gunshot.mp3'
import crosshair from '../images/crosshair.jpg'



const Cell = ({ q, r, i, setScore, score, setEnemyLocation, enemyLocations, setFriendlyLocation, friendlyLocations, timer, setTimer, bullets, setBulletCount, setIsReloading, isReloading, setIsMuted, isMuted, setClickedTileIndex, clickedTileIndex, enemies, friendlies, gameStarted, setGameStarted}) => {
    // const [clickedPlayer, setClickedPlayer] = useState(0);
    // const [clickedTileIndex, setClickedTileIndex] = useState(null); 
    const playGunshotSound = () => {
        if(!isMuted)
        {
            const audio = new Audio(gunshotSound);
            audio.play();
        }
    }


    return (
        <Hexagon onClick={() => {
            // HandleClick(q, r, i);npm

            if (!gameStarted) {
                setGameStarted(true);
            }

            HandleClick(bullets, setBulletCount, playGunshotSound, isReloading)
            EnemyShot(i, enemyLocations, setEnemyLocation, setTimer, setScore, isReloading, bullets);
            FriendlyShot(i, friendlyLocations, setFriendlyLocation, setTimer, isReloading, bullets);
            setClickedTileIndex(i);
            console.log(friendlyLocations)
            
            



        }} key={`${i}-${q}-${r}`} q={q} r={r}>
            {/* {<Text>{i} {q} {r}</Text>} */}
            {/* {enemyLocations.enemy1 === i ? <Enemy/> : null} */}
            {/* {enemyLocations.enemy2 === i ? <Enemy/> : null} */}
            {Object.keys(enemyLocations).map((enemy) => enemyLocations[enemy] === i ? <Enemy key={enemy}/> : null)}
            {Object.keys(friendlyLocations).map((friend) => friendlyLocations[friend] === i ? <Friendly key={friend}/> : null)}
            {/* {friendlyLocations.friendly1 === i ? <Friendly/> : null} */}
            {/* {friendlyLocations.friendly2 === i ? <Friendly/> : null} */}
            { i === clickedTileIndex ? <img src={crosshair} alt="Crosshair" className="crosshair" /> : null}
            
        </Hexagon>
    )
}

export default Cell