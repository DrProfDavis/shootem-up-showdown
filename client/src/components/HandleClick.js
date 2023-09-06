import { React, useState, useEffect } from 'react';
import { AdjacentTiles } from './AdjacentTiles';


const HandleClick = (q, r, i, setClickedPlayer, randomPlace1, randomPlace2) => {


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


export { HandleClick};