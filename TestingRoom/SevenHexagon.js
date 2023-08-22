class HexagonCanvas {
    constructor(canvasId, radius, color) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = 200;
        this.canvas.height = 200;

        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
        this.sides = 6;
        this.radius = radius || 100;
        this.color = color || "lightblue";

        this.drawHexagon();
    }
    


    drawHexagon() {
        this.ctx.beginPath();
        this.ctx.moveTo(
            this.centerX + this.radius * Math.cos(0),
            this.centerY + this.radius * Math.sin(0)
        );

        for (let i = 1; i <= this.sides; i++) {
            const angle = (i * 2 * Math.PI) / this.sides;
            const x = this.centerX + this.radius * Math.cos(angle);
            const y = this.centerY + this.radius * Math.sin(angle);
            this.ctx.lineTo(x, y);
        }

        this.ctx.closePath();

        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "black";
        this.ctx.fillStyle = this.color;

        this.ctx.fill();
        this.ctx.stroke();
        
    }
}


function waitforme(millisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}

async function createHexagons(numberOfHexagons)
{
    //Creating an array to store each hexagon that we make that will be in a different canvas.
    const canvasIds = [];
    //Going to put them in the hexagonContainer div
    const hexagonContainer = document.getElementById("hexagonContainer");

    for(let i = 0; i < numberOfHexagons; i++)
    {
        //This will be the name of the id's of the hexagons starting at 0
        const canvasId = `hexagonCanvas${i}`;
        //We'll create the element canvas so that each hexagon will be in their own canvas
        const canvas = document.createElement("canvas"); 
        //Set the canvas id to equal to canvasId that we named earlier
        canvas.id = canvasId; 
        //Append the hexagon in our container
        hexagonContainer.appendChild(canvas); 
        //Push the canvasId in our array list and redraw our canvas with the updated hexagons
        canvasIds.push(canvasId);
        const hexagon = new HexagonCanvas(canvasId);

        await waitforme(100);
    }

    return canvasIds;
}



const canvasIds = createHexagons(3);