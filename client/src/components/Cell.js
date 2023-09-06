import { React, useState, useEffect } from 'react';
import { Hexagon, Text } from 'react-hexgrid'
import { Player } from './Player' // Import the Player component
import { HandleClick} from './HandleClick'
import { PlayerSpawn1, PlayerSpawn2 } from './PlayerSpawn'

import { AdjacentTiles } from './AdjacentTiles';
import { movePlayerToRandomAdjacentTile, movePlayerToAdjacentTile } from './PlayerMovement';



const randomPlace1 = PlayerSpawn1();
const randomPlace2 = PlayerSpawn2();


const Cell = ({ q, r, i }) => {
    const [clickedPlayer, setClickedPlayer] = useState(null);

    const [player1Location, setPlayer1Location] = useState({
        i: randomPlace1.i,
    });
   

    //Force component to re render when we set new location, probably don't even need useeffect. 

    
    useEffect(() => {
        if (clickedPlayer !== null) {
            console.log("Clicked Player ", clickedPlayer);
            
            if (clickedPlayer) {

                const adjacentCells = AdjacentTiles(q, r, i);

                console.log("These are the adjacent Cells ", adjacentCells);
                console.log("This is player 1's location of : ", player1Location.i);

                movePlayerToRandomAdjacentTile(q, r, i, clickedPlayer.playerNumber, newPosition => {
                    console.log(`Player ${clickedPlayer.playerNumber} moved to i: ${newPosition.i} q: ${newPosition.q}, r: ${newPosition.r}`);

                    setPlayer1Location(newPosition.i);
                    console.log(player1Location);

                });
            }
        }
    }, [clickedPlayer]);

    return (
        <Hexagon onClick={() => { HandleClick(q, r, i, setClickedPlayer, randomPlace1, randomPlace2) }} key={i} q={q} r={r}>
            {<Text>{i} {q} {r}</Text>}
            {/* {isPlayerCell ? <Player /> : null} */}
            {/* {randomPlace1.i === i ? <Player playerNumber={1} /> : null} */}
            {player1Location.i === i ? <Player playerNumber={1} /> : null}
            {randomPlace2.i === i ? <Player playerNumber={2} /> : null}
            

        </Hexagon>
    )
}
export default Cell