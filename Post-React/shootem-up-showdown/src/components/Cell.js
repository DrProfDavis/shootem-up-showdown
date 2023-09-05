import React from 'react';
import { Hexagon, Text } from 'react-hexgrid'

let handleClick = (i) => {
    // Your click event logic goes here
    alert(i);
    console.log(i)
}

const Cell = ({ q, r, i }) => {
    return (
        <Hexagon onClick={()=>handleClick(i)} key={i} q={q} r={r}>
            <Text>
                {i}
            </Text>
        </Hexagon>
    )
}
export default Cell