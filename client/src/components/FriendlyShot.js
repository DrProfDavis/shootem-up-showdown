
const FriendlyShot = (i, friendlyLocations, setFriendlyLocation) => {

    if (friendlyLocations.friendly1 === i) {
        console.log("FRIENDLY 1 HAS BEEN HIT");
        setFriendlyLocation({
            ...friendlyLocations,
            friendly1: null, 
        });
    }
    if (friendlyLocations.friendly2 === i) {
        console.log("FRIENDLY 2 HAS BEEN HIT");
        setFriendlyLocation({
            ...friendlyLocations,
            friendly2: null, 
        });
    }
};

export { FriendlyShot };