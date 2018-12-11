var playersTurn = 1
var playerBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

var player1 = prompt('Enter Player 1\'s Name!');
var player2 = prompt('Enter Player 2\'s Name!');

const resetGame = () => {
    playersTurn = 1;
    playerBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    for (var x = 0; x < 9; x++) {
    document.getElementsByClassName('cell')[x].innerText = '';
    }
}

const rowWin = (row) => {
    let rowCheck = playerBoard[row];
    if(playersTurn % 2 === 0) {
        for (var x = 0; x < playerBoard.length; x++) {
            if(rowCheck[x] === 1 || rowCheck[x] === 0) {
                return false;
            } 
        }
        return true;
    } else {
        for (var i = 0; i < playerBoard.length; i++) {
            if(rowCheck[i] === 2 || rowCheck[i] === 0) {
                return false;
            } 
        }
        return true;
    }
}

const colWin = (col) => {
    if(playersTurn % 2 === 0) {
        for (var x = 0; x < playerBoard.length; x++) {
            if(playerBoard[x][col] === 1 || playerBoard[x][col] === 0) {
                return false
            } 
        }
        return true;
    } else {
        for (var i = 0; i < playerBoard.length; i++) {
            if(playerBoard[i][col] === 2 || playerBoard[i][col] === 0) {
                return false
            } 
        }
        return true; 
    }
}

const diagnolTopLeftBottomRightWin = () => {
  const diagTopLeft = playerBoard[0][0];
  const diagMid = playerBoard[1][1];
  const diagBottomRight = playerBoard[2][2];
  let result = true;
  if (playersTurn % 2 === 0) {
      if ((diagTopLeft === 1 || diagTopLeft === 0) || (diagMid === 1 || diagMid === 0) || (diagBottomRight === 1 || diagBottomRight === 0)) {
          result = false;
      }
  } else {
        if ((diagTopLeft === 2 || diagTopLeft === 0) || (diagMid === 2 || diagMid === 0) || (diagBottomRight === 2 || diagBottomRight === 0)) {
            result = false;
        }
  }
  return result;
}

const diagnolTopRightBottomLeftWin = () => {
    const diagTopRight = playerBoard[0][2];
    const diagMid = playerBoard[1][1];
    const diagBottomLeft = playerBoard[2][0];
    let result = true;
    if (playersTurn % 2 == 0) {
        if ((diagTopRight === 1 || diagTopRight === 0) || (diagMid === 1 || diagMid === 0) || (diagBottomLeft === 1 || diagBottomLeft === 0)) {
            result = false
        }
    } else {
        if ((diagTopRight === 2 || diagTopRight === 0) || (diagMid === 2 || diagMid === 0) || (diagBottomLeft === 2 || diagBottomLeft === 0)) {
            result = false
        }
    }
    return result;
}

const winConditions = (row, col) => {
  if(rowWin(row)) {
      winner();
      return;
  }
  if(colWin(col)){
      winner();
      return;
  }
  if (diagnolTopLeftBottomRightWin()) {
      winner()
      return;
  }
  if(diagnolTopRightBottomLeftWin()) {
      winner();
      return;
  }
  if(playersTurn === 9) {
      drawGame();
  }

}

const winner = () => {
    if(playersTurn % 2 === 0) {
        alert(`${player2} Wins!`);
    } else {
        alert(`${player1} Wins!`);
    }
}

const drawGame = () => {
    alert('Draw Game!  Press New Game! to start a new game!');
}

const placePiece = (spot, row, col) => {
    let place = document.getElementsByClassName('cell')[spot]
    if(!place.innerText) {
      if (playersTurn % 2 === 0) {
          place.innerText = 'O'
          playerBoard[row].splice(col, 1, 2);
      } else {
          place.innerText = 'X'
          playerBoard[row].splice(col, 1, 1);
      }
      if(playersTurn >= 5) {
        winConditions(row, col);   
      }
      playersTurn ++
    } 
}
