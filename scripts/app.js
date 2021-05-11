window.addEventListener("DOMContentLoaded", () => {

    let displayResults = document.getElementById("displayResults")
    let startOver = document.getElementById("Reset")
    let gameBoard = document.getElementById("gameBoard")
    let displayTurn = document.getElementById("displayTurn")

    //initial turn message
    displayTurn.innerText = "Player, it's your turn!"

    let player = [];  //odds  or playerX = []
    let computer = [];   //evens  or playerO = []
    let whichTurn = 0 //turnNum = 0

    let winningCombos = [
        ["gameTile0","gameTile1","gameTile2"], 
        ["gameTile3","gameTile4","gameTile5"], 
        ["gameTile6","gameTile7","gameTile8"], 
        ["gameTile0","gameTile3","gameTile6"], 
        ["gameTile1","gameTile4","gameTile7"], 
        ["gameTile2","gameTile5","gameTile8"], 
        ["gameTile0","gameTile4","gameTile8"], 
        ["gameTile2","gameTile4","gameTile6"]
    ]

    //start game
    function boxClick(event) {
        let = tileCheck = event.target

    //pick a new tile if the selected one is already played
    if (tileCheck.classList.contains("playedX") || tileCheck.classList.contains("playedO")) {
        displayTurn.innerText = "That tile has already been selected.  Please choose another."
    } else {
        //this is for X/player's turn
        if (whichTurn % 2 === 0) { 
           
            //adds playedX class to target div
            tileCheck.classList.add("playedX")

            //updates text to display X
            tileCheck.innerText = "X"

            //tells next player to go
            displayTurn.innerText = "Computer's turn!"

            //updates number of turns
            whichTurn++

            //push to playerX array played tile id
            player.push(tileCheck.id)
            console.log(whichTurn) 

        } else {
            //same stuff for computer's turn
            tileCheck.classList.add("playedO")
            tileCheck.innerText = "O"
            displayTurn.innerText = "Player, it's your turn!"
            whichTurn++

            console.log(whichTurn) 
            

            //push
            computer.push(tileCheck.id)
        }

        if (whichTurn >=4) {
            gameOver()
        }

        if (whichTurn === 9) {
            gameOver()

        if (displayTurn.innerText !== "") {    
            displayResults.innerText = "Cat's Game!"
            displayTurn.innerText = "Try again."
            stopGame()
        }
        }
    } 
} 

    //add event listener for player click
    gameBoard.addEventListener("click", boxClick)

    function gameOver() {
        for (let i = 0; i < winningCombos.length; i++) {
            let winFoundX = 0
            let winFoundO = 0
            for (let y = 0; y < winningCombos[i].length; y++) {
                if (player.includes(winningCombos[i][y])){
                    winFoundX++
                    if (winFoundX === 3) {
                        displayResults.innerText = "Player wins!"
                        displayTurn.innerText = ""
                        stopGame()
                    }
                }

                if (computer.includes(winningCombos[i][y])) {
                    winFoundO++
                    if (winFoundO === 3) {
                        displayResults.innerText = "Computer wins!  Better luck next time!"
                        displayTurn.innerText = ""
                        stopGame()
                    }
                }
            }
        }
    }
    function stopGame() {
        gameBoard.removeEventListener("click", boxClick)
    }

    startOver.addEventListener("click", function resetGameboard() {
        let gameTile = document.getElementsByClassName("gameTile")
        
        for (let i = 0; i < gameTile.length; i++) {
            gameTile[i].classList = "gameTile"
            gameTile[i].innerText = ""
        }

    displayTurn.innerText = "Player, it's your turn!"    
    displayResults.innerText = ""

    player = [];  //odds  or playerX = []
    computer = [];   //evens  or playerO = []
    whichTurn = 0 //turnNum = 0

    gameBoard.addEventListener("click", boxClick)

    })

})   

    // let gameStart = true;
   // Math.floor(Math.random () *9);
    
    // let gameChoices = ["", "", "", "", "", "", "", "", ""]

    //on click toggle between x's and o's on gameboard
    // let gameTiles = document.querySelectorAll(".gameTile")

    // let gameTile0 = document.getElementById("0");
    // let gameTile1 = document.getElementById("1");
    // let gameTile2 = document.getElementById("2");
    // let gameTile3 = document.getElementById("3");
    // let gameTile4 = document.getElementById("4");
    // let gameTile5 = document.getElementById("5");
    // let gameTile6 = document.getElementById("6");
    // let gameTile7 = document.getElementById("7");
    // let gameTile8 = document.getElementById("8");
    
    // find a way to define playerWinningCombo/computerWinningCombo
    // if (playerWinningCombo === true) {
    //     console.log("Player wins!")
    // }else if(computerWinningCombo === true) {
    //     console.log("Computer wins!  Better luck next time!")
    // }else{
    //     console.log("Cat's Game!")
    // }
     // see what current letter of game tile that was clicked is

    // for (let i = 0; i < gameTiles.length; i++) {
    //     gameTiles[i].addEventListener("click", () => {
    //         playerTurns++ 

        //  event.target.classList.add("noClick")

        // gameTiles[i].addEventListener("click,", handleClick, {
        //     once:true
        // })    

            // set innerText of div to be new toggled letter
            // let tile = gameTiles[i].innerText
            // console.log(event.target.innerText)

    // toggle between whichever letter is current vs x or o (move to opposite)
    // let tern = conditionalCheck ? true : false
    //         let newPlayStatus = playerTurns % 2 === 0 ? "X" : "O"
    //         gameTiles[i].innerText = newPlayStatus 

