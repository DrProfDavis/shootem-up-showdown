import React from 'react';
import GridArray from './GridArray'

const gridArray = GridArray;

const HandleClick = (q, r, i) => {

    const findIndexByCoordinates = (q, r) => {
        return gridArray.findIndex(coord => coord[0] === q && coord[1] === r);
    };


    if (i !== -1) {
        const adjacentTiles = [];

        //Top
        if(findIndexByCoordinates(q, r - 1) >= 0){
            adjacentTiles.push(findIndexByCoordinates(q, r - 1));
        }
        //Top Right
        if(findIndexByCoordinates(q + 1, r - 1) >= 0){
            adjacentTiles.push(findIndexByCoordinates(q + 1, r - 1));
        }
        //Bottom Right
        if(findIndexByCoordinates(q + 1, r) >= 0){
            adjacentTiles.push(findIndexByCoordinates(q + 1, r));
        }
         //Bottom
         if(findIndexByCoordinates(q, r + 1) >= 0){
            adjacentTiles.push(findIndexByCoordinates(q, r + 1));
        }
         //Bottom Left
         if(findIndexByCoordinates(q - 1, r + 1) >= 0){
            adjacentTiles.push(findIndexByCoordinates(q - 1, r + 1));
        }
         //Top Left
         if(findIndexByCoordinates(q - 1, r) >= 0){
            adjacentTiles.push(findIndexByCoordinates(q - 1, r));
        }

        //These should never be negative so they'll always be pushed. JUST KIDDING. Need the if statement because if you click the bottom tiles, they get out of map and therefore the i becomes negative apparently.
        // adjacentTiles.push(findIndexByCoordinates(q + 1, r));
        // adjacentTiles.push(findIndexByCoordinates(q, r + 1));
        
        

        console.log("Clicked Tile Index:", i);
        console.log("Adjacent Tile Indexes:", adjacentTiles);
    }

    // Your click event logic goes here
    // alert(i);
    // console.log(i);
}

export {HandleClick};