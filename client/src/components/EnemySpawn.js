const places1 = [
    {i: 14},
    {i: 15},
    {i: 16},
    {i: 31},
    {i: 32},
    {i: 33},
    {i: 49},
];

const places2 = [
    {i: 80},
    {i: 96},
    {i: 97},
    {i: 98},
    {i: 113},
    {i: 114},
    {i: 115},
];


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