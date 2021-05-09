window.addEventListener('DOMContentLoaded', () => {

    let gameTiles = document.querySelectorAll('.gameTile')
    let user1 = '❌'
    let user2 = '⭕️'
    let gameOver = ''
    let currentTurn = user1
    let turnCounter = 0
    let gt1 = document.getElementById('gt1')
    let gt2 = document.getElementById('gt2')
    let gt3 = document.getElementById('gt3')
    let gt4 = document.getElementById('gt4')
    let gt5 = document.getElementById('gt5')
    let gt6 = document.getElementById('gt6')
    let gt7 = document.getElementById('gt7')
    let gt8 = document.getElementById('gt8')
    let gt9 = document.getElementById('gt9')
    let userMessage = document.getElementById('userMessage')

    // for each game tile add click event listener
    for (let i = 0; i < gameTiles.length; i++) {
        gameTiles[i].addEventListener('click', () => {
        // if tile is empty, make selection.
        // else do nothing
            if (gameTiles[i].innerText === "") {

                // set text of clicked tile to be user icon
                gameTiles[i].innerText = currentTurn
                changeCurrentTurn()  
                userMessage.innerText = `${currentTurn} is next`
                // check for tie
                if (turnCounter === 9) {
                    userMessage.innerText = `It's a tie 😑`
                    currentTurn = gameOver
                }
                checkWin()
            }
        })
    }

    // check for win
    // if any of the 8 win conditions are met
    // declare winner and end game
    function checkWin() {
         if (gt1.innerText === gt2.innerText && gt2.innerText === gt3.innerText) {
            if (gt1.innerText !== '') {
                userMessage.innerText = `${gt1.innerText} wins!`
                currentTurn = gameOver
            }                
        } else if (gt4.innerText === gt5.innerText && gt5.innerText === gt6.innerText) {
            if (gt4.innerText !== '') {
                userMessage.innerText = `${gt4.innerText} wins!`
                currentTurn = gameOver
            }
        } else if (gt7.innerText === gt8.innerText && gt8.innerText === gt9.innerText) {
            if (gt7.innerText !== '') {
                userMessage.innerText = `${gt7.innerText} wins!`
                currentTurn = gameOver
            }
        } else if (gt1.innerText === gt4.innerText && gt4.innerText === gt7.innerText) {
            if (gt1.innerText !== '') {
                userMessage.innerText = `${gt1.innerText} wins!`
                currentTurn = gameOver
            }
        } else if (gt2.innerText === gt5.innerText && gt5.innerText === gt8.innerText) {
            if (gt2.innerText !== '') {
                userMessage.innerText = `${gt2.innerText} wins!`
                currentTurn = gameOver
            }
        } else if (gt3.innerText === gt6.innerText && gt6.innerText === gt9.innerText) {
            if (gt3.innerText !== '') {
                userMessage.innerText = `${gt3.innerText} wins!`
                currentTurn = gameOver
            }
        } else if (gt1.innerText === gt5.innerText && gt5.innerText === gt9.innerText) {
            if (gt1.innerText !== '') {
                userMessage.innerText = `${gt1.innerText} wins!`
                currentTurn = gameOver
            }
        } else if (gt7.innerText === gt5.innerText && gt5.innerText === gt3.innerText) {
            if (gt7.innerText !== '') {
                userMessage.innerText = `${gt7.innerText} wins!`
                currentTurn = gameOver
            }
        }
    }

    // change current turn from user 1 to user 2 and add 1 to the turn counter
    function changeCurrentTurn () {
        if (currentTurn === user1) {
            currentTurn = user2;
            turnCounter++;
        } else if (currentTurn === user2){
            currentTurn = user1;
            turnCounter++;
        }
    }

    // clears board
    function clearBoard() {
        for (let i = 0; i < gameTiles.length; i++) {
            gameTiles[i].innerText = ''
        }
        currentTurn = user1
        userMessage.innerText = `${currentTurn} starts first`
    }

    // updates player 1 icon
    function changeUser1Icon() {
        user1 = document.querySelector('input[name="user1Icon"]:checked').value
    }
    
    // updates player 2 icon
    function changeUser2Icon() {
        user2 = document.querySelector('input[name="user2Icon"]:checked').value
    }

    // adds click functionality to reset button
    let resetButton = document.getElementById('reset')
    resetButton.addEventListener('click', () => {
        changeUser1Icon()
        changeUser2Icon()
        clearBoard()
        turnCounter = 0
    })
})

// create two users
// alternating between users
// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.