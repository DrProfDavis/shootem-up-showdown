
const FriendlyShot = (i, friendlyLocations, setFriendlyLocation, setTimer, isReloading, bullets, playCowgirlHit) => {
  if (!isReloading && bullets > 0) {
    for (let j = 1; j <= 50; j++) {
      const friendlyKey = `friendly${j}`;
      if (friendlyLocations[friendlyKey] === i) {
        console.log(`FRIENDLY ${j} HAS BEEN HIT`);
        playCowgirlHit();
        setFriendlyLocation({
          ...friendlyLocations,
          [friendlyKey]: null,
        });
        setTimer((prevTime) => prevTime + 10);
      }
    }
  }
};

export { FriendlyShot };

