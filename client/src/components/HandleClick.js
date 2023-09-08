/*eslint-disable */
import { React, useState, useEffect } from 'react';
import { AdjacentTiles } from './AdjacentTiles';


const HandleClick = (q, r, i, setClickedPlayer, randomPlace1, randomPlace2,) => {


    const adjacentTiles = AdjacentTiles(q, r);

    const playerOnClickedTile1 = randomPlace1.i === i ? { playerNumber: 1 } : "lsdfj";
    const playerOnClickedTile2 = randomPlace2.i === i ? { playerNumber: 2 } : "her";

    if (playerOnClickedTile1 || playerOnClickedTile2) {
        // You clicked on a player
        const clickedPlayer = playerOnClickedTile1 || playerOnClickedTile2;
        setClickedPlayer(clickedPlayer);
        // console.log("Clicked player is ", clickedPlayer);

    } else {
        // You did not click on a player
        console.log("This is the "+i+" tile that doesn't have a player:", i);
        console.log("The adjacent tiles are ", adjacentTiles)
        setClickedPlayer(null);
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

export { HandleClick, MovePlayer };