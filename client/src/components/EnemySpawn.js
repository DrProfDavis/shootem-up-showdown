const places1 = [];

for (let i = 0; i <= 126; i++) {
    places1.push({ i });
}

const places2 = [];

for (let i = 0; i <= 126; i++) {
    places2.push({ i });
}


const getRandomPlace1 = () => {
    const randomIndex = Math.floor(Math.random() * places1.length);
    return places1[randomIndex];
};

const getRandomPlace2 = () => {
    const randomIndex = Math.floor(Math.random() * places2.length);
    return places2[randomIndex];
};


const EnemySpawn1 = () => {
    const randomPlace = getRandomPlace1();
    return randomPlace;
}

const EnemySpawn2 = () => {
    const randomPlace = getRandomPlace2();
    return randomPlace;
}



export {EnemySpawn1, EnemySpawn2};