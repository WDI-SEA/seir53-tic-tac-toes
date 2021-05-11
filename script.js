window.addEventListener('DOMContentLoaded', () => {
    
    
    // global variables
   let gameTile0 = document.getElementById('0').innerText
   let gameTile1 = document.getElementById('1').innerText
   let gameTile2 = document.getElementById('2').innerText
   let gameTile3 = document.getElementById('3').innerText
   let gameTile4 = document.getElementById('4').innerText
   let gameTile5 = document.getElementById('5').innerText
   let gameTile6 = document.getElementById('6').innerText
   let gameTile7 = document.getElementById('7').innerText
   let gameTile8 = document.getElementById('8').innerText
   let gameTiles = document.getElementById("gameTiles")
   let button = document.getElementsByClassName('resetdiv')
   let turnCounter = 0
   

   //display player's turn
   displayTurn.innerText = "Player X's move"


   // displays game results
    function xWinResults () {
      document.querySelector('#displayTurn').style.fontsize = "xx-large"
      document.querySelector('#displayTurn').innerText = 'X is the Winner!'
      document.querySelector('#results').innerText = 'Nice Job X!'
      stopGame()
    }

    function oWinResults () {
      document.querySelector('#displayTurn').style.fontsize = "xx-large"
      document.querySelector('#displayTurn').innerText = 'O is the Winner!'
      document.querySelector('#results').innerText = 'Nice Job O!'
      stopGame()
    }

    function tieResults () {
      document.querySelector('#displayTurn').style.fontsize = "xx-large"
      document.querySelector('#displayTurn').innerText = 'Tie Game!'
      document.querySelector('#results').innerText = 'Try Again!'
      stopGame()
    }

    //on click toggle between x and o on the gameboard
    function gameStart(event) {
       let tile= event.target

       if (tile.classList.contains('X') || tile.classList.contains('O')) {
          displayTurn.innerText = 'Try again'
       } else {
          if (turnCounter % 2 === 0) {
             tile.classList.add('X')
             tile.innerText = 'X'
             displayTurn.innerText = "O's turn"
             turnCounter++
             console.log(tile.innerText)
          } else {
             tile.classList.add('O')
             tile.innerText = "O"
             displayTurn.innerText = "X's turn"
             turnCounter++
             console.log(tile.innerText)
          }
       }
       let row1x = 
       document.getElementById('0').innerText === 'X' &&
       document.getElementById('1').innerText === 'X' &&
       document.getElementById('2').innerText === 'X'
    
    let row1o = 
       document.getElementById('0').innerText === 'O' &&
       document.getElementById('1').innerText === 'O' &&
       document.getElementById('2').innerText === 'O'
    
    let row2x = 
       document.getElementById('3').innerText === 'X' &&
       document.getElementById('4').innerText === 'X' &&
       document.getElementById('5').innerText === 'X'
    
    let row2o = 
       document.getElementById('3').innerText === 'O' &&
       document.getElementById('4').innerText === 'O' &&
       document.getElementById('5').innerText === 'O'
    
    let row3x = 
       document.getElementById('6').innerText === 'X' &&
       document.getElementById('7').innerText === 'X' &&
       document.getElementById('8').innerText === 'X'
    
    let row3o = 
       document.getElementById('6').innerText === 'O' &&
       document.getElementById('7').innerText === 'O' &&
       document.getElementById('8').innerText === 'O'
    
    let column1x = 
       document.getElementById('0').innerText === 'X' &&
       document.getElementById('3').innerText === 'X' &&
       document.getElementById('6').innerText === 'X'
    
    let column1o = 
       document.getElementById('0').innerText === 'O' &&
       document.getElementById('3').innerText === 'O' &&
       document.getElementById('6').innerText === 'O'
    
    let column2x = 
       document.getElementById('1').innerText === 'X' &&
       document.getElementById('4').innerText === 'X' &&
       document.getElementById('7').innerText === 'X'
    
    let column2o = 
       document.getElementById('1').innerText === 'O' &&
       document.getElementById('4').innerText === 'O' &&
       document.getElementById('7').innerText === 'O'
    
    let column3x = 
       document.getElementById('2').innerText === 'X' &&
       document.getElementById('5').innerText === 'X' &&
       document.getElementById('8').innerText === 'X'
    
    let column3o = 
       document.getElementById('2').innerText === 'O' &&
       document.getElementById('5').innerText === 'O' &&
       document.getElementById('8').innerText === 'O'
    
    let diagonal1x = 
       document.getElementById('0').innerText === 'X' &&
       document.getElementById('4').innerText === 'X' &&
       document.getElementById('8').innerText === 'X'
    
    let diagonal1o = 
       document.getElementById('0').innerText === 'O' &&
       document.getElementById('4').innerText === 'O' &&
       document.getElementById('8').innerText === 'O'
    
    let diagonal2x = 
       document.getElementById('2').innerText === 'X' &&
       document.getElementById('4').innerText === 'X' &&
       document.getElementById('6').innerText === 'X'
    
    let diagonal2o = 
       document.getElementById('2').innerText === 'O' &&
       document.getElementById('4').innerText === 'O' &&
       document.getElementById('6').innerText === 'O'
    
    
 
 
    //win conditions met
 
 
 
    if ( 
       row1x)
       { xWinResults()
    } else if (
       row1o)
       { oWinResults()
    }
    
    if (
       row2x)
       { xWinResults()
    } else if (
       row2o)
       { oWinResults()
    }
 
    if (
       row3x)
       { xWinResults()
    } else if (
       row3o)
       { oWinResults()
    }
 
    if (
       column1x)
       { xWinResults()
    } else if (
       column1o)
       { oWinResults()
    }
 
    if (
       column2x)
       { xWinResults()
    } else if (
       column2o)
       { oWinResults()
    }
 
    if (
       column3x)
       { xWinResults()
    } else if (
       column3o)
       { oWinResults()
    }
 
    if (
       diagonal1x)
       { xWinResults()
    } else if (
       diagonal1o)
       { oWinResults()
    }
 
    if (
       diagonal2x)
       { xWinResults()
    } else if (
       diagonal2o)
       { oWinResults()
    }
 
    // TIE CONDITION // win on last move not coded in
 
    if (
      document.getElementById('0').innerText !== "" &&
      document.getElementById('1').innerText !== "" &&
      document.getElementById('2').innerText !== "" &&
      document.getElementById('3').innerText !== "" &&
      document.getElementById('4').innerText !== "" &&
      document.getElementById('5').innerText !== "" &&
      document.getElementById('6').innerText !== "" &&
      document.getElementById('7').innerText !== "" &&
      document.getElementById('8').innerText !== "") { 
             tieResults()
    }  
   }
    
    gameTiles.addEventListener('click', gameStart)


    function stopGame() {
      gameTiles.removeEventListener("click", gameStart)
    }



   

   // WIN CONDITION -if a complete row is filled with all X or O's , then X/O wins game           
   

   // clear button

   document.getElementById('reset').addEventListener('click', () => {
      location.reload()
   })
})