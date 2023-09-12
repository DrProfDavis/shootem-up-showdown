const friendlyIndices = [];

const createPlaces = (size) => {
    const places = [];
    for (let i = 0; i <= size; i++) {
        places.push({ i });
    }
    return places;
}

const places = createPlaces(126);

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

const FriendlySpawn = (numPlaces) => getRandomPlaces(places, numPlaces);


export { FriendlySpawn, friendlyIndices };