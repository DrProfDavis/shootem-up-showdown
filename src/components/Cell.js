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


    useEffect(() => {
        if (clickedPlayer !== null) {
            console.log("Clicked Player ", clickedPlayer);
            

            // Check if it's the player's turn (you may need to manage player turns)
            if (clickedPlayer.playerNumber === 1) {
                // Calculate adjacent cells
                const adjacentCells = AdjacentTiles(q, r, i);

                console.log("These are the adjacent Cells ", adjacentCells);

                // Move the player to a random adjacent tile
                movePlayerToRandomAdjacentTile(q, r, i, clickedPlayer.playerNumber, (newPosition) => {
                    // Update the player's position in your state or game data
                    // You need to implement a state management mechanism here
                    console.log(`Player ${clickedPlayer.playerNumber} moved to ${newPosition.q},${newPosition.r}`);
                });
            }
        }
    }, [clickedPlayer, q, r, i]);

    return (
        <Hexagon onClick={() => { HandleClick(q, r, i, setClickedPlayer, randomPlace1, randomPlace2) }} key={i} q={q} r={r}>
            {<Text>{i} {q} {r}</Text>}
            {/* {isPlayerCell ? <Player /> : null} */}
            {randomPlace1.i === i ? <Player playerNumber={1} /> : null}
            {randomPlace2.i === i ? <Player playerNumber={2} /> : null}

        </Hexagon>
    )
}
export default Cell