
const FriendlyShot = (i, friendlyLocations, setFriendlyLocation, score, setScore) => {

    if (friendlyLocations.friendly1 === i) {
        console.log("FRIENDLY 1 HAS BEEN HIT");
        setFriendlyLocation({
            ...friendlyLocations,
            friendly1: null, 
        });
        setScore((prevScore) => prevScore - 1);
    }
    if (friendlyLocations.friendly2 === i) {
        console.log("FRIENDLY 2 HAS BEEN HIT");
        setFriendlyLocation({
            ...friendlyLocations,
            friendly2: null, 
        });
        setScore((prevScore) => prevScore - 1);
    }
};

export { FriendlyShot };