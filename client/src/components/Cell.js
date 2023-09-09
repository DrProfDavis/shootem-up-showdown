import { React, useState, useEffect } from 'react';
import { Hexagon, Text } from 'react-hexgrid'
import { Player } from './Player' // Import the Player component
import { HandleClick } from './HandleClick'
import { MovePlayer } from './PlayerHandleClick'
import { PlayerSpawn1, PlayerSpawn2 } from './PlayerSpawn'
import { AdjacentTiles } from './AdjacentTiles';
// import { movePlayerToRandomAdjacentTile, movePlayerToAdjacentTile } from './PlayerMovement';



const randomPlace1 = PlayerSpawn1();
const randomPlace2 = PlayerSpawn2();




const Cell = ({ q, r, i }) => {
    const [clickedPlayer, setClickedPlayer] = useState(0);

    const [playerLocations, setPlayerLocations] = useState({
        player1: randomPlace1.i,
        player2: randomPlace2.i,
    });

    return (
        <Hexagon onClick={() => {
            HandleClick(q, r, i, setClickedPlayer, randomPlace1, randomPlace2, playerLocations,);

            // console.log(playerLocations);
            
            MovePlayer(1, q, r, i, setClickedPlayer, playerLocations, setPlayerLocations, randomPlace1, randomPlace2);
            

            // MovePlayer(2, q, r, i, setClickedPlayer, playerLocations, setPlayerLocations, randomPlace1, randomPlace2);

        }} key={`${i}-${q}-${r}`} q={q} r={r}>
            {<Text>{i} {q} {r}</Text>}
            {playerLocations.player1 === i ? <Player playerNumber={1} /> : null}
            {playerLocations.player2 === i ? <Player playerNumber={2} /> : null}


        </Hexagon>
    )
}

export default Cell