window.addEventListener("DOMContentLoaded", () => {
    
    // query's
    let gameTiles=document.querySelectorAll(".gameTile")
    let message=document.getElementById("userMessage")
    let winningMessage= document.querySelector("h2")
    const restart= document.getElementById("restartButton")
    
// variables
const xClass ="X"
const oClass= "O"  
let circleTurn

let winCombinations =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
        
    startGame()

    restart.addEventListener("click", startGame)
    
    function startGame(){
    circleTurn=false
    for (let gameTile of gameTiles) {
        gameTile.classList.remove(xClass)
        gameTile.classList.remove(oClass)
        winningMessage.innerText=null
        gameTile.addEventListener("click", handleClick)
    }
}

    function handleClick(e){
        const tile = e.target
        let currentClass = circleTurn ? oClass : xClass
        markTile(tile, currentClass)
        if(checkWin(currentClass)){
            endGame(false)
        } else if(isDraw()){
            endGame(true)
        } else {
            switchTurns()
        }    
    }
    //function to check for wins 
    function checkWin(currentClass){
        return winCombinations.some(combination => {
            return combination.every(index => {
                return gameTiles[index].classList.contains(currentClass)
            })
        })
     }

   function endGame(draw){
       if(draw) {
            winningMessage.innerText = "The game has ended in a tie"
       }else {
        winningMessage.innerText= `${circleTurn  ? "O" : "X"} Wins. Press restart to try again`
       }
   }
   function isDraw(){
       return [...gameTiles].every(tile => {
           return tile.classList.contains(xClass) || tile.classList.contains(oClass)
       })
   }
   function markTile(tile, currentClass){
       tile.classList.add(currentClass)
   }
    
 function switchTurns(){
     circleTurn=!circleTurn
 }
     
})






