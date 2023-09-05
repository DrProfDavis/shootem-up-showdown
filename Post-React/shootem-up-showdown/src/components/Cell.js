import React from 'react';
import { Hexagon, Text } from 'react-hexgrid'
import Player from './Player' // Import the Player component


let handleClick = (i) => {
    // Your click event logic goes here
    alert(i);
    console.log(i)
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

const getRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    return places[randomIndex];
};

const randomPlace = getRandomPlace();


const Cell = ({ q, r, i}) => {

    
    // const isPlayerCell = q === 5 && r === -1; // Change these coordinates as needed

    const isPlayerCell = places.some(place => place.i === i);

    return (
        <Hexagon onClick={()=>handleClick(i)} key={i} q={q} r={r}>
            
            {/* {<Text>
                {i} {q} {r}
            </Text>} */}
            {/* {isPlayerCell ? <Player /> : null} */}
            {randomPlace.i === i ? <Player /> : null}
        </Hexagon>
    )
}
export default Cell