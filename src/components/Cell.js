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
   
    const [playerLocation, setPlayerLocation] = useState(() => {
        if (randomPlace1.i === i) {
            return 1; // Player 1 is in this location
        } else if (randomPlace2.i === i) {
            return 2; // Player 2 is in this location
        } else {
            return null; // No player is in this location initially
        }
    });



    useEffect(() => {
        if (clickedPlayer !== null) {
            console.log("Clicked Player ", clickedPlayer);
            
            if (clickedPlayer) {

                const adjacentCells = AdjacentTiles(q, r, i);

                console.log("These are the adjacent Cells ", adjacentCells);

                movePlayerToRandomAdjacentTile(q, r, i, clickedPlayer.playerNumber, newPosition => {
                    console.log(`Player ${clickedPlayer.playerNumber} moved to i: ${newPosition.i} q: ${newPosition.q}, r: ${newPosition.r}`);

                    setPlayerLocation(clickedPlayer.playerNumber);
                });
            }
        }
    }, [clickedPlayer]);

    return (
        <Hexagon onClick={() => { HandleClick(q, r, i, setClickedPlayer, randomPlace1, randomPlace2) }} key={i} q={q} r={r}>
            {<Text>{i} {q} {r}</Text>}
            {/* {isPlayerCell ? <Player /> : null} */}
            {/* {randomPlace1.i === i ? <Player playerNumber={1} /> : null}
            {randomPlace2.i === i ? <Player playerNumber={2} /> : null} */}
            {playerLocation === 1 ? <Player playerNumber={1} /> : null}
            {playerLocation === 2 ? <Player playerNumber={2} /> : null}

        </Hexagon>
    )
}
export default Cell