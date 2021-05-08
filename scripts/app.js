window.addEventListener('DOMContentLoaded', () => {
    // on click toggle between xs and os on the gameboard
    let gameTiles = document.querySelectorAll('.gameTile')
    let user1 = 'O'
    let user2 = 'X'
    let gameOver = ''
    let currentTurn = user1

    let gt1 = document.getElementById('gt1')
    let gt2 = document.getElementById('gt2')
    let gt3 = document.getElementById('gt3')
    let gt4 = document.getElementById('gt4')
    let gt5 = document.getElementById('gt5')
    let gt6 = document.getElementById('gt6')
    let gt7 = document.getElementById('gt7')
    let gt8 = document.getElementById('gt8')
    let gt9 = document.getElementById('gt9')

    userMessage = document.getElementById('userMessage')

    function checkWin() {
         if (gt1.innerText === gt2.innerText && gt2.innerText === gt3.innerText) {
            if (gt1.innerText !== '') {
                userMessage.innerText = `${gt1.innerText}'s wins`
                currentTurn = gameOver
            }                
        } else if (gt4.innerText === gt5.innerText && gt5.innerText === gt6.innerText) {
            if (gt4.innerText !== '') {
                userMessage.innerText = `${gt4.innerText}'s wins`
                currentTurn = gameOver
            }
        } else if (gt7.innerText === gt8.innerText && gt8.innerText === gt9.innerText) {
            if (gt7.innerText !== '') {
                userMessage.innerText = `${gt7.innerText}'s wins`
                currentTurn = gameOver
            }
        } else if (gt1.innerText === gt4.innerText && gt4.innerText === gt7.innerText) {
            if (gt1.innerText !== '') {
                userMessage.innerText = `${gt1.innerText}'s wins`
                currentTurn = gameOver
            }
        } else if (gt2.innerText === gt5.innerText && gt5.innerText === gt8.innerText) {
            if (gt2.innerText !== '') {
                userMessage.innerText = `${gt2.innerText}'s wins`
                currentTurn = gameOver
            }
        } else if (gt3.innerText === gt6.innerText && gt6.innerText === gt9.innerText) {
            if (gt3.innerText !== '') {
                userMessage.innerText = `${gt3.innerText}'s wins`
                currentTurn = gameOver
            }
        } else if (gt1.innerText === gt5.innerText && gt5.innerText === gt9.innerText) {
            if (gt1.innerText !== '') {
                userMessage.innerText = `${gt1.innerText}'s wins`
                currentTurn = gameOver
            }
        } else if (gt7.innerText === gt5.innerText && gt5.innerText === gt3.innerText) {
            if (gt7.innerText !== '') {
                userMessage.innerText = `${gt7.innerText}'s wins`
                currentTurn = gameOver
            }
        }
    }
// check each gt if empty don't do anything. if has content, check to next
    function checkTie () {
        if (gt1.innerText === '') {
        } else if (gt2.innerText === '') {
        //do nothing
        } else if (gt3.innerText === '') {
        //do nothing
        } else if (gt4.innerText === '') {
        //do nothing
        } else if (gt5.innerText === '') {
        //do nothing
        } else if (gt6.innerText === '') {
        //do nothing
        } else if (gt7.innerText === '') {
        //do nothing
        } else if (gt8.innerText === '') {
        //do nothing
        } else if (gt9.innerText === '') {
        //do nothing
        } else {
            userMessage.innerText = `It's a tie`
            currentTurn = gameOver
        }
    }

    // change current turn from user 1 to user 2
    function changeCurrentTurn () {
        if (currentTurn === user1) {
            currentTurn = user2
        } else if (currentTurn === user2){
            currentTurn = user1
        }
        }

            for (let i = 0; i < gameTiles.length; i++) {
                gameTiles[i].addEventListener('click', () => {
                    // if tile is empty, make selection.
                    // else do nothing
                    if (gameTiles[i].innerText === "") {

                        // display who's turn it is
                        userMessage.innerText = `${currentTurn}'s are up next.`
                        changeCurrentTurn()

                        

            // // see what current letter is of game tile that was clicked
            // let tile = gameTiles[i].innerText

            //     //toggle between choices
                
            // // toggle between whichever letter is current vs x or o
            // let newPlayStatus = tile === 'X' ? 'O' : 'X'

            // // set innerText of div to be new toggled letter
                    gameTiles[i].innerText = currentTurn
                    checkTie()
                    checkWin()
                    }
        })
    }
    // clears board
    function clearBoard() {
        for (let i = 0; i < gameTiles.length; i++) {
            gameTiles[i].innerText = ''
            currentTurn = user1
            userMessage.innerText = `X's start first`
        }
    }
    // adds click functionality to reset button
    let resetButton = document.getElementById('reset')
    resetButton.addEventListener('click', clearBoard)



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