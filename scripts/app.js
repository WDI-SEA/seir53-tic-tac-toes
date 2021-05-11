//DOMContentLoad to use javescript
window.addEventListener('DOMContentLoaded', () => {

    //Document Variables (variables taken from index.html)
    let gameTiles = document.querySelectorAll(".gameTile")
    let reset = document.querySelector("#RESET")
    
    // Game Variables (variables used in the javascript for the game logic)
    let player1 = true;
    let player2 = false;
    let playerOne = "X";
    let playerTwo = "O";
    let winner = false;
    let gameDraw = false;
    let gameBoard = ["","","","","","","","",""];  
    let tile = "";


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
            // console.log(winCombo)
            
            //If player one is true, another if statement is run to search for the winning combonation.
            //If a winning combonation is found show winner, if not show next player turn
           if(player1){
                if(playerOne === winCombo[0] && playerOne === winCombo[1] && playerOne === winCombo[2]){
                    winner = true;
                    return document.getElementById('userMessage').innerHTML = '<h3>Player X WINS!!</h3>'
                } else {
                    document.getElementById('userMessage').innerHTML = "<h3>O's Turn!!</h3>"
                }

            //If player two is true, another if statement is run to search for the winning combonation.
            //If a winning combonation is found show winner, if not show next player turn    
           } else if(player2){
                if(playerTwo === winCombo[0] && playerTwo === winCombo[1] && playerTwo === winCombo[2]) {
                    winner = true;
                    return document.getElementById('userMessage').innerHTML = '<h3>Player O WINS!!</h3>'
                } else {
                    document.getElementById('userMessage').innerHTML = "<h3>X's Turn!!</h3>"
                }
           } else {
               winner = false;
            }

            //if the gameboard spaces are fill (!NOT "") and there is no winner show DRAW!!
            if (!gameBoard.includes("")){
                gameDraw = true;
                if (gameDraw) {
                    document.getElementById('userMessage').innerHTML = "DRAW!!"
                    // return;
                }
            }
        }
    }


    //Game functions: Going through EACH index.html gameTiles. 
    for (let i = 0; i < gameTiles.length; i++) {

        //Setting up tile as emtpy string or blank
        

        //Click function trigger by user click on gameTiles to do following:
        gameTiles[i].addEventListener("click", () => {
            console.log(winner)
            console.log(tile)
            console.log("+++")
            //If the tile is empty and there's no winner
            if(!gameTiles[i].innerText && winner === false){

                //If player1 is true; innerText X, then gameBoard also puts X in same tile
                //Then checks for a winner, then toggle player flags
                if(player1) {
                    gameTiles[i].innerText = "X";
                    tile = "X"
                    gameBoard[i] = tile;  
                    checkWinner();   
                    player1 = false;
                    player2 = true;   
                    console.log("P1 winner: " + winner);
                
                 //IF player1 is false 
                 //If player2 is true; innerText O, then gameBoard also puts 0 in same tile
                //Then checks for a winner, then toggle player flags
                   } else if(player2) {
                    gameTiles[i].innerText = "O";
                    tile = "O"
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
                console.log(gameTiles[i])
            }
        })

    }  
    
    //FIGURE OUT RESET BUTTON FOR BOARD WITHOUT REFRESHING PAGE!!!
    reset.addEventListener("click", function resetGameboard() {
        
        let gameTiles = document.getElementsByClassName("gameTile")
        //loop through to remove anything in gameTiles
        for (let i = 0; i < gameTiles.length; i++){
            gameTiles[i].classList = "gameTile"
            gameTiles[i].innerText = ""
        }
        
        gameBoard = ["","","","","","","","",""]
        player1 = true
        player2 = false 
        winner = false
        gameDraw = false
        tile = ""
        console.log(gameBoard)
        console.log(player1)
        console.log(player2)
        console.log(winner)
        console.log(gameDraw)
        console.log("---")
        //update userMessage 
        document.getElementById('userMessage').innerHTML = '<h3>Ready Player X</h3>'
    })
    console.log(gameBoard)
    console.log(player1)
    console.log(player2)
    console.log(winner)
    console.log(gameDraw)
    
})