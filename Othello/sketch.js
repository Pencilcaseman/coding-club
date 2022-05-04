let board; // The Othello game board

let empty = 0; // Empty board space
let p1 = 1; // Define the pieces for each player
let p2 = 2; // This isn't necessary but makes the code neater

let pixelWidth = 400; // Width of game window in pixels
let pixelHeight = 400; // Height of game window in pixels
let cellsX = 10; // Number of squares on the x-axis
let cellsY = 10; // Number of squares on the y-axis
let cellWidth = pixelWidth / cellsX; // Pixel width of block
let cellHeight = pixelHeight / cellsY; // Pixel height of block

let currentPlayer = p1;

function initializeBoard() {
  board = [];
  // Initialise the board and fill it with zeros
  for (let i = 0; i < cellsX; i++) {
    board[i] = [];
    for (let j = 0; j < cellsY; j++) {
      board[i][j] = 0;
    }
  }
}

// Place a piece given the screen-space coordinate X and Y
function placePiece(coordX, coordY) {
  // Find the index in the board
  pieceX = floor(coordX / pixelWidth);
  pieceY = floor(coordY / pixelHeight);
}

// Check that the position board[column][row] is a valid spot
// for the player to place piece
function checkValid(row, col) {
  // We know the current position is empty, as we check that
  // before placing the piece

  // First, let's check going left and right (easiest)

  //----- Check going LEFT ---------------------------------
  let valid = true; // Is the current cell we're checking valid?
  let checkCol = col; // The current column we're checking
  let checkRow = row; // The current row we're checking

  let comparePiece; // This will hold the piece we want to *take*
  if (currentPlayer == p1) {
    comparePiece = p2;
  } else {
    comparePiece = p1;
  }

  // A list of pieces that we could take if we check to the left
  validPiecesLeft = [];

  while (valid) {
    // Loop while it is
    // Going left, so decrease the column by one
    checkCol -= 1;

    // Check that the column doesn't become less than zero! This might cause
    // some weird problems
    if (checkCol < 0) {
      valid = false;
    } else {
      // Check if the cell we land on is empty
      if (board[checkRow][checkCol] == empty) {
        // We cannot place a piece at the requested cell, so any pieces we may
        // have thought were valid actually aren't. We don't want to return anything
        // at this point, though, because the cell might still be valid for other
        // directions
        valid = false;
        validPiecesLeft = [];
      } else {
        // A piece was found, so we must decide what to do with it
        if (board[checkRow][checkCol] == comparePiece) {
          // The piece we landed on is owned by the other player, so we can
          // add it to the list of pieces we might be able to take

          // Note that we are pushing a list into another list
          validPiecesLeft.push([checkRow, checkCol]);
        } else {
          // We know the cell is not empty and that it's not the piece we want,
          // so therefore it must be one of our pieces!

          // -------------- Note ----------------------------------
          // We don't need to mess with validPiecesLeft
          // because, based on the logic we've defined,
          // it'll be empty if there are no valid cells to take
          // going to the left, and it'll contain the coords
          // of anything that we *can* take. If we check later on
          // that at least one direction gives at least one valid
          // cell to take, then we know this is a valid place to move
          // -------------------------------------------------------

          valid = false;
        }
      }
    }
  }

  // Reset these variables so we can use them again
  valid = true;
  checkCol = col;
  checkRow = row;
  validPiecesRight = []; // This will contain valid pieces looking right!

  // Check to the right now  (comments removed to reduce code length)
  while (valid) {
    checkCol += 1;
    if (checkCol >= cellsX) {
      valid = false;
    } else {
      if (board[checkRow][checkCol] == empty) {
        valid = false;
        validPiecesRight = [];
      } else {
        if (board[checkRow][checkCol] == comparePiece) {
          validPiecesRight.push([checkRow, checkCol]);
        } else {
          valid = false;
        }
      }
    }
  }

  // Reset these variables so we can use them again
  valid = true;
  checkCol = col;
  checkRow = row;
  validPiecesUp = []; // This will contain valid pieces looking up!

  // --------- NOTE ---------
  // If we're looking up, this means *decreasing* our *row* value!
  // ------------------------

  // Check up  (comments removed to reduce code length)
  while (valid) {
    checkRow -= 1;

    if (checkRow < 0) {
      valid = false;
    } else {
      if (board[checkRow][checkCol] == empty) {
        valid = false;
        validPiecesUp = [];
      } else {
        if (board[checkRow][checkCol] == comparePiece) {
          validPiecesUp.push([checkRow, checkCol]);
        } else {
          valid = false;
        }
      }
    }
  }

  // Reset these variables so we can use them again
  valid = true;
  checkCol = col;
  checkRow = row;
  validPiecesDown = []; // This will contain valid pieces looking down!

  // --------- NOTE ---------
  // If we're looking down, this means *increasing* our *row* value!
  // ------------------------

  // Check to the right now  (comments removed to reduce code length)
  while (valid) {
    checkRow += 1;

    if (checkRow >= cellsY) {
      valid = false;
    } else {
      if (board[checkRow][checkCol] == empty) {
        valid = false;
        validPiecesDown = [];
      } else {
        if (board[checkRow][checkCol] == comparePiece) {
          validPiecesDown.push([checkRow, checkCol]);
        } else {
          valid = false;
        }
      }
    }
  }

  // =================Check on the Diagonals===================

  // If we want to check on the diagonals, we need to change the row
  // and the column at the same time. For example, to check diagonally
  // up and left, you would need to decrease the row and decrease the column.
  // To check down and left, you would need to increase the row but decrease
  // the column

  // Reset these variables so we can use them again
  valid = true;
  checkCol = col;
  checkRow = row;
  validPiecesUpLeft = []; // This will contain valid pieces looking diagonally up and left

  // Check diagonally up and left
  while (valid) {
    checkRow -= 1;
    checkCol -= 1;

    if (checkRow < 0 || checkCol < 0) {
      valid = false;
    } else {
      if (board[checkRow][checkCol] == empty) {
        valid = false;
        validPiecesUpLeft = [];
      } else {
        if (board[checkRow][checkCol] == comparePiece) {
          validPiecesUpLeft.push([checkRow, checkCol]);
        } else {
          valid = false;
        }
      }
    }
  }
  
  // Reset these variables so we can use them again
  valid = true;
  checkCol = col;
  checkRow = row;
  validPiecesUpRight = []; // This will contain valid pieces looking diagonally up and right

  // Check diagonally up and right
  while (valid) {
    checkRow -= 1;
    checkCol += 1;

    if (checkRow < 0 || checkCol >= cellsX) {
      valid = false;
    } else {
      if (board[checkRow][checkCol] == empty) {
        valid = false;
        validPiecesUpRight = [];
      } else {
        if (board[checkRow][checkCol] == comparePiece) {
          validPiecesUpRight.push([checkRow, checkCol]);
        } else {
          valid = false;
        }
      }
    }
  }
  
  // Reset these variables so we can use them again
  valid = true;
  checkCol = col;
  checkRow = row;
  validPiecesDownLeft = []; // This will contain valid pieces looking diagonally down and left

  // Check diagonally up and left
  while (valid) {
    checkRow += 1;
    checkCol -= 1;

    if (checkRow >= cellsY || checkCol < 0) {
      valid = false;
    } else {
      if (board[checkRow][checkCol] == empty) {
        valid = false;
        validPiecesDownLeft = [];
      } else {
        if (board[checkRow][checkCol] == comparePiece) {
          validPiecesDownLeft.push([checkRow, checkCol]);
        } else {
          valid = false;
        }
      }
    }
  }
  
  // Reset these variables so we can use them again
  valid = true;
  checkCol = col;
  checkRow = row;
  validPiecesDownRight = []; // This will contain valid pieces looking diagonally down and right

  // Check diagonally down and right
  while (valid) {
    checkRow += 1;
    checkCol += 1;

    if (checkRow >= cellsY || checkCol >= cellsX) {
      valid = false;
    } else {
      if (board[checkRow][checkCol] == empty) {
        valid = false;
        validPiecesDownRight = [];
      } else {
        if (board[checkRow][checkCol] == comparePiece) {
          validPiecesDownRight.push([checkRow, checkCol]);
        } else {
          valid = false;
        }
      }
    }
  }

  // These could be put directly in the creation of result, but it becomes quite
  // ugly to look at

  let resultValid =
    validPiecesLeft.length != 0 ||
    validPiecesRight.length != 0 ||
    validPiecesUp.length != 0 ||
    validPiecesDown.length != 0 ||
    validPiecesUpLeft.length != 0 ||
    validPiecesUpLeft.length != 0 ||
    validPiecesUpRight.length != 0 ||
    validPiecesDownLeft.length != 0 ||
    validPiecesDownRight.length != 0;

  let resultPositions = [];
  resultPositions = resultPositions.concat(validPiecesLeft);
  resultPositions = resultPositions.concat(validPiecesRight);
  resultPositions = resultPositions.concat(validPiecesUp);
  resultPositions = resultPositions.concat(validPiecesDown);
  resultPositions = resultPositions.concat(validPiecesUpLeft);
  resultPositions = resultPositions.concat(validPiecesUpRight);
  resultPositions = resultPositions.concat(validPiecesDownLeft);
  resultPositions = resultPositions.concat(validPiecesDownRight);

  // Combine all the results into an object so we can make our lives easier :)
  let result = {
    valid: resultValid,
    positions: resultPositions,
  };

  return result;
}

// Draw the board to the screen
function drawBoard() {
  // Draw each cell as a square with an outline
  for (let x = 0; x < cellsX; x++) {
    for (let y = 0; y < cellsY; y++) {
      fill(50, 170, 50);
      stroke(0);
      strokeWeight(2.5);
      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);

      noStroke();
      if (board[y][x] == p1) {
        fill(255);
      } else if (board[y][x] == p2) {
        fill(0);
      }

      if (board[y][x] != empty) {
        circle((x + 0.5) * cellWidth, (y + 0.5) * cellHeight, cellWidth / 1.5);
      }
    }
  }
}

function setup() {
  createCanvas(pixelWidth, pixelHeight + 50);
  initializeBoard();

  board[floor(cellsY / 2)][floor(cellsX / 2)] = p1;
  board[floor(cellsY / 2) - 1][floor(cellsX / 2) - 1] = p1;
  board[floor(cellsY / 2) - 1][floor(cellsX / 2)] = p2;
  board[floor(cellsY / 2)][floor(cellsX / 2) - 1] = p2;
}

function draw() {
  background(220);

  drawBoard();
}

function mousePressed() {
  col = floor(mouseX / cellWidth);
  row = floor(mouseY / cellHeight);

  // Here we calculate the validity of the position we've selected
  let moveInfo = checkValid(row, col);

  // Ensure the current position is empty and is valid
  if (board[row][col] != empty || !moveInfo.valid) {
    // The move was invalid (either no pieces could be taken,
    // or the move did not swap ownership of any cells)

    console.log("This position is invalid! Try again!");
  } else {
    // The move was valid, so we can place the piece down
    board[row][col] = currentPlayer;

    // The moveInfo variable (an object) contains two more variables:
    // - valid     <= can we place something here?
    // - positions <= a list of coordinates for cells we acquire

    // Use the moveInfo.positions variable to change the colour of any
    // new cells we get
    for (let cell of moveInfo.positions) {
      board[cell[0]][cell[1]] = currentPlayer;
    }

    // Swap the current player
    if (currentPlayer == p1) {
      currentPlayer = p2;
    } else {
      currentPlayer = p1;
    }
  }
}
