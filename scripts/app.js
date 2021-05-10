const winStates = [[1,1,1,//1
                    0,0,0,
                    0,0,0],
                    [0,0,0,//2
                    1,1,1,
                    0,0,0],
                    [0,0,0,//3
                    0,0,0,
                    1,1,1],
                    [1,0,0,//4
                    1,0,0,
                    1,0,0],
                    [0,1,0,//5
                    0,1,0,
                    0,1,0],
                    [0,0,1,//6
                    0,0,1,
                    0,0,1],
                    [1,0,0,//7
                    0,1,0,
                    0,0,1],
                    [0,0,1,//8
                    0,1,0,
                    1,0,0]]

let gameState = [0,0,0,0,0,0,0,0,0]
let playerTurn = true
let gameOver = false
let winner = ""
let possWins = [[]]

window.addEventListener("DOMContentLoaded", () => {
    //initialize vars and get some objects
    let gameTiles = document.querySelectorAll(".game-tile")
    possWins = winStates.slice()


    for(let i = 0; i < gameTiles.length; i++) {
        gameTiles[i].addEventListener("click", () => {
            if(!gameOver){ //if game is over, do nothing
                if(!gameState[i]) { //if tile has been played, do nothing
                    //add x or o depending on whose turn it is
                    if(playerTurn){
                        gameState[i] = "x"
                        gameTiles[i].classList.add("player-one")
                    } else {
                        gameState[i] = "o"
                        gameTiles[i].classList.add("player-two")
                    }
                    //check if someone won
                    uglyBruteForceChecker(i)
                    //change turn
                    if(gameOver){
                        if(!possWins.length) {
                            winner = "Draw!"
                        }else {
                            winner = playerTurn ? "Player 1 wins!" : "Player 2 wins!"
                        }
                        document.querySelector("#user-message").innerText = winner
                    } else {
                        playerTurn = !playerTurn
                        //change turn display
                        if(playerTurn){
                            document.querySelector("#user-message").innerText = "Player 1's Turn"
                        } else {
                            document.querySelector("#user-message").innerText = "Player 2's Turn"
                        }
                    }
                    
                }

            }
                




        })
    }

    //reset button set everything back to 0
    document.querySelector("#reset").addEventListener("click", () => {
        for(let i = 0; i < gameTiles.length; i++) {
            gameTiles[i].classList.remove("player-one")
            gameTiles[i].classList.remove("player-two")
        }
        console.log("Resetting")
        gameOver = false
        playerTurn = true
        winner = ""
        gameState = [0,0,0,0,0,0,0,0,0]
        possWins = winStates.slice()
        document.querySelector("#user-message").innerText = "Player 1's Turn"
    })


    
})

//I know there's a better way don't do this
function uglyBruteForceChecker(move) {
    //check each remaining win condition
    console.log("START NEW CHECK HERE")
    let i = 0
    while(i < possWins.length) {
        console.log("Possible Wins Remaining: " + possWins.length)
        console.log("--Checking array: " + i)
        //check only check wins containing most recent move
        if(possWins[i][move]) {
            console.log("--Possible win found...")
            let j = 0
            let counter = 0
            while(j < 9) {
                if(possWins[i][j] && gameState[j]){
                    console.log("----checking tile in play...")
                    if(gameState[j] !== gameState[move]) {
                        possWins.splice(i,1)
                        console.log("------Removed a possible win at: " + i)
                        i--
                        break
                    } else {
                        counter++
                        console.log("------count " + counter)
                    }
                }
                j++
            }
            if(counter === 3) {
                gameOver = true
                break
            }
            i++
        } else {
            i++
        }
    }
    if(!possWins.length) {gameOver = true}
    return
}