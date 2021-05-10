window.addEventListener("DOMContentLoaded", () => {
    let gameTiles = document.querySelectorAll(".gameTile")
    let resetPress = document.querySelector("#reset")
    let turn = document.querySelector("#player")
    let songQuote = document.querySelector("#quote")
    turn.innerText = "Robert Smith moves first"
   

    let currentPlayerIsX = true

    let winningCombinations = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,5,9],
        [3,5,7],
        [1,4,7],
        [2,5,8],
        [3,6,9]
    ]
    
    let playerXPlays = []
    let playerOPlays = []

    let gameOver = false

    setupGame()

    // add reset button that will clear the contents of the board
    resetPress.addEventListener("click", setupGame)

    function click(event){
        let id = event.target.id
        let i = parseInt(id)-1

        if (gameOver){
            return
        }

        // toggle between X and O
        if (currentPlayerIsX){
            //stop allowing cells to be clicked when game over
            turn.innerText = "Peter Murphy's turn"
            
            gameTiles[i].classList.add("robert-smith")
            playerXPlays.push(parseInt(event.target.id))
            detectWinner()

            currentPlayerIsX = false
            gameTiles[i].removeEventListener("click", click)
 
        } else {         
            //stop allowing cells to be clicked when game over
            turn.innerText = "Robert Smith's turn"
            gameTiles[i].classList.add("peter-murphy")
            playerOPlays.push(parseInt(event.target.id))
            detectWinner()

            currentPlayerIsX = true
            gameTiles[i].removeEventListener("click", click) 
        }
    }

    function setupGame(){
        gameOver = false
        playerXPlays = []
        playerOPlays = []
        turn.innerText = "" 
        songQuote.innerText = ""
        songQuote.classList.add("hidden")
        for (let i=0; i<gameTiles.length; i++){
            gameTiles[i].classList.remove("robert-smith")
            gameTiles[i].classList.remove("peter-murphy")
            gameTiles[i].addEventListener("click", click)
        }
    }

    

    // detecting winner
    function detectWinner(){
        if (playerXPlays.length < 3 && playerOPlays.length < 3) {
            
            // no player could win, skip winner checks
            return
        }

        for (let i=0; i<winningCombinations.length; i++) {
            
            // console.log("checking combo " + i)
            let winningCombination = winningCombinations[i]
            let playerXPlaysTracker = 0
            let playerOPlaysTracker = 0
            for (let a=0; a<3; a++){
                
                // get current number from winning combination
                let currentNumber = winningCombination[a]

                // check to see if player a has the number
                // if player has number increment tracker for that player
                if (playerXPlays.includes(currentNumber)) {
                    playerXPlaysTracker++
                }
                
                // check to see if player b has the number
                // if player has number increment tracker for that player
                if (playerOPlays.includes(currentNumber)) {
                    playerOPlaysTracker++
                }
            }

            // if any players have a count of 3 in their tracker, declare winner 
            if (playerXPlaysTracker == 3) {
                turn.innerText = "Robert Wins!"
                songQuote.classList.remove("hidden")
                songQuote.innerText = "How the end always is... 🥀"
                gameIsOver()
            } else if (playerOPlaysTracker == 3){
                turn.innerText = "Peter Wins!"
                songQuote.classList.remove("hidden")
                songQuote.innerText = "Undead Undead Undead 💀"
                gameIsOver()
            } 

            // check for tie
            if (playerXPlays.length + playerOPlays.length == 9 && songQuote.innerText === ""){
                turn.innerText = "It's a Tie!"
            }
        }

    }
 
    function gameIsOver(){
        gameOver = true
    }
})