// document.querySelector('canvas') selects the element 'canvas' from our index.html
// 'const canvas will' store that for us to use here
const canvas = document.querySelector('canvas')

// selects our canvas context
// this is responsible for drawing out shapes and sprites onto our game
// the reason its named c is because we are going to use it a lot and we want to save time
// TODO Idk yet if this is a 2d or 3d game but I defaulted to 2d - Shawn
const c = canvas.getContext('2d')

// resizes our canvas to fit the computer screen
canvas.width = 1024
canvas.height = 576

// calls our canvas context to create a rectangle background for our game
// fillRect takes four arguments (x-position, y-position, width, height)
c.fillRect(0, 0, canvas.width, canvas.height)

// in order to create an object, we create a class that acts as the blueprint of the object before we create the object itself
class Sprite {
    // when you create a class, you need a constructor method, which is basically a function within the class and will be called every time we create a new object using the Sprite class
    constructor(position) {
        // when you create a property within a class and a constructor you need to make sure it's prefaced with 'this' so each new object has the same properties
        // our sprites will need positions independent from one another. So each time instantiate a sprite, 'this.position' is going to be assigned the position of the individual sprite we created 
        this.position = position
    }
}

// creates our playerOne using the Sprite class
const playerOne = new Sprite()