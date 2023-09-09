
const EnemyShot = (i, enemyLocations, setEnemyLocation) => {

    if (enemyLocations.enemy1 === i) {
        console.log("ENEMY 1 HAS BEEN HIT");
        setEnemyLocation({
            ...enemyLocations,
            enemy1: null, 
        });
    }
    if (enemyLocations.enemy2 === i) {
        console.log("ENEMY 2 HAS BEEN HIT");
        setEnemyLocation({
            ...enemyLocations,
            enemy2: null, 
        });
    }
};

export { EnemyShot };