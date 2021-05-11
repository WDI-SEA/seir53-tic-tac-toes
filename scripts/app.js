window.addEventListener('DOMContentLoaded', () => {

    let gameTiles = document.querySelectorAll('.gameTile')
    let user1 = '❌'
    let user2 = '⭕️'
    let gameOver = ''
    let currentTurn = user1
    let turnCounter = 0
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
    let winCombo = [
        ['gt1', 'gt2', 'gt3'],
        ['gt4', 'gt5', 'gt6'],
        ['gt7', 'gt8', 'gt9'],
        ['gt1', 'gt4', 'gt7'],
        ['gt2', 'gt5', 'gt8'],
        ['gt3', 'gt6', 'gt9'],
        ['gt1', 'gt5', 'gt9'],
        ['gt7', 'gt5', 'gt3']
    ]
    function checkWin() {
        for (let i = 0; i < winCombo.length; i++) {

            // if any of the win conditions have equivalent inner text
            if (document.getElementById(winCombo[i][0]).innerText === document.getElementById(winCombo[i][1]).innerText && document.getElementById(winCombo[i][1]).innerText === document.getElementById(winCombo[i][2]).innerText) {
                for (let y = 0; y < winCombo[i].length; y++){
                    
                    // if the inner text is not empty
                    if (document.getElementById(winCombo[i][y]).innerText !== '') {
                        userMessage.innerText = `${document.getElementById(winCombo[i][y]).innerText} wins!`
                        currentTurn = gameOver
                    }
                }
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

    // adds click functionality to reset button
    let resetButton = document.getElementById('reset')
    resetButton.addEventListener('click', () => {
        changeUser1Icon()
        changeUser2Icon()
        clearBoard()
        turnCounter = 0
    })
    
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
})