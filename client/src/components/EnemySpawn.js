import { friendlyIndices } from './FriendlySpawn.js';

const createPlaces = (size) => {
    const places = [];
    for (let i = 0; i <= size; i++) {
        places.push({ i });
    }
    return places;
}

const places1 = createPlaces(126);
const places2 = createPlaces(126);

const getRandomPlaces = (places, numPlaces) => {
    const randomPlaces = [];
    const selectedIndices = new Set();
    while (randomPlaces.length < numPlaces) {
        const randomIndex = Math.floor(Math.random() * places.length);
        if (!selectedIndices.has(randomIndex) && !friendlyIndices.includes(randomIndex)) {
            selectedIndices.add(randomIndex);
            randomPlaces.push(places[randomIndex]);
        }
    }

    return randomPlaces;
};

const EnemySpawn1 = (numPlaces) => getRandomPlaces(places1, numPlaces);
const EnemySpawn2 = (numPlaces) => getRandomPlaces(places2, numPlaces);




export {EnemySpawn1, EnemySpawn2};