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
    })
    }
    const playerArray = [       
        ["one", "two", "three"],
        ["four", "five", "six"],
        ["seven", "eight", "nine"],
        ["one", "four", "seven"],
        ["two", "five", "eight"],
        ["three", "six", "nine"],
        ["three", "five", "seven"],
        ["one", "five", "nine"]
    ]
 
    console.log(playerArray.includes(["one", "two", "three"]));
    //let winnerBanner = document.getElementById("winnerCircle");
   // let checkIfPlayerWins = (playerArray, target) => target.every(t ); =>  

   //     function checkIfPlayerWins (playerArray) {
//         let (i = 0; i < playerArray.length; i++) { 
//     if (playerXMoves === playerArray[i] || playerOMoves === playerArray[i]) {
//         console.log("this player won!!");
//     }    let winnerBanner = document.getElementById("winnerCircle");
// }}
//}
// //  }    
//gameTiles.forEach(() => {
//addEventListener("click", (event) => {
//gameTiles.innerText[i]
// let currentStatus = event.target.innerText;
// let newPlayStatus = currentStatus === "X" ? "0" : "X"
// event.target.innerHTML = newPlayStatus
// CHECK FOR WIN

// write out all possible combinations for a tie
//detect Draw("Tied game""No winner") conditions 
    // capture gameboard elements
    // see if current gameboard element methods match either win or tie conditions
    // if true: return relevant message to message div

    // else if: allow for play

         // array of arrays and comapre compare player array vs win array
        //create and event listener for click" on div .append
    
        //detect winner - Stops game
        //detect winner - declares winner if one player gets 3 divs in a row


    const clear = document.getElementById("clear");
    clear.addEventListener("click", (event) => {
        for (let j=0; j < gameTiles.length; j++) {
        let tile = gameTiles[j].innerText;
        gameTiles[j].pull(event.target.id)
        event.target.innerText = " "
    }
})

    // DISPLAY MESSAGE
    //// add a blank div to gameboard
    //// if there is a winner, message the winner congratulations
    //// else if X has just been played display a message indicating next player is O
    //// else have next player be X

    })