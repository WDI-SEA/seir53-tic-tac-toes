window.addEventListener("DOMContentLoaded", () => {
    let playerXMoves = [];
    let playerOMoves = [];
    let totalMoves = 0;
    let gameTiles = document.querySelectorAll(".gameTile")

 for(let i = 0; i < gameTiles.length; i++) {
        gameTiles[i].addEventListener("click", (event) => {
//         //see what current letter is
        //totalMoves++;
        // let tile = gameTiles[i].innerText;
        // let tile = event.target.innerText;
        //let newPlayStatus = tile === "X" ? "O" : "X" 
        //let newPlayStatus = tile === "X" //true or false
        //event.target.innerText = totalMoves % 2 === 0 ? "X" : "O" //alternates X and Ods
        
        // if (event.target.className != "game tile clicked") {
        //     event.target.innerText = nextMove

        // }
        
        //event.target.className += " clicked";
        const userMessage = document.getElementById("userMessage")
        if (!event.target.classList.contains("clicked")) {
            event.target.className += " clicked";
            totalMoves++;
            event.target.innerText = totalMoves % 2 === 0 ? "X" : "O"
            if (totalMoves % 2 === 0) {
                event.target.innerText = "X";
                playerXMoves.push(event.target.id)
                console.log(playerXMoves)
                userMessage.innerText = "Player 1 Turn";
            } else {
                event.target.innerText = "O";
                playerOMoves.push(event.target.id)
                console.log(playerOMoves)
                userMessage.innerText = "Player 2 Turn"
            }
        }
        })}

// //  }    
//gameTiles.forEach(() => {
//addEventListener("click", (event) => {
//gameTiles.innerText[i]
//UPDATE:
// toggle every other click to be X or O
//})
// once innerHTML is set disable further click events from happening on tile
//// if clicked:
// add a class that includes relevant styling for player X vs player O
// let currentStatus = event.target.innerText;
// let newPlayStatus = currentStatus === "X" ? "0" : "X"
// event.target.innerHTML = newPlayStatus
// CHECK FOR WIN
    //one && three && five // write out all possible combinations for a win
    // write out all possible combinations for a tie 
    // capture gameboard elements
    // see if current gameboard element methods match either win or tie conditions
    // if true: return relevant message to message div
    // disable clicks on gameboard
    // re-set game board
    // else if: allow for play
// const winner = [
//     ["one", "two", "three"],
//     ["four", "five", "six"],
//     ["seven", "eight", "nine"],
//     ["one", "four", "seven"],
//     ["two", "five", "eight"],
//     ["three", "six", "nine"],
//     [],
//     []
// ]
         // array of arrays and comapre compare player array vs win array
        //create and event listener for click" on div .append
        
        //append should not respond to second click on div

        //once player "wins", remaining empty cells should not accept new value
        //detect Draw("Tied game""No winner") conditions
        //detect winner - Stops game
        //detect winner - declares winner if one player gets 3 divs in a row
        
        //display message that indicates whos turn it is "X turn""O turn"
        //let playerTurnDiv = document.querySelector("#userMessage")
        //let player
        //playerTurnDiv.appendChild()

// RESET BUTTON
// const clear = document.getElementById("clear");
// clear.addEventListener("click", () => {
//     for (let j=0; j < gameTiles.length; j++) {
//         let tile = gameTiles[j].innerText;
//         gameTiles[j]
//     }
// })
    //// capture reset button
    /// if reset button is clicked reset game board
    //document.querySelector("#clear").addEventListener('click', () => {
    // gameTiles.value = " "
    //   })

    // DISPLAY MESSAGE
    //// add a blank div to gameboard
    //// if there is a winner, message the winner congratulations
    //// else if X has just been played display a message indicating next player is O
    //// else have next player be X

    })