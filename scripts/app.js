window.addEventListener('DOMContentLoaded', () => {
  //players 
  // const playerX;
  // const playerO;

  //get all tiles
  let totalMoves = 0; 
  let gameTiles = document.querySelectorAll('.gameTile')
  // let nextMove = 'X'


  //click event for tiles. 
  for (let i = 0; i < gameTiles.length; i++) {
    gameTiles[i].addEventListener('click', (event) => {
      // see what current letter is of game tile that was clicked
      //prevent cell from being clicked if alredy filled
      totalMoves++;

      // let tile = gameTiles[i].innerText;
      let tile = event.target.innerText;
      console.log(tile)

      let newPlayStatus = tile === "X" // true or false

      event.target.innerText = totalMoves % 2 === 0 ? "X" : "O"



     
    //  if (event.target.className != "gameTile clicked") {
    //     event.target.innerText = nextMove
    //     nextMove = nextMove === "X" ? "O" : "X"

       //add class to cell that was clicked
    //    event.target.className = "gameTile clicked" 
    //Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
    const message = document.getElementById('userMessage');
    newPlayStatus === "X" ? message.innerText = "Player 1 turn" : message.innerText = "Player 2 turn"; 
    //   }
    // )}
  }
  )}

      //display message to next turn 
          //maybe check against playstatus
          
      //handle ties and delcare winner
    //   console.log("GAMETILES 0", gameTiles[0].innerText)
    //   console.log("GAMETILES 1", gameTiles[1].innerText)
    //   console.log("GAMETILES 2", gameTiles[2].innerText)

    // const winner = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8],
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   [0, 4, 8],
    //   [2, 4, 6] 
    // ]

    // if (gameTiles[0].innerText ===  gameTiles[1].innerText && gameTiles[0].innerText === gameTiles[2].innerText && gameTiles[0].innerText === "X") {
    //   console.log("x player won")
    // }

    
          // maybe declare function to check on conditions to win or ties and result 
          // call this when you click 
          // if check cell 1 2 3 are same == win  (if else )

    // Clear Board and restart game 
       const clear = document.getElementById('clear');
    
       clear.addEventListener('click', () => {
          // const gatherBoxes = document.querySelectorAll('.clear')
          for (let j = 0; j < gameTiles.length; j++ ) {
            let tile = gameTiles[j].innerText;
            gameTiles[j].innerText = "";
          } 
          // gatherBoxes.innerText = "";
          // for( let tile of gameTiles) {
          //   gameTiles.innerText = ""; 
          // }
         
       })
      
})