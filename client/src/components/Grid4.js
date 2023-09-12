import { useState, useEffect, useCallback, useRef } from "react"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import { PlayerSpawn } from './PlayerSpawn'
import { EnemySpawn1, EnemySpawn2 } from './EnemySpawn';
import { FriendlySpawn1, FriendlySpawn2 } from './FriendlySpawn';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Cell from './Cell'
import Auth from '../utils/auth';
import GridArray from './GridArray'
import reloadSound from '../audio/reload.mp3'
import GameOverScreen from "./GameOver";
import DashInfo from "./dashInfo";
import DashButtons from "./dashButtons";
import DashRevolver from './dashRevolver'
import 'bootstrap/dist/css/bootstrap.min.css'
import Grid5 from "./Grid5";



const gridArray = GridArray;

const randomPlayerPlace = PlayerSpawn();
const randomEnemyPlace = EnemySpawn1();
const randomEnemyPlace2 = EnemySpawn2();
const randomFriendlyPlace = FriendlySpawn1();
const randomFriendlyPlace2 = FriendlySpawn2();


const Grid4 = ({ prevScore, prevTimer, prevBullets }) => {
    //Checks true or false to see if a user is logged in or not
    const isAuthenticated = Auth.loggedIn();

    //Checks the current user that is logged in. If logged in, get the user profile, if not, nothing happens
    const currentUser = isAuthenticated ? Auth.getProfile() : null;

    const [gridArrayState, useGridArrayState] = useState(gridArray)

    //The score of the user
    const [score, setScore] = useState(prevScore);

    //Player location (I think we're deleting this)
    const [playerLocation, setPlayerLocation] = useState({
        player: randomPlayerPlace.i,
    });


    //Enemy locations
    const [enemyLocations, setEnemyLocation] = useState({
        enemy1: randomEnemyPlace.i,
        enemy2: randomEnemyPlace2.i,
    });

    //Cowgirl locations
    const [friendlyLocations, setFriendlyLocation] = useState({
        friendly1: randomFriendlyPlace.i,
        friendly2: randomFriendlyPlace2.i,
    });

    //Bullets remaining
    const [bullets, setBulletCount] = useState(prevBullets)

    //Reload
    const [isReloading, setIsReloading] = useState(false);

    //Timer
    const [timer, setTimer] = useState(prevTimer);


    const [isMuted, setIsMuted] = useState(false);


    const toggleMute = () => {
        setIsMuted((prevIsMuted) => !prevIsMuted);
    };

    const [clickedTileIndex, setClickedTileIndex] = useState(false);

    const [level, SetLevel] = useState(4);



    //Reload logic, reload one at a time with a max of six bullets
    const handleReload = useCallback(() => {
        if (bullets < 6 && !isReloading) {
            if (!isMuted) {
                const reloadAudio = new Audio(reloadSound);
                reloadAudio.play();
            }
            setIsReloading(true);
            console.log("Reloading...");
            setTimeout(() => {
                setBulletCount((prevCount) => Math.min(prevCount + 1, 6)); // Increment bullet count
                setIsReloading(false);
                console.log("Reloaded! Bullets: ", bullets + 1);
            }, 1000);
        }
    }, [bullets, isReloading, setIsReloading, setBulletCount]);



    useEffect(() => {
        console.log("These are enemy locations: ", enemyLocations);
    }, [enemyLocations]);

    useEffect(() => {
        console.log("These are friendly locations: ", friendlyLocations);
    }, [friendlyLocations]);

    useEffect(() => {
        console.log("Score has been updated: ", score);
    }, [score]);

    useEffect(() => {
        console.log("Bullets has been updated: ", bullets);
    }, [bullets]);

    useEffect(() => {
        console.log("THIS IS THE CLICKED TILE INDEX: ", clickedTileIndex);
    }, [clickedTileIndex]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "r") {
                handleReload();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleReload]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // UNCOMMENT THIS TO MAKE GAMEOVER SCREEN APPEAR
    if (timer <= 0) {
        return <GameOverScreen score={score} />;
    }

    if (score == 8) {
        return <Grid5 prevScore={score} prevTimer={timer} prevBullets={bullets} />;
    }



    return (

        <div className="timerDiv">
            <div className="app">
                <div className="dashboard">
                    <DashInfo
                        isAuthenticated={isAuthenticated}
                        currentUser={currentUser}
                        timer={timer}
                        level={level}
                        score={score}
                    />
                    <DashRevolver bullets={bullets}
                    />
                    <DashButtons
                        toggleMute={toggleMute}
                        isMuted={isMuted}
                    />
                </div>
                <div className='gameboard'>
                    <HexGrid className="grid" width={1200} height={675}>
                        <Layout spacing={1.05} size={{ x: 6, y: 6 }} origin={{ x: 0, y: 0 }}>
                            {gridArrayState.map((coord, i) => {
                                const [q, r] = coord
                                return (
                                    <Cell
                                        key={`${i}-${q}-${r}`}
                                        q={q}
                                        r={r}
                                        i={i}
                                        setScore={setScore}
                                        score={score}
                                        setPlayerLocation={setPlayerLocation}
                                        playerLocation={playerLocation}
                                        setEnemyLocation={setEnemyLocation}
                                        enemyLocations={enemyLocations}
                                        setFriendlyLocation={setFriendlyLocation}
                                        friendlyLocations={friendlyLocations}
                                        setTimer={setTimer}
                                        timer={timer}
                                        setBulletCount={setBulletCount}
                                        bullets={bullets}
                                        setIsReloading={setIsReloading}
                                        isReloading={isReloading}
                                        setIsMuted={setIsMuted}
                                        isMuted={isMuted}
                                        setClickedTileIndex={setClickedTileIndex}
                                        clickedTileIndex={clickedTileIndex}
                                    />


                                )
                            })}
                        </Layout>
                    </HexGrid>
                </div>
            </div>
        </div>
    );
}

export default Grid4;