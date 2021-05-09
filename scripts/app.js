window.addEventListener("DOMContentLoaded", () => {
    // add event listener for reset button
    document.getElementById("reset").addEventListener("click", gameReset)

    // setup variables that will be needed globally
    let gameTiles = document.querySelectorAll(".gameTile")
    let nextMove = "X"
    let currentPlayer = document.querySelector("#nextPlayer")
    let roundSpan = document.querySelector("#rounds")
    let winningPlayer
    let roundNum = 1
    let boardArr = [["", "", ""], ["", "", ""], ["", "", ""]]

    // variables to track X and O's scores
    // only resets with page refresh
    let pXScore = 0
    let pOScore = 0
    
    gameStart()
    // loop through the tiles and add event listeners
    function gameStart() {
        for (let i = 0; i < gameTiles.length; i++) {
            gameTiles[i].addEventListener("click", (event) => {
                // see what current letter is of game tile and toggle between whichever letter is current vs x or o
                // dont allow players to change an already clicked button
                if (event.target.className != "gameTile clicked") {
                    // track and display rounds
                    roundNum++
                    roundSpan.innerText = roundNum
                    // set X or O on clicked div
                    event.target.innerText = nextMove
                    // check if player who just went won
                    winningPlayer = gameState(nextMove)
                    if (winningPlayer) {
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
                }
                // add class to cell that was clicked
                event.target.className = "gameTile clicked"
            })
        }
    }

    function gameState(lastPlay) {
        // setup 2D array
        let winCheck = []
        let tilesIter = 0
        // setup a 2d array of the board
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                boardArr[i][j] = gameTiles[tilesIter].innerText
                tilesIter += 1
            }
        }
        // check rows
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                winCheck.push(boardArr[i][j])
                if (j === 2) {
                    if (winCheck.every( x => x === lastPlay )) {
                        console.log(`${lastPlay} wins in a row`)
                        return lastPlay
                    }
                    winCheck = []
                }
            }
        }
        // check cols
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                winCheck.push(boardArr[j][i])
                if (j === 2) {
                    if (winCheck.every( x => x === lastPlay )) {
                        console.log(`${lastPlay} wins in a col`)
                        return lastPlay
                    }
                    winCheck = []
                }
            }
        }
        // check diag top left to bottom right
        for (let i = 0; i < 3; i++) {
            winCheck.push(boardArr[i][i])
            if (i === 2) {
                if (winCheck.every( x => x === lastPlay )) {
                    console.log(`${lastPlay} wins in a dia`)
                    return lastPlay
                }
                winCheck = []
            }
        }
        // check diag top right to bottom left
        for (let i = 0, j = 2; i < 3; i++, j--) {
            winCheck.push(boardArr[i][j])
            if (i === 2) {
                if (winCheck.every( x => x === lastPlay )) {
                    console.log(`${lastPlay} wins in a dia`)
                    return lastPlay
                }
                winCheck = []
            }
        }
    }

    function gameEnd(endMessage) {
        for (let i = 0; i < gameTiles.length; i++) {
            gameTiles[i].className = "gameTile clicked"
        }
        currentPlayer.innerText = endMessage
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

        currentPlayer.innerText = "It's X's turn."
        roundSpan.innerText = "1"

        // restart game
        gameStart()
    } 
})