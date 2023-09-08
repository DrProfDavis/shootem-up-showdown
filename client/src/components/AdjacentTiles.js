import GridArray from './GridArray'

const gridArray = GridArray;

const findIndexByCoordinates = (q, r) => {
    return gridArray.findIndex(coord => coord[0] === q && coord[1] === r);
};

const AdjacentTiles = (q, r, i) => {
    if (i !== -1) {
        const adjacentTiles = [];
        const directions = [
            { dq: 0, dr: -1 }, // Top
            { dq: 1, dr: -1 }, // Top Right
            { dq: 1, dr: 0 },  // Bottom Right
            { dq: 0, dr: 1 },  // Bottom
            { dq: -1, dr: 1 }, // Bottom Left
            { dq: -1, dr: 0 }  // Top Left
        ];

        for (const { dq, dr } of directions) {
            const index = findIndexByCoordinates(q + dq, r + dr);
            if (index >= 0) {
                adjacentTiles.push(index);
            }
        }

        return adjacentTiles;
    }
}

const AdjacentTilesForPlayer = (i) => {

    const [q, r] = GridArray[i];

    if (i !== -1) {
        const adjacentTiles = [];
        const directions = [
            { dq: 0, dr: -1 }, // Top
            { dq: 1, dr: -1 }, // Top Right
            { dq: 1, dr: 0 },  // Bottom Right
            { dq: 0, dr: 1 },  // Bottom
            { dq: -1, dr: 1 }, // Bottom Left
            { dq: -1, dr: 0 }  // Top Left
        ];

        for (const { dq, dr } of directions) {
            const index = findIndexByCoordinates(q + dq, r + dr);
            if (index >= 0) {
                adjacentTiles.push(index);
            }
        }

        return adjacentTiles;

    }
}

export { AdjacentTiles, AdjacentTilesForPlayer };