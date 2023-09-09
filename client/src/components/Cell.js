import { React, useState, useEffect } from 'react';
import { Hexagon, Text } from 'react-hexgrid'
import { Player } from './Player' // Import the Player component
import { Enemy } from './Enemy' // Import the Enemy component
import { Friendly } from './Friendly' // Import the Friendly component
import { EnemyShot } from './EnemyShot';
import { FriendlyShot } from './FriendlyShot';
import { PlayerSpawn } from './PlayerSpawn'
import { EnemySpawn1, EnemySpawn2 } from './EnemySpawn';
import { FriendlySpawn1, FriendlySpawn2 } from './FriendlySpawn';



const randomPlayerPlace = PlayerSpawn();
const randomEnemyPlace = EnemySpawn1();
const randomEnemyPlace2 = EnemySpawn2();
const randomFriendlyPlace = FriendlySpawn1();
const randomFriendlyPlace2 = FriendlySpawn2();


const Cell = ({ q, r, i, setScore, score }) => {
    // const [clickedPlayer, setClickedPlayer] = useState(0);

    const [playerLocations, setPlayerLocations] = useState({
        player: randomPlayerPlace.i,
    });

    const [enemyLocations, setEnemyLocation] = useState({
        enemy1: randomEnemyPlace.i,
        enemy2: randomEnemyPlace2.i,
    });

    const [friendlyLocations, setFriendlyLocation] = useState({
        friendly1: randomFriendlyPlace.i,
        friendly2: randomFriendlyPlace2.i,
    });
    




    useEffect(() => {
        console.log("These are enemy locations: ", enemyLocations);
      }, [enemyLocations]);

      useEffect(() => {
        console.log("These are friendly locations: ", friendlyLocations);
      }, [friendlyLocations]);



    return (
        <Hexagon onClick={() => {
            // HandleClick(q, r, i);

            console.log("These are player locations: ", playerLocations);

            EnemyShot(i, enemyLocations, setEnemyLocation, score, setScore);
            FriendlyShot(i, friendlyLocations, setFriendlyLocation);



        }} key={`${i}-${q}-${r}`} q={q} r={r}>
            {/* {<Text>{i} {q} {r}</Text>} */}
            {playerLocations.player === i ? <Player/> : null}
            {enemyLocations.enemy1 === i ? <Enemy/> : null}
            {enemyLocations.enemy2 === i ? <Enemy/> : null}
            {friendlyLocations.friendly1 === i ? <Friendly/> : null}
            {friendlyLocations.friendly2 === i ? <Friendly/> : null}
        </Hexagon>
    )
}

export default Cell