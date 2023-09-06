import React from 'react';
import GridArray from './GridArray'

const gridArray = GridArray;

// const HandleClick = (q, r, i, setClickedPlayer, randomPlace1, randomPlace2) => {
    const HandleClick = (q, r, i, setClickedPlayer, randomPlace1, randomPlace2) => {

    const findIndexByCoordinates = (q, r) => {
        return gridArray.findIndex(coord => coord[0] === q && coord[1] === r);
    };


    if (i !== -1) {
        const adjacentTiles = [];

        //Top
        if (findIndexByCoordinates(q, r - 1) >= 0) {
            adjacentTiles.push(findIndexByCoordinates(q, r - 1));
        }
        //Top Right
        if (findIndexByCoordinates(q + 1, r - 1) >= 0) {
            adjacentTiles.push(findIndexByCoordinates(q + 1, r - 1));
        }
        //Bottom Right
        if (findIndexByCoordinates(q + 1, r) >= 0) {
            adjacentTiles.push(findIndexByCoordinates(q + 1, r));
        }
        //Bottom
        if (findIndexByCoordinates(q, r + 1) >= 0) {
            adjacentTiles.push(findIndexByCoordinates(q, r + 1));
        }
        //Bottom Left
        if (findIndexByCoordinates(q - 1, r + 1) >= 0) {
            adjacentTiles.push(findIndexByCoordinates(q - 1, r + 1));
        }
        //Top Left
        if (findIndexByCoordinates(q - 1, r) >= 0) {
            adjacentTiles.push(findIndexByCoordinates(q - 1, r));
        }


        // console.log("Clicked Tile Index:", i);
        // console.log("Adjacent Tile Indexes:", adjacentTiles);

        const playerOnClickedTile1 = randomPlace1.i === i ? { playerNumber: 1 } : null;
        const playerOnClickedTile2 = randomPlace2.i === i ? { playerNumber: 2 } : null;

        if (playerOnClickedTile1 || playerOnClickedTile2) {
            // You clicked on a player
            const clickedPlayer = playerOnClickedTile1 || playerOnClickedTile2;
            console.log("Clicked on Player:", clickedPlayer.playerNumber);
            setClickedPlayer(clickedPlayer);
            console.log("Your options to move are to the following spaces: ", adjacentTiles);

            

        } else {
            // You did not click on a player
            console.log("This is the i tile that doesn't have a player:", i);
            setClickedPlayer(null);
        }


    }

}

export { HandleClick };