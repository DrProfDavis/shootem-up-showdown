// document.querySelector('canvas') selects the element 'canvas' from our index.html
// 'const canvas will' store that for us to use here
const canvas = document.querySelector('canvas')

// selects our canvas context
// this is responsible for drawing out shapes and sprites onto our game
// the reason its named ctx is because we are going to use it a lot and we want to save time
const ctx = canvas.getContext('2d')

// resizes our canvas to fit the computer screen
const resolution = { x: 1600, y: 900 }
canvas.width = resolution.x
canvas.height = resolution.y

// calls our canvas context to create a rectangle background for our game
// fillRect takes four arguments (x-position, y-position, width, height)
ctx.fillStyle = 'grey';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fill();

// empty array to fill mapTiles into
var mapTilesCoords = [];

// in order to create an object, we create a class that acts as the blueprint of the object before we create the object itself
class PlayerSprite {
    // when you create a class, you need a constructor method, which is basically a function within the class and will be called every time we create a new object using the Sprite class
    // using braces makes it to where you do you not need to call position and velocity for every sprite
    constructor(position) {
        // when you create a property within a class and a constructor you need to make sure it's prefaced with 'this' so each new object has the same properties
        // our tile sprites will need positions independent from one another. So each time instantiate a sprite, 'this.position' is going to be assigned the position of the individual sprite we created 
        this.position = position
    }
    // arbitrarily named named but this draws out our sprite
    draw() {
        // sets color of circle
        ctx.fillStyle = 'red';
        // begins drawing the shape to be filled (circle)
        ctx.beginPath();
        // creates arc in the center of x and x coords (x-coord, y-coord, radius, starting-angle, total-angle)
        ctx.arc(this.position.x, this.position.y, 25, 0, Math.PI * 2);
        // fills path with color
        ctx.fill();
    }
}

// Information to be used by the drawHexagon
const a = 2 * Math.PI / 6;
const r = 50;
const tileOffset = r * .9;

// Creates a grid that fits the specified x and y and calls drawHexagon for each fittable Hex
// Taken from: https://eperezcosano.github.io/hex-grid/
function drawGrid(width, height) {
    let counter = 1
    for (let y = r+50; y + r * Math.sin(a) < height; y += 2 * r * Math.sin(a)) {
        for (let x = r+187.5, j = 0; x + r * (1 + Math.cos(a)) < width+187.5; x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)) {
            // Create object for each tile
            drawHexagon(x, y, counter);
            counter++
        }
    }
}

// TODO Removes unneeded tiles --Shawn Does not currently work. Giving weird error when uncommented
function removeTiles() {
    console.log(mapTilesCoords)
    console.log(mapTilesCoords[1])
    // removeObjectWithId(mapTilesCoords, 2);
}

// removes one object within an array
function removeObjectWithId(arr, id) {
    console.log('Removing: ' + arr[id])
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    if (objWithIdIndex > -1) {
        arr.splice(objWithIdIndex, 1);
    }
    return arr;
}

//JOEY NOTE - Me and Edi had to use ChatGPT for this for help, but basically what this function does is that it makes it so that the hexagons, when you click them, currently console.log the tile that is clicked, and the adjacent tiles to the tile that you clicked. clickedTileIndex variable is set as 0 (or can be any negative number) just so that the if statement will always be true because our tiles start at 1, therefore it's impossible to click a tile at 0, or a tile at a negative number.
canvas.addEventListener("click", function (event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    let clickedTileIndex = 0;

    // Find the clicked tile
    for (let i = 1; i < mapTilesCoords.length; i++) {
        const tile = mapTilesCoords[i];
        if (tile) {
            const distance = Math.sqrt(
                (mouseX - tile.x) ** 2 + (mouseY - tile.y) ** 2
            );
            if (distance <= r) {
                clickedTileIndex = i;
                break; // No need to continue checking
            }
        }
    }

    if (clickedTileIndex !== 0) {
        const adjacentTileIndices = getAdjacentTiles(clickedTileIndex);
        console.log("Clicked tile:", clickedTileIndex);
        console.log("Adjacent tiles:", adjacentTileIndices);
        // Perform actions for the clicked tile and its adjacent tiles here

    }
});

//JOEY NOTE - function to get adjacent tiles of the tile that you click. This helps you pick an area on the hexagon map and then shows you the adjacent tiles around it and puts it in an array for us to use later when we want to randomly pick a tile in that section to use. We were thinking about hard coding an area, but then if we change the map size and stuff, hard coding it would be bad cause tiles would change.

function getAdjacentTiles(tileIndex) {
    // Calculate the coordinates of the clicked tile
    const clickedTile = mapTilesCoords[tileIndex];
    const clickedX = clickedTile.x;
    const clickedY = clickedTile.y;

    // JOEY NOTE - Calculate the coordinates of the six potential adjacent tiles. ALOT of math here that I didn't reallllly bother to check.... but it works haha
    const potentialAdjacents = [
        [clickedX + r * (1 + Math.cos(a)), clickedY + r * Math.sin(a)],
        [clickedX + r * (1 + Math.cos(a)), clickedY - r * Math.sin(a)],
        [clickedX, clickedY - 2 * r * Math.sin(a)],
        [clickedX - r * (1 + Math.cos(a)), clickedY - r * Math.sin(a)],
        [clickedX - r * (1 + Math.cos(a)), clickedY + r * Math.sin(a)],
        [clickedX, clickedY + 2 * r * Math.sin(a)]
    ];

    const adjacentTileIndices = [];

    // Check which potential adjacent tiles are valid and find their indices
    for (let i = 1; i < mapTilesCoords.length; i++) {
        const tile = mapTilesCoords[i];
        for (let j = 0; j < potentialAdjacents.length; j++) {
            const potentialAdjacent = potentialAdjacents[j];
            const distance = Math.sqrt(
                (potentialAdjacent[0] - tile.x) ** 2 + (potentialAdjacent[1] - tile.y) ** 2
            );
            if (distance <= r && i !== tileIndex) {
                adjacentTileIndices.push(i);
                break; // No need to continue checking this potential adjacent
            }
        }
    }

    return adjacentTileIndices;
}

// Function that draws each Hexagon Tile
function drawHexagon(x, y, counter) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        ctx.lineTo(x + tileOffset * Math.cos(a * i), y + tileOffset * Math.sin(a * i));
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    // Creates a reference to the coords in an array
    mapTilesCoords[counter] = { x: x, y: y };
}

function init() {
    // calls drawTileMap
    drawGrid(canvas.width * .8, canvas.height * .9)

    // erase unneeded tiles
    removeTiles();

    //JOEY NOTE - Player one can spawn in the tiles that are given in the array that we set in our function getAdjacentTiles. It makes the array based off of which tiles are touching the tile you put as the parameter, and then we randomly choose a number in that array. We then take that number, and then get the x,y coordinates of it, and then pass it onto playerOne = new PlayerSprite to set the spawn and draw the location of spawn

    const playerOneSpawnLocations = getAdjacentTiles(44); //Can be changed to wherever the area you want to spawn player one at.

    const playerOneRandomSpawn = Math.floor(Math.random() * playerOneSpawnLocations.length);

    //spawnPlayerOneIndex gets the tile that the player is spawning on
    const spawnPlayerOneIndex = playerOneSpawnLocations[playerOneRandomSpawn];
    //spawnPlayerOne gets the coordinates for us to pass it later
    const spawnPlayerOne = mapTilesCoords[spawnPlayerOneIndex];

    const playerTwoSpawnLocations = getAdjacentTiles(85);
    const playerTwoRandomSpawn = Math.floor(Math.random() * playerTwoSpawnLocations.length);
    const spawnPlayerTwoIndex = playerTwoSpawnLocations[playerTwoRandomSpawn];
    const spawnPlayerTwo = mapTilesCoords[spawnPlayerTwoIndex];


    const playerOne = new PlayerSprite({
        // which tile will playerOne spawn at
        x: spawnPlayerOne.x,
        y: spawnPlayerOne.y
    },
        console.log("Player One Spawning at: " + spawnPlayerOneIndex)
        // console.log('playerOne Created at :' + this.mapTilesCoords[2])
    )
    // creates our playerTwo object using the PlayerSprite class
    const playerTwo = new PlayerSprite({
        // which tile will playerOne spawn at
        x: spawnPlayerTwo.x,
        y: spawnPlayerTwo.y
    }, console.log("Player Two Spawning at: " + spawnPlayerTwoIndex)
        // console.log('playerTwo Created at :' + this.mapTilesCoords[70])
    )
    // selects playerOne and calls draw method
    playerOne.draw()
    // selects playerTwo and calls draw method
    playerTwo.draw()
}

init()

//ToDO make clickable tiles