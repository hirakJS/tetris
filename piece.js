class Piece {
    constructor(ctx) {
        this.ctx = ctx;
        this.color = 'red';
        this.shape = [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ];

        // Starting position
        this.x = 3;
        this.y = 0;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }

    move(p) {
        this.x = p.x;
        this.y = p.y;
    }
}
