import React from 'react';
import { Hexagon, Text } from 'react-hexgrid'
import Player from './Player' // Import the Player component
import { gridArray } from './Grid';


let handleClick = (q, r, i) => {

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


const places = [
    {i: 0},
    {i: 1},
    {i: 2},
    {i: 17},
    {i: 18},
    {i: 19},
    {i: 35},
];

const places2 = [
    {i: 80},
    {i: 63},
    {i: 81},
    {i: 98},
    {i: 97},
    {i: 96},
    {i: 79},
];

const getRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    console.log(`Player 1 Spawned on: ${places[randomIndex].i}`);
    return places[randomIndex];
    
};

// Dirty Player 2 For Now
const getRandomPlace2 = () => {
    const randomIndex = Math.floor(Math.random() * places2.length);
    console.log(`Player 1 Spawned on: ${places[randomIndex].i}`);
    return places2[randomIndex];
    
};



const randomPlace = getRandomPlace();
// Dirty Player 2 For Now
const randomPlace2 = getRandomPlace2();


const Cell = ({ q, r, i}) => {

    
    // const isPlayerCell = q === 5 && r === -1; // Change these coordinates as needed

    const isPlayerCell = places.some(place => place.i === i);

    return (
        <Hexagon onClick={()=>handleClick(q, r, i)} key={i} q={q} r={r}>
            
            
            {/* {<Text>
                {i} {q} {r}
            </Text>} */}
            {/* {isPlayerCell ? <Player /> : null} */}
            {randomPlace.i === i ? <Player playerNumber={1}/> : null}
            {randomPlace2.i === i ? <Player playerNumber={2}/> : null}
        </Hexagon>
    )
}
export default Cell