window.addEventListener("DOMContentLoaded", () => {
    // add event listener for reset button
    document.getElementById("reset").addEventListener("click", gameReset)

    // setup variables that will be needed globally
    let gameTiles = document.querySelectorAll(".gameTile")
    let nextMove = "X"
    let currentPlayer = document.querySelector("#nextPlayer")
    let roundSpan = document.querySelector("#rounds")
    let winningPlayer = null
    let roundNum = 1
    let boardArr = [["", "", ""], ["", "", ""], ["", "", ""]]
    

    // variables to track X and O's scores
    // only resets with page refresh
    let pXScore = 0
    let pOScore = 0
    let aiDiff = "easyAI"
    
    // add event listener to radio buttons for AI difficulty
    for (let each of document.getElementsByName("aiDifficulty")) {
        each.addEventListener("click", () => {
            aiDiff = each.value
        })
    }
    
    
    gameStart()

    function gameStart() {
        // loop through the tiles and add event listeners
        for (let i = 0; i < gameTiles.length; i++) {
            gameTiles[i].addEventListener("click", (event) => {
                // dont allow players to change an already clicked button
                if (event.target.className != "gameTile clicked") {
                    // add class to cell that was clicked
                    event.target.className = "gameTile clicked"

                    // set X or O on clicked div
                    event.target.innerText = nextMove

                    // setup a 2d array of the board
                    let tilesIter = 0
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 3; j++) {
                            boardArr[i][j] = gameTiles[tilesIter].innerText
                            tilesIter += 1
                        }
                    }

                    // track and display rounds
                    roundNum++
                    roundSpan.innerText = roundNum
                    
                    // check if player who just went won
                    winningPlayer = checkWinner()
                    if (winningPlayer === "X" || winningPlayer === "O") {
                        // found winner
                        gameEnd(`PLAYER ${winningPlayer} WINS!`)
                        // update player score
                        winningPlayer === "X" ? pXScore++ : pOScore++
                        document.getElementById(`playerXScore`).innerText = pXScore
                        document.getElementById(`playerOScore`).innerText = pOScore
                        return
                    } else if (roundNum === 10){
                        // no winner
                        gameEnd("DRAW")
                        document.getElementById(`playerXScore`).innerText = pXScore
                        document.getElementById(`playerOScore`).innerText = pOScore
                        return
                    }

                    // change nextMove to X or O depending on what was just set
                    nextMove = nextMove === "X" ? "O" : "X" 
                    // update the span that states who's turn it is
                    currentPlayer.innerText = `It's ${nextMove}'s turn`

                    // TEST - change stopPlayer css display to flex when CPU turn
                    if (nextMove === "O" && aiDiff != "noAI") {
                        document.getElementById("stopPlayer").style.display = "flex"
                        window.setTimeout(cpuPlayer, Math.ceil(Math.random() * 1500))
                    } else {
                        document.getElementById("stopPlayer").style.display = "none"
                    }
                    // if O's turn, have CPU take their turn at random interval of 1 - 1.5 seconds
                    // nextMove === "O" ? window.setTimeout(cpuPlayer, Math.ceil(Math.random() * 1500)) : console.log("Not CPU's Turn")
                }
            })
        }
    }

    // check if the 3 positions passed are the same value AND not blank values
    function matching(val0, val1, val2) {
        return val0 == val1 && val1 == val2 && val0 != '';
    }
    
    // called to check if there is a winner, tie, or neither
    function checkWinner() {
        let winner = null
        
        // check horizontal for winner
        for (let i = 0; i < 3; i++) {
            if (matching(boardArr[i][0], boardArr[i][1], boardArr[i][2])) {
            winner = boardArr[i][0]
            }
        }
        
        // check vertical for winner
        for (let i = 0; i < 3; i++) {
            if (matching(boardArr[0][i], boardArr[1][i], boardArr[2][i])) {
            winner = boardArr[0][i]
            }
        }
        
        // check diagonal for winner
        if (matching(boardArr[0][0], boardArr[1][1], boardArr[2][2])) {
            winner = boardArr[0][0]
        }
        if (matching(boardArr[2][0], boardArr[1][1], boardArr[0][2])) {
            winner = boardArr[2][0]
        }
        
        let openSpots = 0
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
            if (boardArr[i][j] == '') {
                openSpots++
            }
            }
        }
        
        if (winner == null && openSpots == 0) {
            return 'tie'
        } else {
            return winner
        }
    }

    function gameEnd(endMessage) {
        // when game ends have all tiles show as clicked so they are no longer clickable by player
        for (let i = 0; i < gameTiles.length; i++) {
            gameTiles[i].className = "gameTile clicked"
        }
        // display winner text
        currentPlayer.innerText = endMessage

        // remove hidden div
        document.getElementById("stopPlayer").style.display = "none"
    }

    function gameReset() {
        // reset starting variables
        gameTiles = document.querySelectorAll(".gameTile")
        nextMove = "X"
        currentPlayer = document.querySelector("#nextPlayer")
        roundSpan = document.querySelector("#rounds")
        winningPlayer
        roundNum = 1
        boardArr = [["", "", ""], ["", "", ""], ["", "", ""]]
        
        // blank out played squares and reset div classes
        for (let i = 0; i < gameTiles.length; i++) {
            gameTiles[i].removeEventListener
            gameTiles[i].className = "gameTile"
            gameTiles[i].innerText = ""
        }

        // reset messages under the board
        currentPlayer.innerText = "It's X's turn."
        roundSpan.innerText = roundNum

        // restart game
        gameStart()
    } 

    function cpuPlayer() {
        if (aiDiff === "easyAI") {
            // basic AI that picks a random spot on the board
            let randNum = Math.floor(Math.random() * 9)
            while (gameTiles[randNum].innerText != "") {
                randNum = Math.floor(Math.random() * 9)
            }
            // simulate click on random tile that is open
            gameTiles[randNum].click()
        } else if (aiDiff === "hardAI") {
            // since cpu is maximizing player set bestScore to -∞
            let bestScore = -Infinity
            let move
            
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    // check if spot is available
                    if (boardArr[i][j] == "") {
                        // if available set to O, run the minimax algo, blank the spot on the board
                        boardArr[i][j] = "O"
                        let score = minimax(boardArr, 0, false)
                        boardArr[i][j] = ""
                        if (score > bestScore) {
                            bestScore = score
                            move = { i, j }
                        }
                    }
                }
            }
            // this is where the AI makes it's move
            gameTiles[ ((move.i * 3) + move.j) ].click()
        }
    }

    // used to determine if the move will result in a better score for X, O, or if it will be a tie
    let scores = {
        X: -1,
        O: 1,
        tie: 0
    }

    function minimax(board, depth, isMaximizing) {
        let result = checkWinner()
        if (result !== null) {
            return scores[result]
        }
      
        if (isMaximizing) {
          let bestScore = -Infinity
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              // Is the spot available?
              if (board[i][j] == '') {
                board[i][j] = "O"
                let score = minimax(board, depth + 1, false)
                board[i][j] = ''
                bestScore = Math.max(score, bestScore)
              }
            }
          }
          return bestScore
        } else {
          let bestScore = Infinity
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              // Is the spot available?
              if (board[i][j] == '') {
                board[i][j] = "X"
                let score = minimax(board, depth + 1, true)
                board[i][j] = ''
                bestScore = Math.min(score, bestScore)
              }
            }
          }
          return bestScore
        }
      }

})