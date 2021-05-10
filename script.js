window.addEventListener('DOMContentLoaded', () => {
    
    
    // global variables
    let xWins = true
    let oWins = true
    let tie = true
  
   

    function xWinResults () {
      document.querySelector('.results').innerText = 'X is the Winner!'
    }

    function oWinResults () {
      document.querySelector('.results').innerText = 'O is the Winner!'
    }

    function tieResults () {
      document.querySelector('.results').innerText = 'Tie Game!'
    }

    //on click toggle between x and o on the gameboard
    let gameTiles = document.querySelectorAll('.gameTile')





    for (let i = 0; i < gameTiles.length; i++) {
        gameTiles[i].addEventListener('click', (e) => {
            //see what current letter is of game tile that was clicked
            let tile = gameTiles[i].innerText
            // toggle between which letter is current cs x or o
            let newPlayStatus = tile == 'X' ? 'O' : 'X'
            // set innerText of div to be new toggled letter
            gameTiles[i].innerText = newPlayStatus
            console.log(newPlayStatus)

            //local variables
            let gameTile0 = document.getElementById('0').innerText
            let gameTile1 = document.getElementById('1').innerText
            let gameTile2 = document.getElementById('2').innerText
            let gameTile3 = document.getElementById('3').innerText
            let gameTile4 = document.getElementById('4').innerText
            let gameTile5 = document.getElementById('5').innerText
            let gameTile6 = document.getElementById('6').innerText
            let gameTile7 = document.getElementById('7').innerText
            let gameTile8 = document.getElementById('8').innerText
        
            let allGameTiles = document.getElementsByClassName('gameTile').innerText 


            // specify ID of title and records ID of each tile clicked
            
            let tileID = gameTiles[i].id
            let gameInput = []
            gameInput.push(tileID)
            
        

         
            // WIN CONDITION -if a complete row is filled with all X or O's , then X/O wins game           
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

            // TIE CONDITION

            if (
                  gameTile0 !== "" &&
                  gameTile1 !== "" &&
                  gameTile2 !== "" &&
                  gameTile3 !== "" &&
                  gameTile4 !== "" &&
                  gameTile5 !== "" &&
                  gameTile6 !== "" &&
                  gameTile7 !== "" &&
                  gameTile8 !== ""
            ) { tieResults()
            } 

            //clear button

            document.getElementById('reset').addEventListener('click', () => {
               location.reload()
            })

            

         

        
    
            //winning conditions
            // const winningConditions = [
            //     [0, 1, 2],
            //     [3, 4, 5],
            //     [6, 7, 8],
            //     [0, 3, 6],
            //     [1, 4, 7],
            //     [2, 5, 8],
            //     [0, 4, 8],
            //     [2, 4, 6] ]

        })
    }

}) 