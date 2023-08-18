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

// calls our canvas context to create a rectangle
// fillRect takes four arguments (x-position, y-position, width, height)
// TODO No idea how to do hexagon yet so defaulted to this - Shawn
c.fillRect(0, 0, canvas.width, canvas.height)