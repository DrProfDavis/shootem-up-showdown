import { useState } from "react"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import Cell from './Cell'
import GridArray from './GridArray'


const gridArray = GridArray;

const Grid = () => {
    const [gridArrayState, useGridArrayState] = useState(gridArray)

    return (
        <div className="app">
            <div className='gameboard'>
                <HexGrid width={1200} height={675}>
                    <Layout spacing={1.05} size={{ x: 6, y: 6 }} origin={{ x: 0, y: 0 }}>
                        {gridArrayState.map((coord, i) => {
                            const [q, r] = coord
                            return (
                                <Cell key={i} q={q} r={r} i={i} />
                            )
                        })}
                    </Layout>
                </HexGrid>
            </div>
        </div>
    );
}

export default Grid;