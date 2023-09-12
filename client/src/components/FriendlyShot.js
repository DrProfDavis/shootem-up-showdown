
// const FriendlyShot = (i, friendlyLocations, setFriendlyLocation, setTimer, isReloading, bullets) => {

//     if (!isReloading && bullets > 0) {
//         if (friendlyLocations.friendly1 === i) {
//             console.log("FRIENDLY 1 HAS BEEN HIT");
//             setFriendlyLocation({
//                 ...friendlyLocations,
//                 friendly1: null,
//             });
//             setTimer(0);
//         }
//         if (friendlyLocations.friendly2 === i) {
//             console.log("FRIENDLY 2 HAS BEEN HIT");
//             setFriendlyLocation({
//                 ...friendlyLocations,
//                 friendly2: null,
//             });
//             setTimer(0);
//         }
//     }
// };

const FriendlyShot = (i, friendlyLocations, setFriendlyLocation, setTimer, setScore, isReloading, bullets) => {
    if (!isReloading && bullets > 0) {
      const handleFriendlyHit = (friendlyNumber) => {
        console.log(`FRIEND ${friendlyNumber} HAS BEEN HIT`);
        setFriendlyLocation({
          ...friendlyLocations,
          [`Friend${friendlyNumber}`]: null,
        });
        setTimer(0);
      };
  
      Object.keys(friendlyLocations).forEach((friend) => {
        const friendlyNumber = friend.replace('friend', '');
        if (friendlyLocations[friend] === i) {
            handleFriendlyHit(friendlyNumber);
        }
      });
    }
  };

export { FriendlyShot };