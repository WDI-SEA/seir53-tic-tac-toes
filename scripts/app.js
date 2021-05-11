window.addEventListener("DOMContentLoaded", () => {
    let turnTotal = 0 
    let gameboard = document.getElementById("container")
    let gameTiles = document.querySelectorAll(".gameTile")
    let butOn = document.querySelector("#reSwitch")
    let alertWindow = document.querySelector(".alerty")
    let xPlayer = []
    let oPlayer = []
    const winLines = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"]
    ]
    
    gameboard.addEventListener("click", gamePlay)
    
    function gamePlay(event) {
        let tileCheck = event.target
        
        if (tileCheck.classList.contains("playedX") || tileCheck.classList.contains("playedO")) {
            alertWindow.innerText = "Only one fruit per square!"
        } else {
            if (turnTotal % 2 === 0) {
                tileCheck.classList.add("playedX")
                tileCheck.innerText = "🍋"
                displayTurn.innerText = "Melon, make a move!"
                turnTotal++
                xPlayer.push(tileCheck.id)
            } else {
                tileCheck.classList.add("playedO")
                tileCheck.innerText = "🍈"
                alertWindow.innerText = "Line some Lemons!"
                turnTotal++
                oPlayer.push(tileCheck.id)
            }
            if (turnNum >= 4) {
                gameOver()
            }
            
            if (turnNum === 9) {
                gameOver()
                
                if ((winFoundO !== 3) || (winFoundX !== 3)) {
                    alertWindow.innerText = "Too many fruits! Try again?"
                    stopGame()
                }
            }
        }
    }

    function gameOver() {
        for (let i = o; i < winLines.length; i++) {
        let winFoundX = 0
        let winFoundO = 0
            
            for (let j = o; j < winLines[i].length; j++) {
                if (xPlayer.includes(winLines[i][j])) {
                    winFoundX++
                    if (winFoundX === 3) {
                        alertWindow.innerText = "Lemons successfully lined!"
                        stopGame()
                    }
                }

                if (oPlayer.includes(winCombo[i][j])) {
                    winFoundO++
                    if (winFoundO === 3) {
                        alertWindow.innerText = "Melons successfully Margined!"
                        stopGame()
                    }        
                }   
            }
        }
    }
    function stopGame() {
        gameboard.removeEventListener("click", gamePlay)
    }


    butOn.addEventListener("click", () =>{
        for (let i = 0; i < gameTiles.length; i++) {
        gameTiles[i].classList ="gameTile"
        gameTiles[i].innerText = ""
        turnTotal = "0"
        xPlayer = []
        oPlayer = []
        alertWindow.innerText = "Welcome to lemonLines!"
        }
    })
                
})




    // for (let i = 0; i < winStates.length; i++)
    //     if () {
        //         alertWindow.innerText = "Lemons successfully Lined! Lemons win!"
        //     } else {
            //         alertWindow.innerText = "This isn't melonMedian! Lemons lose!"
            //     }
        
        //also clear innerText?
        
        // TODO fix button syntax
        
        // set h2 inner text to display xPlayer wins vs Oplayer, style it into a window
        //loop winstate array on each click
        //figure out how to differentiate xwin vs owin
        //possibly a if/else?
        // sounds like I need a start game button?
        
        // TODO make it pretty
        
        
        
        
        
        // set innnerText of div to be new letter
        // add class to cell for X or O once selected into a 
        // different div that cant be clicked, alter the div class itself?
        // check status of game after every newPlayStatus
        // send blank squares to div when winstate detected
        // if all 9 squares get clicked, activate tiestate
        // reset button go through arrays set all back to gametile state
        // check the terning to display a message at the top for which turn it is
        // check for winstates via checking for 3 in a row, by means unknown to me
        /* /!\ copy paster /!\
        if (!playerTurn) {
                        gameBoard.removeEventListener("click", cellClick);
                        xPlayer.wins++;
                        xScore.innerText = xPlayer.wins;
                    }
                }
            }
        }
        /!\ copy paster /!\
        */
