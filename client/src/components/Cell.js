import { React, useState, useEffect } from 'react';
import { Hexagon, Text } from 'react-hexgrid'
import { Player } from './Player' // Import the Player component
import { Enemy } from './Enemy' // Import the Enemy component
import { Friendly } from './Friendly' // Import the Friendly component
import { EnemyShot } from './EnemyShot';
import { FriendlyShot } from './FriendlyShot';
import { HandleClick } from "./HandleClick";
import gunshotSound from '../audio/gunshot.mp3'


const Cell = ({ q, r, i, setScore, score, setPlayerLocation, playerLocation, setEnemyLocation, enemyLocations, setFriendlyLocation, friendlyLocations, timer, setTimer, bullets, setBulletCount, setIsReloading, isReloading }) => {
    // const [clickedPlayer, setClickedPlayer] = useState(0);
    const playGunshotSound = () => {
        const audio = new Audio(gunshotSound);
        audio.play();
    }

    return (
        <Hexagon onClick={() => {
            // HandleClick(q, r, i);npm


            console.log("These are player locations: ", playerLocation);
            HandleClick(bullets, setBulletCount, playGunshotSound, isReloading)
            EnemyShot(i, enemyLocations, setEnemyLocation, setTimer, setScore);
            FriendlyShot(i, friendlyLocations, setFriendlyLocation, setTimer);



        }} key={`${i}-${q}-${r}`} q={q} r={r}>
            {/* {<Text>{i} {q} {r}</Text>} */}
            {playerLocation.player === i ? <Player/> : null}
            {enemyLocations.enemy1 === i ? <Enemy/> : null}
            {enemyLocations.enemy2 === i ? <Enemy/> : null}
            {friendlyLocations.friendly1 === i ? <Friendly/> : null}
            {friendlyLocations.friendly2 === i ? <Friendly/> : null}
        </Hexagon>
    )
}

export default Cell