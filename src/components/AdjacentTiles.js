import GridArray from './GridArray'

const gridArray = GridArray;

const findIndexByCoordinates = (q, r) => {
    return gridArray.findIndex(coord => coord[0] === q && coord[1] === r);
};

const AdjacentTiles = (q, r, i) => {
    if (i !== -1) {
        const adjacentTiles = [];

        //Top
        if (findIndexByCoordinates(q, r - 1) >= 0) {
            adjacentTiles.push(findIndexByCoordinates(q, r - 1));
        }
        //Top Right
        if (findIndexByCoordinates(q + 1, r - 1) >= 0) {
            adjacentTiles.push(findIndexByCoordinates(q + 1, r - 1));
        }
        //Bottom Right
        if (findIndexByCoordinates(q + 1, r) >= 0) {
            adjacentTiles.push(findIndexByCoordinates(q + 1, r));
        }
        //Bottom
        if (findIndexByCoordinates(q, r + 1) >= 0) {
            adjacentTiles.push(findIndexByCoordinates(q, r + 1));
        }
        //Bottom Left
        if (findIndexByCoordinates(q - 1, r + 1) >= 0) {
            adjacentTiles.push(findIndexByCoordinates(q - 1, r + 1));
        }
        //Top Left
        if (findIndexByCoordinates(q - 1, r) >= 0) {
            adjacentTiles.push(findIndexByCoordinates(q - 1, r));
        }

        return adjacentTiles;
    }
}

export {AdjacentTiles };