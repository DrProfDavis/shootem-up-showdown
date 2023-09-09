const places1 = [
    {i: 54},
    {i: 55},
    {i: 56},
    {i: 61},
    {i: 62},
    {i: 63},
    {i: 69},
];

const places2 = [
    {i: 70},
    {i: 76},
    {i: 77},
    {i: 88},
    {i: 83},
    {i: 84},
    {i: 85},
];


const getRandomPlace1 = () => {
    const randomIndex = Math.floor(Math.random() * places1.length);
    return places1[randomIndex];
};

const getRandomPlace2 = () => {
    const randomIndex = Math.floor(Math.random() * places2.length);
    return places2[randomIndex];
};


const FriendlySpawn1 = () => {
    const randomPlace = getRandomPlace1();
    return randomPlace;
}

const FriendlySpawn2 = () => {
    const randomPlace = getRandomPlace2();
    return randomPlace;
}



export {FriendlySpawn1, FriendlySpawn2};