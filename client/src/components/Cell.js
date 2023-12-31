import { React } from 'react';
import { Hexagon } from 'react-hexgrid'
import { Enemy } from './Enemy'
import { Friendly } from './Friendly'
import { EnemyShot } from './EnemyShot';
import { FriendlyShot } from './FriendlyShot';
import { HandleClick } from "./HandleClick";
import gunshotSound from '../audio/gunshot.mp3'
import crosshair from '../images/crosshair.jpg'



const Cell = ({ q, r, i, setScore, score, setEnemyLocation, enemyLocations, setFriendlyLocation, friendlyLocations, timer, setTimer, bullets, setBulletCount, setIsReloading, isReloading, setIsMuted, isMuted, setClickedTileIndex, clickedTileIndex, enemies, friendlies, gameStarted, setGameStarted }) => {


  const cowgirlHitSounds = [
    require('../audio/Female1.mp3'),
    // require('../audio/Female2.mp3'),
    require('../audio/Female3.mp3'),
    require('../audio/Female4.mp3'),
    require('../audio/Female5.mp3'),
    require('../audio/Female6.mp3'),
    require('../audio/Female7.mp3'),
    require('../audio/Female8.mp3'),
    require('../audio/Female9.mp3'),
    require('../audio/Female10.mp3'),
    require('../audio/Female11.mp3'),
    require('../audio/Female12.mp3'),
    require('../audio/Female13.mp3'),
    require('../audio/Female14.mp3'),
    require('../audio/Female15.mp3'),
    require('../audio/Female16.mp3'),
    require('../audio/Female17.mp3'),
    require('../audio/Female18.mp3')
  ];

  const enemyHitSounds = [
    require('../audio/Male1.mp3'),
    require('../audio/Male2.mp3'),
    require('../audio/Male3.mp3'),
    require('../audio/Male4.mp3'),
    // require('../audio/Male5.mp3'),
    require('../audio/Male6.mp3'),
    require('../audio/Male7.mp3'),
    require('../audio/Male8.mp3'),
    require('../audio/Male9.mp3'),
    require('../audio/Male10.mp3'),
    require('../audio/Male11.mp3'),
    require('../audio/Male12.mp3'),
    require('../audio/Male13.mp3'),
    require('../audio/Male14.mp3'),
    require('../audio/Male15.mp3'),
    require('../audio/Male16.mp3'),
    require('../audio/Male17.mp3'),
    require('../audio/Male18.mp3'),
    require('../audio/Male19.mp3'),
    require('../audio/Male20.mp3'),
    require('../audio/Male21.mp3'),
    require('../audio/Male22.mp3'),
    require('../audio/Male23.mp3'),
    require('../audio/Male24.mp3'),
    require('../audio/Male25.mp3'),
    require('../audio/Male26.mp3'),
    require('../audio/Male27.mp3'),
    require('../audio/Male28.mp3'),
    require('../audio/Male29.mp3'),
    require('../audio/Male30.mp3'),
    require('../audio/Ow1.mp3'),
    require('../audio/Ouchy.mp3'),
    require('../audio/ThatsAboutIt.mp3'),
    require('../audio/DeathSound.mp3')
  ];


  const playGunshotSound = () => {
    if (!isMuted) {
      const gunSound = new Audio(gunshotSound);
      gunSound.volume = .05;
      gunSound.play();
    }
  }


  const playCowgirlHit = () => {
    if (!isMuted) {
      const randomIndex = Math.floor(Math.random() * cowgirlHitSounds.length);
      const cowgirlHit = new Audio(cowgirlHitSounds[randomIndex]);
      cowgirlHit.volume = .5;
      cowgirlHit.play();
    }
  };


  const playEnemyHit = () => {
    if (!isMuted) {
      const randomIndex = Math.floor(Math.random() * enemyHitSounds.length);
      const enemyHit = new Audio(enemyHitSounds[randomIndex]);
      enemyHit.volume = .5;
      enemyHit.play();
    }
  };

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
      {Object.keys(enemyLocations).map((enemy) => enemyLocations[enemy] === i ? <Enemy key={enemy} /> : null)}

      {/* Friendly spawn logic */}
      {Object.keys(friendlyLocations).map((friend) => friendlyLocations[friend] === i ? <Friendly key={friend} /> : null)}

      {i === clickedTileIndex ? <img src={crosshair} alt="Crosshair" className="crosshair" /> : null}
    </Hexagon>
  )
}

export default Cell  