import { React } from 'react';
import { Hexagon } from 'react-hexgrid'
import { Enemy } from './Enemy' // Import the Enemy component
import { Friendly } from './Friendly' // Import the Friendly component
import { EnemyShot } from './EnemyShot';
import { FriendlyShot } from './FriendlyShot';
import { HandleClick } from "./HandleClick";
import gunshotSound from '../audio/gunshot.mp3'
import cowgirlHitSound from '../audio/Female2.mp3'
import enemyHitSound from '../audio/Male5.mp3'
import crosshair from '../images/crosshair.jpg'



const Cell = ({ q, r, i, setScore, score, setEnemyLocation, enemyLocations, setFriendlyLocation, friendlyLocations, timer, setTimer, bullets, setBulletCount, setIsReloading, isReloading, setIsMuted, isMuted, setClickedTileIndex, clickedTileIndex, enemies, friendlies, gameStarted, setGameStarted}) => {

    const playGunshotSound = () => {
        if(!isMuted)
        {
            const gunSound = new Audio(gunshotSound);
            gunSound.volume = .05;
            gunSound.play();
        }
    }

    const playCowgirlHit = () => {
        if(!isMuted)
        {
            const cowgirlHit = new Audio(cowgirlHitSound);
            cowgirlHit.play();
        }
    }

    const playEnemyHit = () => {
        if(!isMuted)
        {
            const enemyHit = new Audio(enemyHitSound);
            enemyHit.play();
        }
    }

    return (
        <Hexagon onClick={() => {
            // HandleClick(q, r, i);

            if (!gameStarted) {
                setGameStarted(true);
            }

            HandleClick(bullets, setBulletCount, playGunshotSound, isReloading)
            EnemyShot(i, enemyLocations, setEnemyLocation, setTimer, setScore, isReloading, bullets, playEnemyHit);
            FriendlyShot(i, friendlyLocations, setFriendlyLocation, setTimer, isReloading, bullets, playCowgirlHit);
            setClickedTileIndex(i);
            console.log(friendlyLocations)
        }} key={`${i}-${q}-${r}`} q={q} r={r}>
            {/* {<Text>{i} {q} {r}</Text>} */}
            
            {/* Enemies spawn logic */}
            {Object.keys(enemyLocations).map((enemy) => enemyLocations[enemy] === i ? <Enemy key={enemy}/> : null)}

            {/* Friendly spawn logic */}
            {Object.keys(friendlyLocations).map((friend) => friendlyLocations[friend] === i ? <Friendly key={friend}/> : null)}

            { i === clickedTileIndex ? <img src={crosshair} alt="Crosshair" className="crosshair" /> : null}
        </Hexagon>
    )
}

export default Cell  
