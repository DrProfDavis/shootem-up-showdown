import { React, useState, useEffect } from 'react';
import { AdjacentTiles } from './AdjacentTiles';


const HandleClick = (q, r, i, setClickedPlayer, randomPlace1, randomPlace2,) => {

const HandleClick = (q, r, i, randomPlace1, randomPlace2, isPlayerClicked, setIsPlayerClicked, isTileClicked, setIsTileClicked) => {
    const adjacentTiles = AdjacentTiles(q, r);

    const playerOnClickedTile1 = randomPlace1.i === i ? { playerNumber: 1 } : null;
    const playerOnClickedTile2 = randomPlace2.i === i ? { playerNumber: 2 } : null;
    let clickedTile = null;
    let clickedPlayer = null;

    if (playerOnClickedTile1 || playerOnClickedTile2) {
        // You clicked on a player
        clickedPlayer = playerOnClickedTile1 || playerOnClickedTile2;
        // console.log("Clicked player is ", clickedPlayer);
        setIsPlayerClicked(true);
        return clickedPlayer;
    } else {
        // You did not click on a player
        console.log("The adjacent tiles are ", adjacentTiles)
        console.log("This is the i tile that doesn't have a player:", i);
        clickedTile = i;
        setIsTileClicked(true);
        return clickedTile;
    }

    
}

const MovePlayer = (playerNumber, q, r, i, setClickedPlayer, playerLocations, setPlayerLocations, randomPlace1, randomPlace2) => {
    // Function logic here, using 'playerNumber' to determine which player to move
    switch (playerNumber) {
        case 1:
            console.log('Player 1 Moves!')

            // Remove Player
            setPlayerLocations(prevLocations => ({
                ...prevLocations,
                [`player${playerNumber}`]: null,
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

export { HandleClick, MovePlayer1, MovePlayer2};