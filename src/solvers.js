/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/
console.log(row[diagonalIndex + j - r] );
*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, 
//with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  var board = new Board({'n':n});
  var rowCount = 0;
  var colCount = 0;
   // setup matrix board 
  var matrix = new Array(n);
  for ( var i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(n);
  };
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      console.log('elem',matrix[i][j])
      matrix[i][j] = 0;
    }
  }
  console.log('brd', matrix)
  // if ( n === 1) {return [[1]]}

  // setup matrix board 
  // for (var key in board.attributes) {
  //   console.log('ey',key)
  //   if (key !== 'n') {
  //     matrix.push(board.attributes[key]);
  //   }
  // }
  console.log('initial matrix', matrix);
  for(var rowIndex = 0; rowIndex < matrix[0].length; rowIndex++){
    for(var colIndex = 0; colIndex < matrix[0].length; colIndex++){
      //test each spot
      // toggle
      matrix[rowIndex][colIndex] = 1
      
      // Append matrix to board
      for (var key in board.attributes) {
        if (key !== 'n') {
          board.attributes[key] = matrix[Number(key)];
        }
      }
      console.log(matrix, 'Im bored')
      // if (hasConf) => try next space 
      if (board.hasAnyRooksConflicts()) {
        console.log('CONFLICT', board.attributes);
        
        // matrix[rowIndex][colIndex] = 0;

        // Append matrix to board
        for (var key in board.attributes) {
          console.log('dont worry', matrix[Number(key)]);
          if (key !== 'n') {
            board.attributes[key] = matrix[Number(key)];
          }
        }
        rowIndex++;
        console.log('rowIndex:', rowIndex, matrix);
      } 
    }
    // console.log('matrix', matrix);
    // return matrix;
  }
  solution = matrix;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 'red'; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
