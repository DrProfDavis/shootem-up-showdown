import { useState } from "react"
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import Cell from './Cell'
import Player from './Player'; // Import the Player component

export const gridArray = [
    [-8, 1], [-7, 0], [-6, 0], [-5, -1], [-4, -1], [-3, -2], [-2, -2], [-1, -3], [0, -3], [1, -4], [2, -4], [3, -5], [4, -5], [5, -6], [6, -6], [7, -7], [8, -7],
    [-8, 2], [-7, 1], [-6, 1], [-5, 0], [-4, 0], [-3, -1], [-2, -1], [-1, -2], [0, -2], [1, -3], [2, -3], [3, -4], [4, -4], [5, -5], [6, -5], [7, -6], [8, -6],
    [-8, 3], [-7, 2], [-6, 2], [-5, 1], [-4, 1], [-3, 0], [-2, 0], [-1, -1], [0, -1], [1, -2], [2, -2], [3, -3], [4, -3], [5, -4], [6, -4], [7, -5], [8, -5],
    [-8, 4], [-7, 3], [-6, 3], [-5, 2], [-4, 2], [-3, 1], [-2, 1], [-1, 0], [0, 0], [1, -1], [2, -1], [3, -2], [4, -2], [5, -3], [6, -3], [7, -4], [8, -4],
    [-8, 5], [-7, 4], [-6, 4], [-5, 3], [-4, 3], [-3, 2], [-2, 2], [-1, 1], [0, 1], [1, 0], [2, 0], [3, -1], [4, -1], [5, -2], [6, -2], [7, -3], [8, -3],
    [-8, 6], [-7, 5], [-6, 5], [-5, 4], [-4, 4], [-3, 3], [-2, 3], [-1, 2], [0, 2], [1, 1], [2, 1], [3, 0], [4, 0], [5, -1], [6, -1], [7, -2], [8, -2],
    [-8, 7], [-7, 6], [-6, 6], [-5, 5], [-4, 5], [-3, 4], [-2, 4], [-1, 3], [0, 3], [1, 2], [2, 2], [3, 1], [4, 1], [5, 0], [6, 0], [7, -1], [8, -1],
    [-7, 7], [-5, 6], [-3, 5], [-1, 4], [1, 3], [3, 2], [5, 1], [7, 0]
]



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