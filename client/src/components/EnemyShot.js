const EnemyShot = (i, enemyLocations, setEnemyLocation, setTimer, setScore) => {

  


    if (enemyLocations.enemy1 === i) {
      console.log("ENEMY 1 HAS BEEN HIT");
      setEnemyLocation({
        ...enemyLocations,
        enemy1: null, //Change back to null to make cowboy disappear. It seems that the scores are being treated as separate scores though.
      });
      setTimer((prevTimer) => prevTimer + 5);
      setScore((prevScore) => prevScore + 1);

    }

    if (enemyLocations.enemy2 === i) {
      console.log("ENEMY 2 HAS BEEN HIT");
      setEnemyLocation({
        ...enemyLocations,
        enemy2: null,
      });
      setTimer((prevTimer) => prevTimer + 5);
      setScore((prevScore) => prevScore + 1);

    }


  };

export { EnemyShot };