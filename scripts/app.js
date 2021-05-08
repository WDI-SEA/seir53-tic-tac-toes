window.addEventListener("DOMContentLoaded", () => {
    
    let turnClick = 0 
    let gameTiles = document.querySelectorAll(".gameTile")
    
    for (let i = 0; i < gameTiles.length; i++) {
        gameTiles[i].addEventListener("click", (event) => {
            if (!event.target.classList.contains("clicked")) {
                turnClick++
                gameTiles[i].innerText = turnClick % 2 === 0 ? "O" : "X"
                event.target.classList.add("clicked") 
                console.log(event.target)

            }
        })

    }
})



//click toggle x and o board
//see what letter is of tile clicked
// /!\ Jorge style /!\ if (event.target.className != "gameTile clicked") {
// /!\ Jorge style /!\     event.target.innerText = event.target.innerText === "X" ? "O" : ""X"
// /!\ Jorge style /!\ }

//toggle between whichever is current (x/o)
// /!\ annaxample /!\ let tern = conditionalCheck ? true : false
// /!\ annaxample /!\ let exampleTern = westonLocation === "LA" ? "Crave" : "no coffy"       

// set innnerText of div to be new letter
// add class to cell for X or O once selected into a 
//   /!\ Jorge style /!\ --- event.target.className = "gameTile clicked" 

// different div that cant be clicked, alter the div class itself?

// check status of game after every newPlayStatus
// send blank squares to div when winstate detected

// if all 9 squares get clicked, activate tiestate

// reset button go through arrays set all back to gametile state

// check the terning to display a message at the top for which turn it is

// check for winstates via checking for 3 in a row, by means unknown to me
// const winStates = [
/*    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
]
/!\ copy paster /!\
    if (!playerTurn) {
for (let i = 0; i < winStates.length; i++) {
    let winningCombo = winStates[i];
    let match = 0;
    for (let j = 0; j < winningCombo.length; j++) {
        if (xPlayer.selects.includes(winningCombo[j])) {
            match++;
        }
        if (match === 3) {
            gameOver = true;
            gameMessage.innerText = "player X winz!"
            gameBoard.removeEventListener("click", cellClick);
            xPlayer.wins++;
            xScore.innerText = xPlayer.wins;
        }
    }
}
} else {
for (let i = 0; i < winStates.length; i++) {
    let winningCombo = winStates[i];
    let match = 0;
    for (let j = 0; j < winningCombo.length; j++) {
        if (oPlayer.selects.includes(winningCombo[j])) {
            match++;
        }
        if (match === 3) {
            gameOver = true;
            gameMessage.innerText = "player O winz!"
            gameBoard.removeEventListener("click", cellClick);
            oPlayer.wins++;
            oScore.innerText = oPlayer.wins;
        }
    }
}
}
/!\ copy paster /!\
/////for (let i = 0; i < winStates.length; i++) {
/////    winStates[i]
*/
