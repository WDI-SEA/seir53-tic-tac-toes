window.addEventListener('DOMContentLoaded', () => {
   let playerTurns = 0
  // BELOW FOLLOWING ANNA'S EXAMPLE; ABOVE WORKS FOR X AND O TURNS
   let playerX = ("X", [])
   let playerO = ("O", [])

 // ARRAY FOR SQUARES
    let s1 = document.getElementById('one')
    let s2= document.getElementById('two')
    let s3= document.getElementById('three')
    let s4= document.getElementById('four')    
    let s5= document.getElementById('five')
    let s6= document.getElementById('six')
    let s7= document.getElementById('seven')
    let s8= document.getElementById('eight')
    let s9= document.getElementById('nine')

    const gameSq= [s1,s2,s3,s4,s5,s6,s7,s8,s9]
    const gameSquareArray= document.querySelectorAll('.gameTile')
    // console.log(`gameSq ${gameSq}`)
    // console.log(`gameSq ${gameSquareArray}`)

//WIN.LOSE.TIE CONDITIONAL

    const winCombo = [
         [s1, s2, s3],
         [s4, s5, s6],
         [s7, s8, s9],
         [s1, s4, s7],
         [s2, s5, s3],
         [s3, s6, s9],
         [s1, s5, s9],
         [s3, s5, s7]
    ]
    if (playerTurns >= 4) {
        if (winCombo === playerX) {
            console.log("X wins!");
         } else if (winCombo === playerO) {
        console.log("O wins!");
        } else (playerTurns > 9) 
        console.log("Tie! Everyone's a winner!! kinda..")
         
}
   
   
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
    })



}) //Leave this for end of code so page loads with JS