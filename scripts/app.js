window.addEventListener('DOMContentLoaded', () => {
   let playerTurns = 0
  // BELOW FOLLOWING ANNA'S EXAMPLE; ABOVE WORKS FOR X AND O TURNS
   let playerX = ("X", [])
   let playerO = ("O", [])

 
   

//WIN.LOSE.TIE CONDITIONAL

    const winCombo = [
         ["s1", "s2", "s3"],
         ["s4", "s5", "s6"],
         ["s7", "s8", "s9"],
         ["s1", "s4", "s7"],
         ["s2", "s5", "s3"],
         ["s3", "s6", "s9"],
         ["s1", "s5", "s9"],
         ["s3", "s5", "s7"]
    ]
//     if (playerTurns >= 4) {
//         if (winCombo === playerX) {
//             console.log("X wins!");
//          } else if (winCombo === playerO) {
//         console.log("O wins!");
//         } else (playerTurns = 9) 
//         console.log("Tie! Everyone's a winner!! kinda..") 
// }

function stopGame () {
   for (let i = 0; i < winCombo.length; i++) {
       let winFoundX = 0
       let winFoundO = 0
       for (let y = 0; y < winCombo[i].length; y++) {
           if (playerX.includes(winCombo[i][y])) {
               winFoundX++
               if (winFoundX === 3) {
                   console.log("Player X has won!")
                   stopGame()
               }
           if (playerO.included(winCombo[i][y])) {
               winFoundO++
               if (winFoundO === 3) {
                   console.log("Player O has won!")
                   stopGame()
               }
           }
        }
   }
}
}

stopGame()


    // On click toggle between Xs and Os on the gameboard
   let gameTiles = document.querySelectorAll('.gameTile')

   // Click event for tiles. Every tile is X unless already clicked, then 0
   for (let i=0; i < gameTiles.length; i++) {
       gameTiles[i].addEventListener('click', (event) => {
           // playerTurns= playerTurns + 1
            playerTurns++
          // HOW TO CHECK IF CLASSLIST CONTAINS NO CLICK 
            event.target.classList.add('noClick')
          
           // see what current letter is of game tile that was clicked
           let tile = gameTiles[i].innerText
          
           // toggle between whichever letter is current vs x or 0
           let newPlayStatus = playerTurns % 2 === 0 ? "X" : "O"
           
           // set innerText of div to be new toggled letter
           gameTiles[i].innerText = newPlayStatus

       })
   }
   

// RESET BUTTON
    let gameTileList= document.getElementsByClassName('gameTile')
    let clear= document.getElementById('Reset')

    clear.addEventListener('click', () => {
        for (let v=0; v < gameTileList.length; v++) {
            let tile =gameTileList[v].innerText
            gameTileList[v].innerText = " ";
            gameTiles[v].classList.remove('noClick')
         }
         playerTurns = 0
    }) 



}) //Leave this for end of code so page loads with JS