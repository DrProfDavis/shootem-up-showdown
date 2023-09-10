
const FriendlyShot = (i, friendlyLocations, setFriendlyLocation, setTimer) => {

    if (friendlyLocations.friendly1 === i) {
        console.log("FRIENDLY 1 HAS BEEN HIT");
        setFriendlyLocation({
            ...friendlyLocations,
            friendly1: null, 
        });
        setTimer(0);
    }
    if (friendlyLocations.friendly2 === i) {
        console.log("FRIENDLY 2 HAS BEEN HIT");
        setFriendlyLocation({
            ...friendlyLocations,
            friendly2: null, 
        });
        setTimer(0);
    }
};

export { FriendlyShot };