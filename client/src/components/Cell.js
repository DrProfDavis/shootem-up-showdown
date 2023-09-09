import { React, useState, useEffect } from 'react';
import { Hexagon, Text } from 'react-hexgrid'
import { Player } from './Player' // Import the Player component
import { Enemy } from './Enemy' // Import the Player component
import { EnemyShot } from './EnemyShot';
import { PlayerSpawn } from './PlayerSpawn'
import { EnemySpawn1, EnemySpawn2 } from './EnemySpawn';



const randomPlayerPlace = PlayerSpawn();
const randomEnemyPlace = EnemySpawn1();
const randomEnemyPlace2 = EnemySpawn2();


const Cell = ({ q, r, i }) => {
    // const [clickedPlayer, setClickedPlayer] = useState(0);

    const [playerLocations, setPlayerLocations] = useState({
        player: randomPlayerPlace.i,
    });

    const [enemyLocations, setEnemyLocation] = useState({
        enemy1: randomEnemyPlace.i,
        enemy2: randomEnemyPlace2.i,
    });

    const [score, setScore] = useState(0);


    useEffect(() => {
        console.log("These are enemy locations: ", enemyLocations);
      }, [enemyLocations]);

      useEffect(() => {
        console.log("Score has been updated: ", score);
      }, [score]);


    return (
        <Hexagon onClick={() => {
            // HandleClick(q, r, i);

            console.log("These are player locations: ", playerLocations);

            EnemyShot(i, enemyLocations, setEnemyLocation, score, setScore);



        }} key={`${i}-${q}-${r}`} q={q} r={r}>
            {<Text>{i} {q} {r}</Text>}
            {playerLocations.player === i ? <Player/> : null}
            {enemyLocations.enemy1 === i ? <Enemy/> : null}
            {enemyLocations.enemy2 === i ? <Enemy/> : null}
        </Hexagon>
    )
}

export default Cell