window.addEventListener('DOMContentLoaded', () => {
   // On click toggle between Xs and Os on the gameboard
   let gameTiles = document.querySelectorAll('.gameTile')

   // Click event for tiles. Every tile is X unless already clicked, then 0
   for (let i=0; i < gameTiles.length; i++) {
       gameTiles[i].addEventListener('click', () => {
           // see what current letter is of game tile that was clicked
           let tile = gameTiles[i].innerText
          
           // toggle between whichever letter is current vs x or 0
           let newPlayStatus = tile === "X" ? "0" : "X"
           
           
           
           // set innerText of div to be new toggled letter
           gameTiles[i].innerText = newPlayStatus
       })
   }
   

// Player switch between X and O
// function switchPlayers(){
//     if (currentPlayer === "X") {
//         currentPlayer = 'O';
//     } else {
//         currentPlayer = 'X';
//     }
// }
// Need click event to call function



}) //Leave this for end of code so page loads with JS