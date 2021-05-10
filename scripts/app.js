window.addEventListener("DOMContentLoaded", () => {
   
    let gameTiles = document.querySelectorAll(".gameTile")
    let lastClickX = false
    let message = document.querySelector("#userMessage")
    let nextPlay = document.querySelector("#turnWho")
    let playAgain = document.querySelector("button")
    const p1Choice = "gameTile player1Choice"
    const p2Choice = "gameTile player2Choice"
    
    function endGame() { 
        playAgain.style.display = "block"
        nextPlay.style.display = "none"
        message.style.display = "block"
    }
    
    function player1Wins() {
        message.innerText = "Bears Win!"
        endGame()
    }
    
    function player2Wins() {
        message.innerText = "Kittens Win!"
        endGame()
    }

    function playerChooses(someTile) {
        let newImage = document.createElement ("img")
        
        if (lastClickX === false) {
            someTile.classList.add('player1Choice')
            newImage.src = "https://placebear.com/96/96"
            nextPlay.innerText = "Player 2 Turn"
        } else {
            someTile.classList.add('player2Choice')
            newImage.src = "https://placekitten.com/96/96"
            nextPlay.innerText = "Player 1 Turn"
        }

        someTile.append(newImage) 
        lastClickX = !lastClickX
    }
    
    for (let i = 0; i < gameTiles.length; i++) {
        const gameTile = gameTiles[i]

        playAgain.addEventListener("click", () => {
            window.location.reload()
        })
        
        gameTile.addEventListener("click", () => {
            if (message.innerText !== "" ||
                gameTile.className !== "gameTile") {
                //Do Nothing
            } else {
                playerChooses(gameTile)
            } 
        
            if (
                gameTiles[0].className === p1Choice &&
                gameTiles[1].className === p1Choice &&
                gameTiles[2].className === p1Choice) {
                    player1Wins()
                
            } else if (
                gameTiles[3].className === p1Choice &&
                gameTiles[4].className === p1Choice &&
                gameTiles[5].className === p1Choice) {
                    player1Wins()
            } else if (
                gameTiles[6].className === p1Choice &&
                gameTiles[7].className === p1Choice &&
                gameTiles[8].className === p1Choice) {
                    player1Wins()
            } else if (
                gameTiles[0].className === p1Choice &&
                gameTiles[3].className === p1Choice &&
                gameTiles[6].className === p1Choice) {
                    player1Wins()
                
            } else if (
                gameTiles[1].className === p1Choice &&
                gameTiles[4].className === p1Choice &&
                gameTiles[7].className === p1Choice) {
                    player1Wins()
            } else if (
                gameTiles[2].className === p1Choice &&
                gameTiles[5].className === p1Choice &&
                gameTiles[8].className === p1Choice) {
                    player1Wins()
            } else if (
                gameTiles[0].className === p1Choice &&
                gameTiles[4].className === p1Choice &&
                gameTiles[8].className === p1Choice) {
                    player1Wins()
            } else if (
                gameTiles[2].className === p1Choice &&
                gameTiles[4].className === p1Choice &&
                gameTiles[6].className === p1Choice) {
                    player1Wins()
            } else if (
                gameTiles[0].className === p2Choice &&
                gameTiles[1].className === p2Choice &&
                gameTiles[2].className === p2Choice) {
                    player2Wins()
            } else if (
                gameTiles[3].className === p2Choice &&
                gameTiles[4].className === p2Choice &&
                gameTiles[5].className === p2Choice) {
                    player2Wins()
            } else if (
                gameTiles[6].className === p2Choice &&
                gameTiles[7].className === p2Choice &&
                gameTiles[8].className === p2Choice) {
                    player2Wins()
            } else if (
                gameTiles[0].className === p2Choice &&
                gameTiles[3].className === p2Choice &&
                gameTiles[6].className === p2Choice) {
                    player2Wins()
            } else if (
                gameTiles[1].className === p2Choice &&
                gameTiles[4].className === p2Choice &&
                gameTiles[7].className === p2Choice) {
                    player2Wins()
            } else if (
                gameTiles[2].className === p2Choice &&
                gameTiles[5].className === p2Choice &&
                gameTiles[8].className === p2Choice) {
                    player2Wins()
            } else if (
                gameTiles[0].className === p2Choice &&
                gameTiles[4].className === p2Choice &&
                gameTiles[8].className === p2Choice) {
                    player2Wins()
            } else if (
                gameTiles[2].className === p2Choice &&
                gameTiles[4].className === p2Choice &&
                gameTiles[6].className === p2Choice) {
                    player2Wins()
            } else if (
                gameTiles[0].className !== "gameTile" &&
                gameTiles[1].className !== "gameTile" &&
                gameTiles[2].className !== "gameTile" &&
                gameTiles[3].className !== "gameTile" &&
                gameTiles[4].className !== "gameTile" &&
                gameTiles[5].className !== "gameTile" &&
                gameTiles[6].className !== "gameTile" &&
                gameTiles[7].className !== "gameTile" &&
                gameTiles[8].className !== "gameTile" 
                ) {

                message.innerText = "Its a Tie!"
                endGame ()
            }
            
        })
     }
})
        
        