window.addEventListener("DOMContentLoaded", () => {
 // Capture DOM elements from page to store as vars
  let message = document.getElementById("userMessage")
  let gameStatus = document.getElementById("gameStatus")
  let clear = document.getElementById("clear");
  
  // set intial turn message
  message.innerText = "Player X goes first."

  // Create or declare all game logic variables and conditions
  let playerX = [];
  let playerO = [];
  let totalMoves = 0;

  //get all tiles
  let gameTiles = document.querySelectorAll(".gameTile");

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
  //TODO where to add
  if (gameStatus.innerText === "") {
    gameStatus.style.background = "#ffffff"
  }


  //click event for tiles.
  for (let i = 0; i < gameTiles.length; i++) {
    gameTiles[i].addEventListener("click", (event) => {
      // see what current letter is of game tile that was clicked
      //prevent cell from being clicked if alredy filled
 
      if (!event.target.classList.contains("clicked")) {
        event.target.className += " clicked";
        totalMoves++;
        // event.target.innerText = totalMoves % 2 === 0 ? "X" : "O" // alternate xs and os
        if (gameStatus.innerText = "") {
          gameStatus.status
        } 

        
        if (totalMoves === 9) {
          gameStatus.innerText = "You Tied"
        }

        if (totalMoves % 2 === 0) {
          event.target.innerText = "O";
          message.innerText = "Player X turn";
          playerO.push(event.target.id)
          
          for (let y = 0; y < winner.length; y++) {

            //target.every(v => arr.includes(v))
            if (winner[y].every(winCombo => playerO.includes(winCombo))) {
              gameStatus.innerText = "Player O has won the game!"
           
            }
      
          }
   
        } else {
          event.target.innerText = "X";
          message.innerText = "Player O turn";
          playerX.push(event.target.id)
        
          for (let y = 0; y < winner.length; y++) {
            if (winner[y].every(winCombo => playerX.includes(winCombo))) {
              gameStatus.innerText = "Player X has won the game!"
            }
          }

        }
      }

    })

  }
  
  // Reset board and game
  clear.addEventListener("click", () => {
    for (let j = 0; j < gameTiles.length; j++) {
      let tile = gameTiles[j].innerText;
      gameTiles[j].innerText = "";
      gameTiles[j].className = "gameTile"
      gameStatus.innerText = ""
    }
    playerX = [];
    playerO = [];
  });

}); // closes DOM event