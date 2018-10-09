import { Sudoku } from "../src/sudoku.js";

describe("Sudoku", function() {
  var reusableSudoku;
  beforeEach(function() {
    reusableSudoku = new Sudoku([
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [9, 1, 2, 3, 4, 5, 6, 7, 8]
    ]);
  });
  it("should correctly check if the input game is legit", function() {
    expect(reusableSudoku.IsLegal()).toEqual("game is legit!"); //has 9 rows
  });
  it("should correctly check if the input game has 9 rows", function() {
    reusableSudoku = new Sudoku([
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [8, 9, 1, 2, 3, 4, 5, 6, 7]
    ]);
    expect(reusableSudoku.IsLegal()).toEqual("game does not have 9 rows"); //has 9 rows
  });
  it("should correctly check if the input game has 9 cols", function() {
    reusableSudoku = new Sudoku([
      [2, 3, 4, 5, 6, 7, 8, 9],
      [3, 4, 5, 6, 7, 8, 9, 1],
      [4, 5, 6, 7, 8, 9, 1, 2],
      [5, 6, 7, 8, 9, 1, 2, 3],
      [6, 7, 8, 9, 1, 2, 3, 4],
      [7, 8, 9, 1, 2, 3, 4, 5],
      [8, 9, 1, 2, 3, 4, 5, 6],
      [9, 1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5, 6, 7, 8]
    ]);
    expect(reusableSudoku.IsLegal()).toEqual("game does not have 9 cols"); //has 9 cols
  });
  it("should correctly check if all cells include only integer from 1-9", function() {
    reusableSudoku = new Sudoku([
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [2, 3, 4, 5, 6, 7, 8, 0, 1],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [9, 1, 2, 3, 4, 5, 6, 7, 8]
    ]);

    expect(reusableSudoku.IsLegal()).toEqual(
      "game includes non integer between 1-9"
    ); //there is a 0
  });
  
    it("should correctly check if there is any duplicates", function() {
        reusableSudoku = new Sudoku([
            [2, 2, 3, 4, 5, 6, 7, 8, 8],
            [1, 3, 4, 5, 6, 7, 8, 9, 2],
            [3, 4, 5, 6, 7, 8, 9, 1, 2],
            [4, 5, 6, 7, 8, 9, 1, 2, 3],
            [5, 6, 7, 8, 9, 1, 2, 3, 4],
            [6, 7, 8, 9, 1, 2, 3, 4, 5],
            [7, 8, 9, 1, 2, 3, 4, 5, 6],
            [8, 9, 1, 2, 3, 4, 5, 6, 7],
            [9, 1, 2, 3, 4, 5, 6, 7, 8]
          ]);
      expect(reusableSudoku.IsLegal()).toEqual(
        "game include duplicates in row or col"
      ); //there are duplicates
    });
});