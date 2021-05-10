window.addEventListener("DOMContentLoaded", () => {
    // on click toggle between x and o on gameboard
    let gameTiles = document.querySelectorAll(".gameTile")
    let clearButton = document.querySelector("#clear")
    // clearButton.addEventListener("click", replay())
    let playStatus = "X"
    let gameStatus = ""

    let xMoves = []
    let oMoves = []

    let winningConditions = [
        ["0","1","2"],
        ["3","4","5"],
        ["6", "7","8"],
        ["0","3","6"],
        ["1","4","7"],
        ["2","5","8"],
        ["0","4","8"],
        ["2","4","6"]

    ]

    // function replay() {
    //     // playStatus = "X"
    //     // gameStatus = ""
    //     // let xMoves = []
    //     // let oMoves = []
    //     // for (let i = 0; i < gameTiles.length; i++){
    //     //     gameTiles[i].innerText = ""
    //     // }
    //     window.location.reload();
    // }

    document.getElementById('clear').addEventListener("click", () => {
        location.reload()
    })
    
    

    for (let i = 0; i < gameTiles.length; i++){
        gameTiles[i].addEventListener("click", () => {
            //see what current letter is of game tile that was clicked
            let tile = gameTiles[i].innerText
            console.log(tile)

            
            
            
            //check if clicking empty tile
            if (gameTiles[i].innerText == ""){
                //toggles x and o and displays playStatus
                gameTiles[i].innerText = playStatus;
                if(playStatus == "X"){
                    //gets and pushes id num to move array
                    let idNum = document.getElementById(i).id
                    
                    xMoves.push(idNum)
                    console.log(xMoves)

                    //checks for winning conditions
                    for (let x = 0; x < winningConditions.length; x++){
                        let containsAll = winningConditions[x].every(i => xMoves.includes(i));
                        if (containsAll == true){
                            alert("X Wins!")
                            location.reload()
                            // restart();
                            
                            
                        }
                    }

                    //checks for tied conditions
                    if(xMoves.length == 5){
                        alert("Tie")
                        location.reload()
                    }
                    
                    

                    playStatus = "O"
                    document.getElementById('whosTurn').innerText = `Its ${playStatus}'s turn!`
                } else{
                    let idNum = document.getElementById(i).id

                    oMoves.push(idNum)
                    console.log(oMoves)

                    for (let x = 0; x < winningConditions.length; x++){
                        let containsAll = winningConditions[x].every(i => oMoves.includes(i));
                        if (containsAll == true){
                            alert("O Wins!")
                            location.reload()
                        }
                    }
                    

                    playStatus = "X"
                    document.getElementById('whosTurn').innerText = `Its ${playStatus}'s turn!`
                }
            } 


            
            

        })
    }

    

    //set status
    //win message
    //tie message
    
    //if valid space, add tile number(id) to players move array
    //if move array = winning condition, display win
    //if all spaces are taken display tie
    // toggle to other player and repeat



})