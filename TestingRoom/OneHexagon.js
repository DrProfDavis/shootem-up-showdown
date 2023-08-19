class HexagonCanvas {
    constructor(containerId, radius, color) {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.getElementById(containerId).appendChild(this.canvas);

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

// Create a hexagon canvas
const hexagon = new HexagonCanvas("hexagonContainer", 100, "lightblue");