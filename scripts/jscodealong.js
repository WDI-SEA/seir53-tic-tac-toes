




//DOM content loaded event listener
    //capture DOM elements from page to store as vars
window.addEventListener("DOMContentLoaded",() =>{

    // Create of declare all game logic vaiables and conditions
    let displayResults = document.getElementById("displayResults")
    let resetBtn = document.getElementById("reset")
    let gameboard = document.getElementById("gameboard")
    let displayTurn = document.getElementById("displayTurn")
    
    //create or declare all game logic variables and conditions
    let turnNum = 0
    let playerX = []
    let playerO = []

    let winCombo = [
        ["topL", "topM", "topR"],
        ["midL", "midM", "midR"],
        ["botL", "botM", "botR"],
        ["topL", "midM", "botR"],
        ["topR", "midM", "botL"],
        ["topR", "midR", "botR"],
        ["topM", "midM", "botM"],
        ["topL", "midL", "botL"]
    ]



    //FUNCTION: boxClick() --> add event listener on user click of game tile
    function boxClick(event){
        let tileCheck = event.target
        console.log(tileCheck)

        // if box already played alery user to find a new game tile to play
        if (tileCheck.classList.contains("playedX") || tileCheck.classList.contains("playedO")){
            displayTurn.innerText = "Tile already played. CLick again"

        }else{
            
    //Check for x or o turn and display message in display turn box acordingly
            if (turnNum %2 ===0){
                //logic for x's turn
                // add the playedX class to target div
                tickCheck.classList.add("playedX")

                //update innerText of rarget div to say X
                tileCheck.innerText = "X"

                //update the text for player's turn to be played next
                displayTurn.innerText = "Player O's turn"

                //update turnNumb by 1
                tunrNum++



            //push to array played tile #id 
            playerX.push(tileCheck.id)
            console.log(playerX)

            }else {
                //logic for O's turn
                tileCheck.classList.add("playedO")
                tileCheck.innerText = "O"
                displayTurn.innerText = "Player X's Turn"
                turnNum++
            }
    //check and see if there have been x9 turns but no winner; call tie


        }

    }

    

    
    //add event listener on user click of game tile
    gameboard.addEventListener('click', boxClick)



    
    //Fucntion: gameOver() --> once we have had more than four moves
    function endGame() {
        for (let i=0; i<winCombo.length; i++){
            console.log(winCombo[i])
            let winFoundX = 0
            let winFoundO = 0


            for (let y= 0; y<winCombo[i].length; y++){
                console.log(`Current id: ${winCombo[i][y]}`)
                if (playerX.includes(winCombo[i][y]))
                winFoundX++
                if(winFoundX === 3) {
                    console.log("Player X has won")
                }

                if (playerO.includes(winCombo[i][y])){
                    winFoundO === 3){
                        console.log('Player O has won')
                    }
            }
        }

    }
    





    //check and see if there is a winner on every turn
    //if player has won, run stopGame()
    //send message to displayResults div and displayTurn div
    
    //Function stopGame() -> doesnt allow for further game play once game won
    
    //function resetGameboard() -> add event listener to reset button on click
    // loops through gameboard; resets all variables
    
    
    
    
    
    
    
    
    
})
















