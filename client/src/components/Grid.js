import { useState, useEffect, useCallback, useRef } from "react"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import Cell from './Cell'
import Auth from '../utils/auth';
import GridArray from './GridArray'
import DashRevolver from './dashRevolver'
import { PlayerSpawn } from './PlayerSpawn'
import { EnemySpawn1, EnemySpawn2 } from './EnemySpawn';
import { FriendlySpawn1, FriendlySpawn2 } from './FriendlySpawn';
import reloadSound from '../audio/reload.mp3'
import GameOverScreen from "./GameOver";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import Grid2 from './Grid2'
import DashInfo from "./dashInfo";
import DashButtons from "./dashButtons";


const gridArray = GridArray;

const randomPlayerPlace = PlayerSpawn();
const randomEnemyPlace = EnemySpawn1();
const randomEnemyPlace2 = EnemySpawn2();
const randomFriendlyPlace = FriendlySpawn1();
const randomFriendlyPlace2 = FriendlySpawn2();


const Grid = () => {
    //Checks true or false to see if a user is logged in or not
    const isAuthenticated = Auth.loggedIn();

    //Checks the current user that is logged in. If logged in, get the user profile, if not, nothing happens
    const currentUser = isAuthenticated ? Auth.getProfile() : null;

    const [gridArrayState, useGridArrayState] = useState(gridArray)

    //The score of the user
    const [score, setScore] = useState(0);

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
    const [bullets, setBulletCount] = useState(6)

    //Reload
    const [isReloading, setIsReloading] = useState(false);

    //Board Timer
    const [boardTimer, setBoardTimer] = useState(3);

    //Timer
    const [timer, setTimer] = useState(10);

    //Determines if you want to mute the sound effects or not
    const [isMuted, setIsMuted] = useState(false);
    const toggleMute = () => {
        setIsMuted((prevIsMuted) => !prevIsMuted);
    };

    //Check which tile you are clicking on (going to use this for crosshair image)
    const [clickedTileIndex, setClickedTileIndex] = useState(false);

    //Level you are currently at
    const [level, SetLevel] = useState(1);

    const [animationEnded, setAnimationEnded] = useState(false);

    //Reload logic, reload one at a time with a max of six bullets with audio
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

    //Click r to reload, useeffect will only run when handleReload is ran
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

    //Timer to count down
    useEffect(() => {
        if (animationEnded) {
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
        }
    }, [animationEnded]);

    //Timer to count down (board)
    const boardTimerRef = useRef(boardTimer);

    useEffect(() => {
        boardTimerRef.current = boardTimer;
    }, [boardTimer]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (boardTimerRef.current > 1) {
                setBoardTimer(prevTimer => prevTimer - 1);
            } else {
                clearInterval(interval);
                setBoardTimer('DRAW');
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // UNCOMMENT THIS TO MAKE GAMEOVER SCREEN APPEAR
    // if (timer <= 0) {
    //     return <GameOverScreen score={score} />;
    //   }

    //Logic to go to next level. Pass the current score, timer, and bullets
    if (score == 2) {
        return <Grid2 prevScore={score} prevTimer={timer} prevBullets={bullets} />;
    }

    return (
        <div className="main-game">
            {!animationEnded && (
                <div className={`dimmed ${boardTimer === 'DRAW' ? 'fade-out' : ''}`}
                    key={boardTimer}
                    onAnimationEnd={() => setAnimationEnded(true)}>
                    <p>{boardTimer}</p>
                </div>
            )}
            <div className="app">
                <div className="dashboard">
                    <DashInfo
                        isAuthenticated={isAuthenticated}
                        currentUser={currentUser}
                        timer={timer}
                        level={level}
                        score={score}>
                    </DashInfo>
                    <DashRevolver bullets={bullets}></DashRevolver>
                    <DashButtons
                        toggleMute={toggleMute}
                        isMuted={isMuted}>
                    </DashButtons>
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

export default Grid;