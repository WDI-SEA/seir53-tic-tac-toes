//EventListener to ensure DOM is loaded
window.addEventListener('DOMContentLoaded', () => {

    // Define variables and pull from DOM if needed
    let player1 = 'x'
    let player2 = 'circle'
    const winning_combos = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],  
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ]
    const gameTileElements = document.querySelectorAll(".gameTile")
    const winningMessageElement = document.getElementById('winning')
    const winningMessageText = document.querySelector('[data-winning-message-text]')
    const restart = document.getElementById('restart')
    let circleTurn


    // Call Start Game Function to set the board in a start game state
    startGame()

    // Click Event Listener for Restart Button
    restart.addEventListener('click', startGame)

    // Function to start game 
    function startGame() {
        circleTurn = false
        // Checks each cell and only allows one click per game
        gameTileElements.forEach (gameTile => {
            gameTile.classList.remove(player1)
            gameTile.classList.remove(player2)
            gameTile.removeEventListener('click', handleClick)
            gameTile.addEventListener('click', handleClick, {once: true})
        })
        setBoardHoverClass()
        winningMessageElement.classList.remove('show')
    }

    // Function for handling the click on each cell during a game 
    function handleClick(e) {

        // Define Variables to determine clicked tile and interact with it appropriately
        const gameTile = e.target
        const currentClass = circleTurn ? player2 : player1
        placeMark(gameTile, currentClass)

        // Function to check for Wins, passing in current class to determine proper winner
        if(checkWin(currentClass)) {
            endGame(false)
        }
        else if (isDraw()) {
            endGame(true)
        }
        else {
            swapTurns()
            setBoardHoverClass()
        }
    }


    // Function to end the game on Draw or Win and show proper message
    function endGame(draw) {
        if(draw) {
            winningMessageText.innerText = `Draw!`
        }
        else {
            winningMessageText.innerText = `${circleTurn ? "O's" : "X's"} Win!` 
        }
        winningMessageElement.classList.add('show')
    }

    // Function to execute if Game is draw, deconstruct gameTileElements because it needs to be an array to be able to call every on it
    function isDraw() {
        return [...gameTileElements].every(gameTile => {
            return gameTile.classList.contains(player1) || gameTile.classList.contains(player2)
        })
    }

    // Function to place x or o on board
    function placeMark(gameTile, currentClass) {
        gameTile.classList.add(currentClass)
    }

    // Function to swap turns between o and x
    function swapTurns() {
        circleTurn = !circleTurn
    }

    //Function to apply hover state during the game
    function setBoardHoverClass() {
        
        // Remove Player Classes
        container.classList.remove(player1)
        container.classList.remove(player2)

        // Logic to determine current turn to apply the proper hover state
        if (circleTurn) {
            container.classList.add(player2)
        }
        else {
            container.classList.add(player1)
        }
    }

    // Check for wins
    function checkWin(currentClass) {
        // Check for any winning combos over each array one at a time
        return winning_combos.some(combination => {
            // Checks the value of every index in an array 
            return combination.every (index => {
                // Checks that all indexes in the chosen array are the same class (current player) to determine winner
                return gameTileElements[index].classList.contains(currentClass)
            }
        )}
    )}

                // Display message of current players turn

                // Track players wins over time (with reset button)

                // Add simple AI for one player mode (with a toggle switch) computer picks random empty square
                // Include Short time delay

                // Create more difficult AI using mini-max algorithm
                // Create Toggle Switch for AI Difficulty Levels
})