//DOMContentLoad to use javescript
window.addEventListener('DOMContentLoaded', () => {

    //Document Variables (variables taken from index.html)
    let gameTiles = document.querySelectorAll(".gameTile")

    
    // Game Variables (variables used in the javascript for the game logic)
    let player1 = true;
    let player2 = false;
    let playerOne = "X";
    let playerTwo = "O"
    let winner = false;
    let gameDraw = false;
    let gameBoard = ["","","","","","","","",""]


    //function to check for winning combos
    function checkWinner () {
        let winningCombos = [
            [gameBoard[0], gameBoard[1], gameBoard[2]],
            [gameBoard[3], gameBoard[4], gameBoard[5]],
            [gameBoard[6], gameBoard[7], gameBoard[8]],
            [gameBoard[0], gameBoard[3], gameBoard[6]],
            [gameBoard[1], gameBoard[4], gameBoard[7]],
            [gameBoard[2], gameBoard[5], gameBoard[8]],
            [gameBoard[0], gameBoard[4], gameBoard[8]],
            [gameBoard[2], gameBoard[4], gameBoard[6]],
        ];

        //Comparing an array of winning combonations on active gameboard
        for (const winCombo of winningCombos ){
            
            //If player one is true, another if statement is run to search for the winning combonation.
            //If a winning combonation is found show winner, if not show next player turn
           if(player1){
                if(playerOne === winCombo[0] && playerOne === winCombo[1] && playerOne === winCombo[2]){
                    winner = true;
                    return document.getElementById('userMessage').innerText = "Player X WINS!!"
                } else {
                    document.getElementById('userMessage').innerText = "O Turn!!"
                }

            //If player two is true, another if statement is run to search for the winning combonation.
            //If a winning combonation is found show winner, if not show next player turn    
           } else if(player2){
                if(playerTwo === winCombo[0] && playerTwo === winCombo[1] && playerTwo === winCombo[2]) {
                    winner = true;
                    return document.getElementById('userMessage').innerHTML = "Player O WINS!!"
                } else {
                    document.getElementById('userMessage').innerHTML = "X Turn!!"
                }
           } else {
               winner = false;
            }

            //if the gameboard spaces are fill (!NOT "") and there is no winner show DRAW!!
            if (!gameBoard.includes("")){
                gameDraw = true;
                if (gameDraw) {
                    document.getElementById('userMessage').innerHTML = "DRAW!!"
                    return;
                }
            }
        }
    }


    //Game functions: Going through EACH index.html gameTiles. 
    for (let i = 0; i < gameTiles.length; i++) {

        //Setting up tile as emtpy string or blank
        let tile = "";

        //Click function trigger by user click on gameTiles to do following:
        gameTiles[i].addEventListener("click", () => {

            //If the tile is empty and there's no winner
            if(tile === "" && winner === false){

                //If player1 is true; innerText X, then gameBoard also puts X in same tile
                //Then checks for a winner, then toggle player flags
                if(player1) {
                    tile = gameTiles[i].innerText = "X";
                    gameBoard[i] = tile;  
                    checkWinner();   
                    player1 = false;
                    player2 = true;   
                    console.log("P1 winner: " + winner);
                
                 //IF player1 is false 
                 //If player2 is true; innerText O, then gameBoard also puts 0 in same tile
                //Then checks for a winner, then toggle player flags
                   } else if(player2) {
                    tile = gameTiles[i].innerText = "O";
                    gameBoard[i] = tile; 
                    checkWinner(); 
                    player1 = true;
                    player2 = false;
                    console.log("P2 winner: " + winner);
                   } else {
                       console.log("false");
                   }  

              //IF winner is true or found both players flagged false.       
            } else if(winner){
                player1 = false;
                player2 = false;
                console.log("winner is found")

            //If tile is already selected
            } else{
                console.log('do nothing')
            }
        })
    }   
})