window.addEventListener("DOMContentLoaded", () => {
  //players
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
          event.target.innerText = "O";
          playerO.push(event.target.id)
          console.log(playerO)
          message.innerText = "Player 2 turn";
          let winGame = playerO.every(playerO => winner.includes(playerO))
          console.log(winGame())

        } else {
          event.target.innerText = "X";
          playerX.push(event.target.id)
          console.log(playerO)
          message.innerText = "Player 1 turn";

          let winGame = playerX.every(playerX => winner.includes(playerX))
          console.log(winGame())
        } 
            //tie  -- if playerX && playerO != winner || totalMoves = 5 
      
      }
    });
  }



    //function that will fire when clicked  
    //check against player each indvid
    //arrary of arrays and compare player array vs win array 
     //iterate through a of a 
     // then check 
     


    // for(let i = 0; i < winner.length; i++){
    
      // for(let j = 0; j < winner[j].length; j++) {
      //   console.log(winner[i][j]);
      //   if (playerX === )
      // }
      // console.log(winGame(playerX, winner))
 
  // if (gameTiles[0].innerText ===  gameTiles[1].innerText && gameTiles[0].innerText === gameTiles[2].innerText && gameTiles[0].innerText === "X") {
  //   console.log("x player won")
  // }

  // Reset board and game
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