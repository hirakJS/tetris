class Board {
    reset() {
        this.grid = this.getEmptyBoard();
    }

    getEmptyBoard() {
        return Array.from(
            {length: ROWS}, () => Array(COLS).fill(0)
        );
    }

    isValidMove(piece) {
        return piece.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = piece.x + dx;
                let y = piece.y + dy;

                return value === 0 || ((x >= 0 && x < COLS) && (y < ROWS));
            });
        });
    }
}