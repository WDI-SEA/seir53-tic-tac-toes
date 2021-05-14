window.addEventListener("DOMContentLoaded", () => {
    let winnerBanner = document.getElementById("winnerCircle")
    const userMessage = document.getElementById("userMessage")
    let gameTiles = document.querySelectorAll(".gameTile")
    let gameboard = document.getElementById("gameboard")
    userMessage.innerText = "Player X goes first."

    let playerXMoves = []
    let playerOMoves = []
    let totalMoves = 0

    const winningArray = [
        ["one", "two", "three"],    
        ["four", "five", "six"],    
        ["seven", "eight", "nine"],  
        ["one", "four", "seven"],
        ["two", "five", "eight"],
        ["three", "six", "nine"],
        ["three", "five", "seven"],
        ["one", "five", "nine"],
    ]

    function boxClick(event) {
        let tileCheck = event.target
        if (tileCheck.classList.contains("playedX") || tileCheck.classList.contains("playedO")) {
            userMessage.innerText = "Pathetic Human"
        } else {
            if (totalMoves % 2 === 0) {
                tileCheck.classList.add("playedX")
                tileCheck.innerText = "X"
                userMessage.innerText = "Player O Turn"
                totalMoves++
                playerXMoves.push(tileCheck.id)
            } else {
                tileCheck.classList.add("playedO")
                tileCheck.innerText = "O"
                userMessage.innerText = "Player X Turn"
                totalMoves++
                playerOMoves.push(tileCheck.id) 
            }
         if (totalMoves >= 4) {
            endGame()
         }
         if (totalMoves === 9) {
        winnerBanner.innerText = "GAME TIED!"
        userMessage.innerText = " ...yubaba wants to see you"
        endGame()
        stopGame()
        }
    }
}
gameboard.addEventListener("click", boxClick)

function endGame () {
    for (let i = 0; i < winningArray.length; i++) {
      let winFoundX = 0
      let winFoundO = 0
      for (let y = 0; y < winningArray[i].length; y++) {
        if (playerXMoves.includes(winningArray[i][y])) {
          winFoundX++
          if (winFoundX === 3) {
            userMessage.innerText = " your name belongs to me now "
            winnerCircle.innerText = "Player X won!"
            stopGame()
          }
        }
         if (playerOMoves.includes(winningArray[i][y])) {
        winFoundO++
        if (winFoundO === 3) {
          winnerCircle.innerText = "Player o has won!!"
          userMessage.innerText = "or maybe you prefer a lump of coal!"
          stopGame()
        }
      }
    }
  }
}
  function stopGame() {
    gameboard.removeEventListener('click', boxClick)
  }
})
//tileCheck.innerText = totalMoves % 2 === 0 ? "X" : "O"
// if (tileCheck.classList.contains("playedX") || tileCheck.classList.contains(playedO)) {
// userMessage.innerText = "Tile already played. Click again"
//} else  { 
// if (turnNu  % 2 === 0) {
//      tileCheck.classList.add("played O")         <<<<<<
//      tileCheck.innerText = "X"
//      userMessage.innerText = "player 0 turn"
//      playerX.push(tileCheck.id)                   <<<<
// } else {
//if (totalMoves === 9) {
//stopGame()
// if (userMessage.innerText !== "") {}
//winnerCircle.innerText = "GAME TIED"
// userMessage.innerText = "Play Again"
// stopGame()
// let checkIfPlayerWins = (playerArray, target) => target.every(t ); =>  
//     function checkIfPlayerWins (playerArray) {
//         let (i = 0; i < playerArray.length; i++) { 
//     if (playerXMoves === playerArray[i] || playerOMoves === playerArray[i]) {
//         console.log("this player won!!");
//     }    let winnerBanner = document.getElementById("winnerCircle");
//    const clearButton = document.getElementById("clear")
// clearButton.addEventListener("click", function resetGameboard() {
//     gameTiles = document.querySelectorAll(".gameTile")
//     for (let i = 0; i < gameTiles.length; i++) {
//         gameTiles[i].classList = "gameTile"
//         gameTiles[i].innerText = "  "
//     }
//     userMessage.innerText = "Player x goes first"
//     winnerBanner.innerText = "  "
//     playerXMoves = [];
//     playerOMoves = [];
//     totalMoves = 0;