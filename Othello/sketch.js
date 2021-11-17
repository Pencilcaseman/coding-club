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

function initializeBoard() {
  board = []
  // Initialise the board and fill it with zeros
  for (let i = 0; i < cellsY; i++) {
    board[i] = [];
    for (let j = 0; j < cellsX; j++) {
      board[i][j] = empty;
    }
  }
}

// Draw the board to the screen
function drawBoard() {
  // Draw each cell as a square with an outline
  for (let i = 0; i < cellsY; i++) {
    for (let j = 0; j < cellsX; j++) {
      fill(50, 170, 50);
      stroke(0, 0, 0);
      strokeWeight(2.5);
      // rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
      rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
      
      noStroke();
      if (board[i][j] === p1) {
        fill(255);
      } else if (board[i][j] === p2) {
        fill(0);
      }
      
      if (board[i][j] !== empty) {
        circle((i + 0.5) * cellWidth, (j + 0.5) * cellHeight, cellWidth / 1.5);
      }
    }
  }
}

function setup() {
  createCanvas(pixelWidth, pixelHeight);
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