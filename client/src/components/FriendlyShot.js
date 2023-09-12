
// const FriendlyShot = (i, friendlyLocations, setFriendlyLocation, setTimer, isReloading, bullets) => {

//     if (!isReloading && bullets > 0) {
//         if (friendlyLocations.friendly1 === i) {
//             console.log("FRIENDLY 1 HAS BEEN HIT");
//             setFriendlyLocation({
//                 ...friendlyLocations,
//                 friendly1: null,
//             });
//             setTimer((prevTime) => prevTime + 10);
//         }
//         if (friendlyLocations.friendly2 === i) {
//             console.log("FRIENDLY 2 HAS BEEN HIT");
//             setFriendlyLocation({
//                 ...friendlyLocations,
//                 friendly2: null,
//             });
//             setTimer((prevTime) => prevTime + 10);
//         }

//         if (friendlyLocations.friendly3 === i) {
//           console.log("FRIENDLY 3 HAS BEEN HIT");
//           setFriendlyLocation({
//               ...friendlyLocations,
//               friendly3: null,
//           });
//           setTimer((prevTime) => prevTime + 10);
//       }

//       if (friendlyLocations.Friend4 === i) {
//         console.log("FRIENDLY 4 HAS BEEN HIT");
//         setFriendlyLocation({
//             ...friendlyLocations,
//             Friend4: null,
//         });
//         setTimer((prevTime) => prevTime + 10);
//     }

//     if (friendlyLocations.Friend5 === i) {
//       console.log("FRIENDLY 5 HAS BEEN HIT");
//       setFriendlyLocation({
//           ...friendlyLocations,
//           Friend5: null,
//       });
//       setTimer((prevTime) => prevTime + 10);
//   }
//   if (friendlyLocations.Friend6 === i) {
//     console.log("FRIENDLY 6 HAS BEEN HIT");
//     setFriendlyLocation({
//         ...friendlyLocations,
//         Friend6: null,
//     });
//     setTimer((prevTime) => prevTime + 10);
// }
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
        setTimer((prevTime) => prevTime + 10);
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