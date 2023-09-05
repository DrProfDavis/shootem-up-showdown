import React from 'react';
import { Hexagon, Text } from 'react-hexgrid'
import {Player} from './Player' // Import the Player component
import { HandleClick } from './HandleClick'
import {PlayerSpawn1, PlayerSpawn2} from './PlayerSpawn'



const randomPlace1 = PlayerSpawn1();
const randomPlace2 = PlayerSpawn2();
const handleClick = HandleClick;


const Cell = ({ q, r, i}) => {



    return (
        <Hexagon onClick={()=>handleClick(q, r, i)} key={i} q={q} r={r}>
            
            
            {<Text>
                {i} {q} {r}
            </Text>}
            {/* {isPlayerCell ? <Player /> : null} */}
            {randomPlace1.i === i ? <Player playerNumber={1}/> : null}
            {randomPlace2.i === i ? <Player playerNumber={2}/> : null}
        </Hexagon>
    )
}
export default Cell