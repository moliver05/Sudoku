export function Sudoku(board) {
    this.board = board; //2D array
    // this.status = true; //board is non-legal as a default
  }
  
  Sudoku.prototype.IsLegal = function() {
    var Arr = this.board;
    
    if (Arr.length != 9) {
      //check grid's # of rows
      return "game does not have 9 rows";
    } else {
      var rowIntCount = [];
      for (var i = 0; i < Arr.length; i++) {
        //looping through rows
        if (Arr[i].length != 9) {
          //check grid's # of cols
          return "game does not have 9 cols";
        }
  
        var colIntCount = [];
        for (var j = 0; j < Arr.length; j++) {
          //looping through cols
          if (!rowIntCount.includes(Arr[i][j])) {
            rowIntCount.push(Arr[i][j]);
          }
          if (!Number.isInteger(Arr[i][j]) || Arr[i][j] === 0) {
            //check to see if all cells contains integers.
            return "game includes non integer between 1-9";
          } else {
            if (!colIntCount.includes(Arr[j][i])) {
              colIntCount.push(Arr[j][i]);
            }
          }
          
          }
          if (colIntCount.length < 9) {
              console.log(colIntCount.length);
            //check for duplicates in each col.
            return "game include duplicates in row or col";
        }
        
      }
      if (rowIntCount.length < 9) {
          console.log(rowIntCount.length);
          //check for duplicates in each row.
          return "game include duplicates in row or col";
        }
    }
    return "game is legit!";
  };