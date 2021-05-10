window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM contentloaded');
  //
  //

  const gameboard = document.getElementById('gameboard');
  // Using Array.from creates an array from a group of classes
  const boxes = Array.from(document.getElementsByClassName('box'));
  const playText = document.getElementById('gameData');
  const spaces = [null, null, null, null, null, null, null, null, null];
  let gameData = document.querySelector('.gameData');
  const OTxt = 'O';
  const XTxt = 'X';
  let currentPlayer = OTxt;
  restartBtn = document.getElementById('restartBtn');

  const drawBoard = () => {
    boxes.forEach((box, index) => {
      box.addEventListener('click', boxClicked);
    });
  };

  const boxClicked = (e) => {
    const id = e.target.id;
    // console.log(id);
    // If theres nothing in the spaces array ...
    if (!spaces[id]) {
      spaces[id] = currentPlayer;
      // Set inner text of box to X or O
      e.target.innerText = currentPlayer;
      // IF player has won
      if (playerHasWon()) {
        playText.innerText = `${currentPlayer} wins!`;

        return;
      }
      // Toggle players w ternary operator update id=gameData
      currentPlayer = currentPlayer === OTxt ? XTxt : OTxt;
    }
  };

  // Game logic function
  const playerHasWon = () => {
    // Possibilities from space 0
    if (spaces[0] === currentPlayer) {
      if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
        gameData.innerText = `${currentPlayer} wins across the top`;
      }
      if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
        gameData.innerText = `${currentPlayer} wins down the left side`;
      }
      if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
        gameData.innerText = `${currentPlayer} wins diagonally`;
      }
    }

    // Possibilities from space 8
    if (spaces[8] === currentPlayer) {
      if (spaces[5] === currentPlayer && spaces[2] === currentPlayer) {
        gameData.innerText = `${currentPlayer} wins across the right side`;
      }
      if (spaces[7] === currentPlayer && spaces[6] === currentPlayer) {
        gameData.innerText = `${currentPlayer} wins down the left side`;
      }
    }

    // Possibilities from space 4 (middle)
    if (spaces[4] === currentPlayer) {
      if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
        gameData.innerText = `${currentPlayer} wins vertically up the middle`;
      }
      if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
        gameData.innerText = `${currentPlayer} wins horizontally across the middle`;
      }
      if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
        gameData.innerText = `${currentPlayer} wins diagonally`;
      }
    }
  };

  restartBtn.addEventListener('click', () => {
    spaces.forEach((space, index) => {
      spaces[index] = null;
    });
    boxes.forEach((box) => {
      box.innerText = '';
    });

    document.querySelector(
      '.gameData'
    ).innerHTML = `Shall We Play Another Game??`;
    currentPlayer = OTxt;
    console.log('clicked');
  });

  drawBoard();

  //
  //
});
