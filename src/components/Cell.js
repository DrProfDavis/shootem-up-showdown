import { React, useState, useEffect } from 'react';
import { Hexagon, Text } from 'react-hexgrid'
import { Player } from './Player' // Import the Player component
import { HandleClick} from './HandleClick'
import { PlayerSpawn1, PlayerSpawn2 } from './PlayerSpawn'
import GridArray from './GridArray'
import { AdjacentTiles } from './AdjacentTiles';



const randomPlace1 = PlayerSpawn1();
const randomPlace2 = PlayerSpawn2();



const Cell = ({ q, r, i }) => {
    const [clickedPlayer, setClickedPlayer] = useState(null);
    const gridArray = GridArray;


    useEffect(() => {
        if (clickedPlayer !== null) {
            console.log("Clicked Player ", clickedPlayer);

            const adjacentCells = AdjacentTiles(q, r);

            console.log("These are the adjacent Cells ", adjacentCells);

        }
    }, [clickedPlayer]);

    return (
        <Hexagon onClick={() => { HandleClick(q, r, i, setClickedPlayer, randomPlace1, randomPlace2) }} key={i} q={q} r={r}>
            {<Text>{i}</Text>}
            {/* {isPlayerCell ? <Player /> : null} */}
            {randomPlace1.i === i ? <Player playerNumber={1} /> : null}
            {randomPlace2.i === i ? <Player playerNumber={2} /> : null}
        </Hexagon>
    )
}
export default Cell