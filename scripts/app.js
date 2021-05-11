window.addEventListener('DOMContentLoaded', () => {
   let playerTurns = 0
   let playerX = []
   let playerO = []
   let displayResults = document.getElementById('displayResults')
   let container = document.getElementById('container')

//WIN.LOSE.TIE CONDITIONAL

    const winCombo = [
         ["s1", "s2", "s3"],
         ["s4", "s5", "s6"],
         ["s7", "s8", "s9"],
         ["s1", "s4", "s7"],
         ["s2", "s5", "s8"],
         ["s3", "s6", "s9"],
         ["s1", "s5", "s9"],
         ["s3", "s5", "s7"]
    ]

function stopGame () {
   for (let i = 0; i < winCombo.length; i++) {
       let winFoundX = 0
       let winFoundO = 0
       for (let y = 0; y < winCombo[i].length; y++) {
           if (playerX.includes(winCombo[i][y])) {
               winFoundX++
               if (winFoundX === 3) {
                   displayResults.innerText = "Player X has won!"
                   container.classList.add('noClick')
               }
            }
            
           if (playerO.includes(winCombo[i][y])) {
               winFoundO++
               if (winFoundO === 3) {
                   displayResults.innerText = "Player O has won!"
                   container.classList.add('noClick')
               }
           }
           if(playerTurns == 9 && winFoundX < 3 && winFoundO < 3) {
                displayResults.innerText = "Tie!"
   }
}
}
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

           let tileCheck= event.target
           console.log(event.target.id)
    
           if (playerTurns % 2 ===0) {
               event.target.classList.add("playerX")
               event.target.classList.add('noClick')
               playerX.push(event.target.id)
               console.log(`playerX => ${playerX}`)
               displayResults.innerText = "Player O turn"
           } else { 
               event.target.classList.add("playerO")
               event.target.classList.add('noClick')
               playerO.push(event.target.id)
               console.log(`playerO=> ${playerO}`)
               displayResults.innerText = "Player X Turn"
           }
    //   }
            stopGame()
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
            container.classList.remove('noClick')
         }
         playerO =[]
         playerX = []
         playerTurns = 0
    }) 



}) //Leave this for end of code so page loads with JS