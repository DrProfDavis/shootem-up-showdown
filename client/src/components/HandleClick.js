import { React, useState, useEffect } from 'react';
import { AdjacentTiles } from './AdjacentTiles';


const HandleClick = (q, r, i, setClickedPlayer, randomPlace1, randomPlace2, ) => {


    const adjacentTiles = AdjacentTiles(q, r);

    const playerOnClickedTile1 = randomPlace1.i === i ? { playerNumber: 1 } : null;
    const playerOnClickedTile2 = randomPlace2.i === i ? { playerNumber: 2 } : null;

    if (playerOnClickedTile1 || playerOnClickedTile2) {
        // You clicked on a player
        const clickedPlayer = playerOnClickedTile1 || playerOnClickedTile2;
        setClickedPlayer(clickedPlayer);
        // console.log("Clicked player is ", clickedPlayer);

    } else {
        // You did not click on a player
        console.log("This is the i tile that doesn't have a player:", i);
        console.log("The adjacent tiles are ", adjacentTiles)
        setClickedPlayer(null);
    }

}

const MovePlayer1 = (q, r, i, setClickedPlayer, player1Location, setPlayer1Location, randomPlace1, randomPlace2) => {
    HandleClick(q, r, i, setClickedPlayer, randomPlace1, randomPlace2);

    // Update player1Location.i to the new hexagon's i
    const adjacentCells = AdjacentTiles(q, r);
    if (adjacentCells.includes(player1Location.i)) {
    setPlayer1Location({ i });
    }
    else{
        console.log("Not adding a player to cell index: ", i);
    }
};

const MovePlayer2 = (q, r, i, setClickedPlayer, player2Location, setPlayer2Location, randomPlace1, randomPlace2) => {
    HandleClick(q, r, i, setClickedPlayer, randomPlace1, randomPlace2);

    // Update player1Location.i to the new hexagon's i
    const adjacentCells = AdjacentTiles(q, r);

    if (adjacentCells.includes(player2Location.i)) {
    setPlayer2Location({ i });
    }
    else{
        console.log("Not adding a player to cell index: ", i);
    }
};

export { HandleClick, MovePlayer1, MovePlayer2};