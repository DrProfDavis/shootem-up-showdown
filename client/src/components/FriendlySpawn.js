const createPlaces = (size) => {
    const places = [];
    for (let i = 0; i <= size; i++) {
        places.push({ i });
    }
    return places;
}
const friendlyIndices = [];

const places1 = createPlaces(126);
const places2 = createPlaces(126);

const getRandomPlaces = (places, numPlaces) => {
    const randomPlaces = [];
    const selectedIndices = new Set();
    
    while (randomPlaces.length < numPlaces) {
        const randomIndex = Math.floor(Math.random() * places.length);
        if (!selectedIndices.has(randomIndex)) {
            selectedIndices.add(randomIndex);
            randomPlaces.push(places[randomIndex]);
            friendlyIndices.push(places[randomIndex].i)
        }
    }

    return randomPlaces;
};

const FriendlySpawn1 = (numPlaces) => getRandomPlaces(places1, numPlaces);
const FriendlySpawn2 = (numPlaces) => getRandomPlaces(places2, numPlaces);

// const friendlyIndices = getRandomPlaces(createPlaces(126), 40);

export { FriendlySpawn1, FriendlySpawn2, friendlyIndices};