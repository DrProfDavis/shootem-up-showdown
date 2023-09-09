import { useState, useEffect } from "react"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import Cell from './Cell'
import GridArray from './GridArray'
import DropdownMenu from './dropdown'

const gridArray = GridArray;

const Grid = () => {
    const [gridArrayState, useGridArrayState] = useState(gridArray)

    const [score, setScore] = useState(0);

    useEffect(() => {
        console.log("Score has been updated: ", score);
      }, [score]);


    return (
        <div className="app">
            <DropdownMenu></DropdownMenu>
            <div className='gameboard'>
                <HexGrid width={1200} height={675}>
                    <Layout spacing={1.05} size={{ x: 6, y: 6 }} origin={{ x: 0, y: 0 }}>
                        {gridArrayState.map((coord, i) => {
                            const [q, r] = coord
                            return (
                                <Cell key={`${i}-${q}-${r}`} q={q} r={r} i={i} setScore={setScore} score={score}/>
                            )
                        })}
                    </Layout>
                </HexGrid>
                
            </div>
        </div>
    );
}

export default Grid;