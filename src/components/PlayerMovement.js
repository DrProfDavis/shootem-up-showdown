
import { AdjacentTiles } from './AdjacentTiles';
import GridArray from './GridArray';

const gridArray = GridArray;

// Function to move the player to a random adjacent tile
const movePlayerToRandomAdjacentTile = (q, r, i, playerNumber, setPlayerPosition) => {
    const adjacentTiles = AdjacentTiles(q, r, i);

    if (adjacentTiles.length > 0) {
        // Randomly select an adjacent tile
        const randomIndex = Math.floor(Math.random() * adjacentTiles.length);
        const randomAdjacentTileIndex = adjacentTiles[randomIndex];

        // Calculate the new coordinates from the selected adjacent tile's index
        const [newQ, newR] = gridArray[randomAdjacentTileIndex];

        // Update the player's position using the setPlayerPosition function
        setPlayerPosition({ q: newQ, r: newR, i: randomAdjacentTileIndex, playerNumber });
    }
};

const movePlayerToAdjacentTile = (q, r, i, playerNumber, setPlayerPosition, targetTileIndex) => {
    const adjacentTiles = AdjacentTiles(q, r, i);

    if (adjacentTiles.includes(targetTileIndex)) {
        // Calculate the new coordinates from the selected adjacent tile's index
        const [newQ, newR] = gridArray[targetTileIndex];

        // Update the player's position using the setPlayerPosition function
        setPlayerPosition({ q: newQ, r: newR, i: targetTileIndex, playerNumber });
    }
};

export { movePlayerToRandomAdjacentTile, movePlayerToAdjacentTile};