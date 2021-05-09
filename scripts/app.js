window.addEventListener("DOMContentLoaded", () => {
  //players
  let playerX = [];
  let playerO = [];

  //get all tiles
  let totalMoves = 0;
  let gameTiles = document.querySelectorAll(".gameTile");
  // let nextMove = 'X'

  //click event for tiles.
  for (let i = 0; i < gameTiles.length; i++) {
    gameTiles[i].addEventListener("click", (event) => {
      // see what current letter is of game tile that was clicked
      //prevent cell from being clicked if alredy filled

      const message = document.getElementById("userMessage");
      if (!event.target.classList.contains("clicked")) {
        event.target.className += " clicked";
        totalMoves++;
        // event.target.innerText = totalMoves % 2 === 0 ? "X" : "O" // alternate xs and os
        if (totalMoves % 2 === 0) {
          event.target.innerText = "X";
          playerX.push(event.target.id)
          console.log(playerX)
          message.innerText = "Player 1 turn";
        } else {
          event.target.innerText = "O";
          playerO.push(event.target.id)
          console.log(playerO)
          message.innerText = "Player 2 turn";
        }
      }
    });
  }

  //display message to next turn
  //maybe check against playstatus

  //handle ties and delcare winner
  //   console.log("GAMETILES 0", gameTiles[0].innerText)
  //   console.log("GAMETILES 1", gameTiles[1].innerText)
  //   console.log("GAMETILES 2", gameTiles[2].innerText)

  const winner = [
    ["top-left", "top-mid", "top-right"],
    ["mid-left", "mid-mid", "mid-right"],
    ["bot-left", "bot-mid", "bot-right"],
    ["top-left", "mid-left", "bot-left"],
    ["top-mid", "mid-mid", "bot-mid"],
    ["top-right", "mid-right", "bot-right"],
    ["top-left", "mid-mid", "bot-right"],
    ["top-right", "mid-mid", "bot-left"]
  ]

  // if (gameTiles[0].innerText ===  gameTiles[1].innerText && gameTiles[0].innerText === gameTiles[2].innerText && gameTiles[0].innerText === "X") {
  //   console.log("x player won")
  // }

  // maybe declare function to check on conditions to win or ties and result
  // call this when you click
  // if check cell 1 2 3 are same == win  (if else )

  // Clear Board and restart game
  const clear = document.getElementById("clear");

  clear.addEventListener("click", () => {
    // const gatherBoxes = document.querySelectorAll('.clear')
    for (let j = 0; j < gameTiles.length; j++) {
      let tile = gameTiles[j].innerText;
      gameTiles[j].innerText = "";
      gameTiles[j].className = "gameTile"
    }
    playerX = [];
    playerO = [];
  });
});