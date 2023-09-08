/*eslint-disable */
import { AdjacentTiles, AdjacentTilesForPlayer} from './AdjacentTiles';

const MovePlayer = (playerNumber, q, r, i, setClickedPlayer, playerLocations, setPlayerLocations, randomPlace1, randomPlace2) => {
    // Function logic here, using 'playerNumber' to determine which player to move
    switch (playerNumber) {
        case 1:
            console.log('Player 1 Moves!')

            // setPlayerLocations(prevLocations => ({
            //     ...prevLocations,
            //     [`player${playerNumber}`]: i,
            // }));

            setTimeout(() => {
            const adjacentCells = AdjacentTiles(q, r);
        
            let currentPlayerLocation = playerLocations.player1;

            const adjacentCellsForPlayer = AdjacentTilesForPlayer(currentPlayerLocation);

            //we need to look at player current location, set the adjacent cells for the player current location, and then look at the location we clicked, and see if the place we clicked matches the list of adjacent player for the player current location


            if (adjacentCellsForPlayer.includes(i)) {

                // Add player to new location
                setPlayerLocations(prevLocations => ({
                    ...prevLocations,
                    [`player${playerNumber}`]: i,
                }));

                console.log("Added a player to cell index: ", i);
            }
            else {
                console.log("Not adding a player to cell index: ", i);
                console.log("THIS IS ADJACENT CELLS: ", adjacentCells);
                console.log("THIS IS PLAYERLOCATIONS.PLAYER1: ", currentPlayerLocation);
                console.log("THIS IS PLAYERS ADJACENT TILES: ", adjacentCellsForPlayer);

            }
        }, 0);
            break;
    }
};

export { MovePlayer };