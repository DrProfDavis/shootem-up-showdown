import React from 'react';
import { Hexagon, Text } from 'react-hexgrid'
import Player from './Player' // Import the Player component


let handleClick = (i) => {
    // Your click event logic goes here
    alert(i);
    console.log(i)
}

const Cell = ({ q, r, i }) => {

    const isPlayerCell = q === 5 && r === -1; // Change these coordinates as needed

    return (
        <Hexagon onClick={()=>handleClick(i)} key={i} q={q} r={r}>
            {<Text>
                {i} {q} {r}
            </Text>}
            {isPlayerCell ? <Player /> : null}
        </Hexagon>
    )
}
export default Cell