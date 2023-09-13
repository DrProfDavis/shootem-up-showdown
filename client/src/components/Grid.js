import { useState, useEffect, useCallback, useRef } from "react"
import { HexGrid, Layout } from 'react-hexgrid';
import { EnemySpawn } from './EnemySpawn';
import { FriendlySpawn} from './FriendlySpawn';
import { Enemy } from './Enemy' // Import the Enemy component
import Cell from './Cell'
import Auth from '../utils/auth';
import GridArray from './GridArray'
import reloadSound from '../audio/reload.mp3'
import GameOverScreen from "./GameOver";
import DashInfo from "./dashInfo";
import DashButtons from "./dashButtons";
import DashRevolver from './dashRevolver';
import BackgroundMusic from '../audio/background-home.mp3';
import 'bootstrap/dist/css/bootstrap.min.css'

const gridArray = GridArray;

const randomFriendlyPlace = FriendlySpawn(3);
const randomEnemyPlace = EnemySpawn(6);


const Grid = () => {
    //Checks true or false to see if a user is logged in or not
    const isAuthenticated = Auth.loggedIn();

    //Checks the current user that is logged in. If logged in, get the user profile, if not, nothing happens
    const currentUser = isAuthenticated ? Auth.getProfile() : null;

    const [gridArrayState] = useState(gridArray)

    //The score of the user
    const [score, setScore] = useState(0);

    //Enemy Spawn locations
    const [enemyLocations, setEnemyLocation] = useState(
        randomEnemyPlace.reduce((locations, place, index) => {
            locations[`enemy${index + 1}`] = place.i;
            return locations;
        }, {})
    );

    //Cowgirl spawn locations
    const [friendlyLocations, setFriendlyLocation] = useState(
        randomFriendlyPlace.reduce((locations, place, index) => {
            locations[`friendly${index + 1}`] = place.i;
            return locations;
        }, {})
    );

    //Bullets Counter
    const [bullets, setBulletCount] = useState(6)

    //Reload
    const [isReloading, setIsReloading] = useState(false);

    //Board Timer
    const [boardTimer, setBoardTimer] = useState(3);

    //Timer
    const [timer, setTimer] = useState(0.00);

    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    //Determines if you want to mute the sound effects or not
    const [isMuted, setIsMuted] = useState(false);

    //Toggle Mute function
    const toggleMute = () => {
        setIsMuted((prevIsMuted) => !prevIsMuted);
    };

    //Check which tile you are clicking on (going to use this for crosshair image)
    const [clickedTileIndex, setClickedTileIndex] = useState(false);

    //Level you are currently at
    const [level, SetLevel] = useState(1);

    //Variable for checking if any animations have finished.
    const [animationEnded, setAnimationEnded] = useState(false);

    const [gameStarted, setGameStarted] = useState(false);

    //Gameover state
    const [gameOver, setGameOver] = useState(false);

    const backgroundMusicRef = useRef(null);

    const startMusic = () => {
    const backgroundMusic = new Audio(BackgroundMusic);
    backgroundMusic.volume = 0.2;
    backgroundMusicRef.current = backgroundMusic; // Store the reference
    backgroundMusic.play();
    setIsMusicPlaying(true);
};

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
            }, 100);
        }
    }, [bullets, isReloading, setIsReloading, setBulletCount, isMuted]);

    //Spawn new enemies logic
    const addNewEnemies = (numNewEnemies) => {
        const newEnemyLocations = EnemySpawn(numNewEnemies);
        setEnemyLocation(prevLocations => ({
            ...prevLocations,
            ...newEnemyLocations.reduce((locations, place, index) => {
                locations[`enemy${Object.keys(prevLocations).length + index + 1}`] = place.i;
                return locations;
            }, {})
        }));
    };

    //Spawn new enemies logic
    const addNewFriends = (numNewFriends) => {
        const newFriendLocations = FriendlySpawn(numNewFriends);
        setFriendlyLocation(prevLocations => ({
            ...prevLocations,
            ...newFriendLocations.reduce((locations, place, index) => {
                locations[`friendly${Object.keys(prevLocations).length + index + 1}`] = place.i;
                return locations;
            }, {})
        }));
    };

    useEffect(() => {
        if (backgroundMusicRef.current) {
            backgroundMusicRef.current.muted = isMuted;
        }
    }, [isMuted]);

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
        if (score >= 90 && level >= 5) {
            setGameOver(true);
        }
    }, [score, level]);

    //Click r to reload, useEffect will only run when handleReload is ran
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

    //Timer to count down (GAME)
    useEffect(() => {
        if (!gameOver && animationEnded && gameStarted) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer >= 0) {
                        // Increment the timer by 0.01
                        const newTimer = Number((prevTimer + 0.01).toFixed(2));
                        return newTimer;
                    } else {
                        // Timer has reached 0, clear the interval
                        clearInterval(interval);
                        return 0.00;
                    }
                });
            }, 10); // Run every 10 milliseconds (0.01 seconds)

            return () => clearInterval(interval);
        }
    }, [animationEnded, gameOver, gameStarted]);

    //Timer to count down (BOARD)
    const boardTimerRef = useRef(boardTimer);

    useEffect(() => {
        boardTimerRef.current = boardTimer;
    }, [boardTimer]);

    useEffect(() => {
        if (boardTimer === 'DRAW' && !isMusicPlaying) {
          startMusic();
        }
      }, [boardTimer, isMusicPlaying]);

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

    //Logic to handle the level changes, and enemy respawns
    useEffect(() => {
        if (score === 6) {
            addNewFriends(3);
            addNewEnemies(12);
            SetLevel(prevLevel => prevLevel + 1)
        }
        if (score === 18) {
            addNewFriends(6);
            addNewEnemies(18);
            SetLevel(prevLevel => prevLevel + 1)
        }
        if (score === 36) {
            addNewFriends(9);
            addNewEnemies(24);
            SetLevel(prevLevel => prevLevel + 1)
        }
        if (score === 60) {
            addNewFriends(12);
            addNewEnemies(30);
            SetLevel(prevLevel => prevLevel + 1)
        }
    }, [score]);

    //End game when all enemies have been killed
    if (score === 90 && level === 5) {
        return <GameOverScreen score={timer} />;
    }

    //Maps all enemies
    const enemies = Object.values(enemyLocations).map((location, index) => {
        return <Enemy key={`enemy${index + 1}`} location={location} />;
    });

    // Maps all Friends
    const friendlies = Object.values(enemyLocations).map((location, index) => {
        return <Enemy key={`enemy${index + 1}`} location={location} />;
    });

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
                                        enemies={enemies}
                                        friendlies={friendlies}
                                        gameStarted={gameStarted}
                                        setGameStarted={setGameStarted}
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