
const places = [
    {i: 0},
    {i: 1},
    {i: 2},
    {i: 17},
    {i: 18},
    {i: 19},
    {i: 35},
];


const getRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    return places[randomIndex];
};


const PlayerSpawn = () => {
    const randomPlace = getRandomPlace();
    return randomPlace;
}




export {PlayerSpawn};