import { useState, useEffect } from "react"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import Cell from './Cell'
import GridArray from './GridArray'
import Dashboard from './dashboard'
import { PlayerSpawn } from './PlayerSpawn'
import { EnemySpawn1, EnemySpawn2 } from './EnemySpawn';
import { FriendlySpawn1, FriendlySpawn2 } from './FriendlySpawn';

const gridArray = GridArray;

const randomPlayerPlace = PlayerSpawn();
const randomEnemyPlace = EnemySpawn1();
const randomEnemyPlace2 = EnemySpawn2();
const randomFriendlyPlace = FriendlySpawn1();
const randomFriendlyPlace2 = FriendlySpawn2();


const Grid = () => {
    const [gridArrayState, useGridArrayState] = useState(gridArray)

    const [score, setScore] = useState(0);

    const [playerLocation, setPlayerLocation] = useState({
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

    useEffect(() => {
        console.log("Score has been updated: ", score);
      }, [score]);


    return (
        <div className="app">
            <Dashboard></Dashboard>
            <div className='gameboard'>
                <HexGrid width={1200} height={675}>
                    <Layout spacing={1.05} size={{ x: 6, y: 6 }} origin={{ x: 0, y: 0 }}>
                        {gridArrayState.map((coord, i) => {
                            const [q, r] = coord
                            return (
                                <Cell key={`${i}-${q}-${r}`} q={q} r={r} i={i} setScore={setScore} score={score} setPlayerLocation={setPlayerLocation} playerLocation={playerLocation} setEnemyLocation={setEnemyLocation} enemyLocations={enemyLocations} setFriendlyLocation={setFriendlyLocation} friendlyLocations={friendlyLocations}/>
                            )
                        })}
                    </Layout>
                </HexGrid>
                
            </div>
        </div>
    );
}

export default Grid;