export function Sudoku(board) {
    this.board = board; //2D array
    this.status = false; //board is non-legal as a default
}

Sudoku.prototype.IsLegal = function () {
    if (this.board.length != 9) { //check grid's # of rows
        this.status = false;
    }
    else {

        for (var i = 0; i < this.board.length; i++) {
            var rowSum = 0;
            for (var j = 0; j < this.board.length; j++) {
                rowSum += this.board[i][j];
                if (!this.board[i][j].isInteger()) //check to see if all cells contains integers.
                {
                    this.status = false;
                }
            }
            if (rowSum != 45) //check for duplicates in each row.
            {
                this.status = false;
            }
        }

        var colSum = 0;
        for (var l = 0; l < this.board.length; l++) {

            if (this.board[l].length != 9) { //check grid's # of cols
                this.status = false;
            }
            else {
                colSum += this.board[l];
            }
        }
        if (colSum != 45) { //check for duplicates in each col.
            this.status = false;
        }
        this.status = true;
    }
    return this.status;
}

