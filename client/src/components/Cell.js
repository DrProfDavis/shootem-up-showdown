import { React, useState, useEffect } from 'react';
import { Hexagon, Text } from 'react-hexgrid'
import { Player } from './Player' // Import the Player component
import { HandleClick, MovePlayer1, MovePlayer2 } from './HandleClick'
import { PlayerSpawn1, PlayerSpawn2 } from './PlayerSpawn'
import { AdjacentTiles } from './AdjacentTiles';
import { movePlayerToRandomAdjacentTile, movePlayerToAdjacentTile } from './PlayerMovement';



const randomPlace1 = PlayerSpawn1();
const randomPlace2 = PlayerSpawn2();



const Cell = ({ q, r, i }) => {

    const adjacentTiles = AdjacentTiles(q, r);


    const [clickedPlayer, setClickedPlayer] = useState(null);

    const [player1Location, setPlayer1Location] = useState({
        i: randomPlace1.i,
    });

    const [player2Location, setPlayer2Location] = useState({
        i: randomPlace2.i,
    });

    const [isPlayerClicked, setIsPlayerClicked] = useState(false);
    const [isTileClicked, setIsTileClicked] = useState(false);


    const [playerAdjacentTiles, setPlayerAdjacentTiles] = useState([]);

    useEffect(() => {
        console.log("PLAYER IS CLICKED? ", isPlayerClicked);
        setPlayerAdjacentTiles(adjacentTiles);
    }, [isPlayerClicked, isTileClicked] );


    const handleHexagonClick = () => {
        const clickedPlayer = HandleClick(q, r, i, randomPlace1, randomPlace2, isPlayerClicked, setIsPlayerClicked, isTileClicked, setIsTileClicked) ;
    
        if (clickedPlayer?.playerNumber === 1) {
            MovePlayer1(q, r, i, player1Location, setPlayer1Location, randomPlace1, randomPlace2, isPlayerClicked, setIsPlayerClicked, playerAdjacentTiles, setPlayerAdjacentTiles, isTileClicked, setIsTileClicked);
        } else if (clickedPlayer?.playerNumber === 2) {
            MovePlayer2(q, r, i, player2Location, setPlayer2Location, randomPlace1, randomPlace2);
        }
    };


    return (
        <Hexagon onClick={() => {handleHexagonClick()}} key={i} q={q} r={r}>
            {<Text>{i} {q} {r}</Text>}
            {/* {isPlayerCell ? <Player /> : null} */}
            {/* {randomPlace1.i === i ? <Player playerNumber={1} /> : null} */}
            {player1Location.i === i ? <Player playerNumber={1} /> : null}
            {player2Location.i === i ? <Player playerNumber={2} /> : null}


        </Hexagon>
    )
}
export default Cell