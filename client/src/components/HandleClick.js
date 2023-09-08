import { React, useState, useEffect } from 'react';
import { AdjacentTiles } from './AdjacentTiles';



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

const MovePlayer1 = (q, r, i, player1Location, setPlayer1Location, randomPlace1, randomPlace2, isPlayerClicked, setIsPlayerClicked, playerAdjacentTiles, setPlayerAdjacentTiles, isTileClicked, setIsTileClicked) => {

    let clickedPlayer = HandleClick(q, r, i, randomPlace1, randomPlace2, isPlayerClicked, setIsPlayerClicked, isTileClicked, setIsTileClicked)
    let clickedTiles = HandleClick(q, r, i, randomPlace1, randomPlace2, isPlayerClicked, setIsPlayerClicked, isTileClicked, setIsTileClicked)
    let adjacentCells = AdjacentTiles(q, r);


    // if (clickedPlayer?.playerNumber === 1) {
    //     if (!isPlayerClicked) {
    //         // First click
    //         console.log("CLICKED PLAYER IS ", clickedPlayer);
    //         setIsPlayerClicked(true);
    //         console.log("ADJACENT TILES ARE ", adjacentCells);
    //         console.log("PLAYER ADJACENT TILES ARE ", playerAdjacentTiles);
    //     } else {
    //         // Second click
    //         console.log("PLAYER IS CURRENTLY TRUE");
    //         if (isPlayerClicked === true && playerAdjacentTiles.includes(i)) {
    //             console.log("THIS RAN CORRECTLY");
    //             setPlayer1Location(prevState => ({ ...prevState, i: i }));
    //         } else {
    //             console.log("Not moving player 1 to cell index: ", i);
    //         }
    //         // console.log("PLAYER ADJACENT TILES ARE ", playerAdjacentTiles);
    //         setIsPlayerClicked(false);  // Reset for the next move
    //     }
    // }

    if (isPlayerClicked === false && clickedPlayer?.playerNumber === 1) {

        // First click
        console.log("CLICKED PLAYER IS ", clickedPlayer);
        console.log("ADJACENT TILES ARE ", adjacentCells);
        console.log("PLAYER ADJACENT TILES ARE ", playerAdjacentTiles);
    }

    if (clickedTiles != null)
    {
        console.log("LOOK AT ME");
        setIsTileClicked(true);
        console.log("The tile clicked i value is: ", clickedTiles);
    }

};

const MovePlayer2 = (q, r, i, player2Location, setPlayer2Location, randomPlace1, randomPlace2) => {
    const clickedPlayer = HandleClick(q, r, i, randomPlace1, randomPlace2);

    if (clickedPlayer?.playerNumber === 2) {
        const adjacentCells = AdjacentTiles(q, r);
        if (adjacentCells.includes(player2Location.i)) {
            setPlayer2Location(prevState => ({ ...prevState, i: i }));
        }
        else {
            console.log("Not moving player 2 to cell index: ", i);
        }
    }
};

export { HandleClick, MovePlayer1, MovePlayer2 };