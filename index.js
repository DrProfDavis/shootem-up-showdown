// document.querySelector('canvas') selects the element 'canvas' from our index.html
// 'const canvas will' store that for us to use here
const canvas = document.querySelector('canvas')

// selects our canvas context
// this is responsible for drawing out shapes and sprites onto our game
// the reason its named ctx is because we are going to use it a lot and we want to save time
const ctx = canvas.getContext('2d')

// resizes our canvas to fit the computer screen
const resolution = {x: 1600, y: 900}
canvas.width = resolution.x
canvas.height = resolution.y
const center = {x: resolution.x / 2, y: (resolution.y*1.1) / 2}

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
        ctx.arc(this.position.x, this.position.y, 35, 0, Math.PI * 2);
        // fills path with color
        ctx.fill();
    }
}

// creates our playerOne object using the PlayerSprite class
const playerOne = new PlayerSprite({
    // which tile will playerOne spawn at
    // TODO CURRENTLY NOT WORKING. Trying to get player to spawn onto a tile thru referencing the array
    x: mapTilesCoords[2],
    y: mapTilesCoords[2]
},console.log('playerOne Created at :'+mapTilesCoords[2])
)

// creates our playerTwo object using the PlayerSprite class
const playerTwo = new PlayerSprite({
    // which tile will playerOne spawn at
    x: 1250,
    y: 485
})

// controls animation
function animate() {
    // calls itself each frame
    window.requestAnimationFrame(animate)
}

// Information to be used by the drawHexagon
const a = 2 * Math.PI / 6;
const r = 50;
const offset = r*.9;

// Creates a grid that fits the specified x and y and calls drawHexagon for each fittable Hex
function drawGrid(width, height) {
    let counter = 1
    for (let y = r; y + r * Math.sin(a) < height; y += 2*r * Math.sin(a)) {
        for (let x = r, j = 0; x + r * (1 + Math.cos(a)) < width; x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)) {
            // Create object for each tile
            drawHexagon(x, y);
            // Creates a reference to the coords in an array
            mapTilesCoords[counter] = [x, y];
            // Sees names of array that is created
            // TODO I noticed at the end of each row of hexagons it maps 'undefined' in the console - Shawn
            console.log('created mapTilesCoords['+counter+'] as: ' + mapTilesCoords[j])
            counter++
        }
    }
}

// Function that draws each Hexagon Tile
// Taken from: https://eperezcosano.github.io/hex-grid/
function drawHexagon(x, y) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        ctx.lineTo(x + offset * Math.cos(a * i), y + offset * Math.sin(a * i));
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

// in order to create an object, we create a class that acts as the blueprint of the object before we create the object itself
class TileSprite {
    // when you create a class, you need a constructor method, which is basically a function within the class and will be called every time we create a new object using the Sprite class
    // using braces makes it to where you do you not need to call position and velocity for every sprite
    constructor(position) {
        // when you create a property within a class and a constructor you need to make sure it's prefaced with 'this' so each new object has the same properties
        // our tile sprites will need positions independent from one another. So each time instantiate a sprite, 'this.position' is going to be assigned the position of the individual sprite we created 
        this.position = position
    }
    // arbitrarily named named but this draws out our sprite
    draw() {
        ctx.fillStyle = 'grey';
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            ctx.lineTo(x + offset * Math.cos(a * i), y + offset * Math.sin(a * i));
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}

function init() {
    // calls drawTileMap
    drawGrid(canvas.width, canvas.height)
    // selects playerOne and calls draw method
    playerOne.draw()
    // selects playerTwo and calls draw method
    playerTwo.draw()
}

init()