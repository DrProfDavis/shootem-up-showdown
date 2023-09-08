/*eslint-disable */
import { AdjacentTiles } from './AdjacentTiles';

const MovePlayer = (playerNumber, q, r, i, setClickedPlayer, playerLocations, setPlayerLocations, randomPlace1, randomPlace2) => {
    // Function logic here, using 'playerNumber' to determine which player to move
    switch (playerNumber) {
        case 1:
            console.log('Player 1 Moves!')

            // Remove Player
            setPlayerLocations(prevLocations => ({
                ...prevLocations,
                [`player${playerNumber}`]: i,
            }));

            setTimeout(() => {
            const adjacentCells = AdjacentTiles(q, r);
            if (adjacentCells.includes(playerLocations.player1)) {

                // Add player to new location
                setPlayerLocations(prevLocations => ({
                    ...prevLocations,
                    [`player${playerNumber}`]: i,
                }));

                console.log("Added a player to cell index: ", i);
            }
            else {
                console.log("Not adding a player to cell index: ", i);
            }
        }, 0);
            break;
    }
};

export {  MovePlayer };