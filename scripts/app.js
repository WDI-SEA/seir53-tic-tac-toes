window.addEventListener("DOMContentLoaded", () => {
    let playerXMoves = [];
    let playerOMoves = [];
    let totalMoves = 0;
    let gameTiles = document.querySelectorAll(".gameTile")
    const clearButton = document.getElementById("clear")

    for(let i = 0; i < gameTiles.length; i++) {
        gameTiles[i].addEventListener("click", (event) => {
        const userMessage = document.getElementById("userMessage")
        if (!event.target.classList.contains("clicked")) {
            event.target.className += " clicked";
            totalMoves++;
            event.target.innerText = totalMoves % 2 === 0 ? "X" : "O"
            if (totalMoves % 2 === 0) {
                event.target.innerText = "O";
                playerXMoves.push(event.target.id)
                console.log(playerXMoves)
                userMessage.innerText = "Player X Turn";
            } else {
                event.target.innerText = "X";
                playerOMoves.push(event.target.id)
                console.log(playerOMoves)
                userMessage.innerText = "Player O Turn"
            }
        }
    })
    }//function boxClick(event) {
    //let tileCheck = event.target
   // if (tileCheck.classList.contains("playedX") || tileCheck.classList.contains(playedO)) {
   // displayTurn.innerText = "Tile already played. Click again"
   //} else  { 
    // if (turnNu  % 2 === 0) {
    //      tileCheck.classList.add("played X")         <<<<<<
    //      tileCheck.innerText = "X"
    //      userMessage.innerText = "player 0 turn"
    //      playerX.push(tileCheck.id)                   <<<<
   // } else {
   // }
   // if (totalMoves >= 4) {
    //  gameOver()
   //}
   //if (totalMoves === 9) {
    // winnerCircle.innerText = "GAME TIED"
    // userMessage.innerText = "Play Again"
   // endGame()
   //}
   //
    const winningArray =[       //     function gameOver() {
        ["one", "two", "three"],    //
        ["four", "five", "six"],     //}
        ["seven", "eight", "nine"],  //
        ["one", "four", "seven"],
        ["two", "five", "eight"],
        ["three", "six", "nine"],
        ["three", "five", "seven"],
        ["one", "five", "nine"],
    ]
    

    const playerArray = Array.from(document.getElementsByClassName("gametile"));

    console.log(playerArray.includes(["one", "two", "three"]));
    //let winnerBanner = document.getElementById("winnerCircle");
   // let checkIfPlayerWins = (playerArray, target) => target.every(t ); =>  

   //     function checkIfPlayerWins (playerArray) {
//         let (i = 0; i < playerArray.length; i++) { 
//     if (playerXMoves === playerArray[i] || playerOMoves === playerArray[i]) {
//         console.log("this player won!!");
//     }    let winnerBanner = document.getElementById("winnerCircle");
// }}
//}
// //  }    
//gameTiles.forEach(() => {
//addEventListener("click", (event) => {
//gameTiles.innerText[i]
// let currentStatus = event.target.innerText;
// let newPlayStatus = currentStatus === "X" ? "0" : "X"
// event.target.innerHTML = newPlayStatus//detect Draw("Tied game""No winner") conditions 
//once 9 clicks detected,  run Tie function
   
 //   clearButton.addEventListener("click", function resetGameboard() {
 //       event.preventDefault()
  //      event.target.innerText = " "
//         let tile = gameTiles[j].innerText;
//         gameTiles[j].pull(event.target.id)
// }
     })


    