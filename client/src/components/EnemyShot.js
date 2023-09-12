const EnemyShot = (i, enemyLocations, setEnemyLocation, setTimer, setScore, isReloading, bullets) => {
  if (!isReloading && bullets > 0) {
    const handleEnemyHit = (enemyNumber) => {
      console.log(`ENEMY ${enemyNumber} HAS BEEN HIT`);
      setEnemyLocation({
        ...enemyLocations,
        [`enemy${enemyNumber}`]: null,
      });
      // setTimer((prevTimer) => prevTimer + 5);
      setScore((prevScore) => prevScore + 1);
    };

    Object.keys(enemyLocations).forEach((enemy) => {
      const enemyNumber = enemy.replace('enemy', '');
      if (enemyLocations[enemy] === i) {
        handleEnemyHit(enemyNumber);
      }
    });
  }
};

export { EnemyShot };