window.addEventListener("DOMContentLoaded", () =>{

let winner = document.querySelector("#winner")
let gameOver = true
let totalNumOfTurns = 0

    let sq1 = document.querySelector("#one")
    let sq2 = document.querySelector("#two")
    let sq3 = document.querySelector("#three")
    let sq4 = document.querySelector("#four")
    let sq5 = document.querySelector("#five")
    let sq6 = document.querySelector("#six")
    let sq7 = document.querySelector("#seven")
    let sq8 = document.querySelector("#eight")
    let sq9 = document.querySelector("#nine")
    
    const gameTileList = [sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9]
    // console.log( "before test sq1.innerText", sq1.innerText)
     
    
    // Win function
    function winCheck(){
        //1across
        if((sq1.innerText != "" && sq1.innerText === sq2.innerText && sq1.innerText === sq3.innerText)||
        //1down
        (sq1.innerText != "" && sq1.innerText === sq4.innerText && sq1.innerText === sq7.innerText)||
        //1 diag
        (sq1.innerText != "" && sq1.innerText === sq5.innerText && sq1.innerText === sq9.innerText)||
        //2down
        (sq2.innerText != "" && sq2.innerText === sq5.innerText && sq2.innerText === sq8.innerText)||
        //3down
        (sq3.innerText != "" && sq3.innerText === sq6.innerText && sq3.innerText === sq9.innerText)||
        //3 diag
        (sq3.innerText != "" && sq3.innerText === sq5.innerText && sq3.innerText === sq7.innerText)||
        //4 across
        (sq4.innerText != "" && sq4.innerText === sq5.innerText && sq4.innerText === sq6.innerText)||
        //7 across
        (sq7.innerText != "" && sq7.innerText === sq8.innerText && sq7.innerText === sq9.innerText)){
             
            winner.innerText = (userMessage.innerText +` is the winner`)
            
            
            gameOver = true
        }else {
            console.log("no wins yet")
            let i = 0
            for(const item of gameTileList){
                if (item.innerText === ""){
                    // console.log("in if loop item is ''")
                    break
                }else if(item != ""){
                    // console.log("not empty string, adding to 9")
                    i++
                    if(i===9){
                        winner.innerText = "Tie Game!"
                        gameOver = true
                        // alert("Game over, Tie")
                   }

               }
           }
            
        }
    }
    //win funct


    //Start game
    let userMessage = document.querySelector("#userMessage")
    let startButton = document.querySelector("#startButton")
    
    startButton.addEventListener("click", () =>{
        for (let i=0; i<gameTileList.length; i++){
            gameTileList[i].innerText = ""}
        gameOver = false
        userMessage.innerText="👣 Turn" 
        winner.innerText = ""
        
    })
       
    
    


    // console.log("hello world")
    //toggle between x and 0 on game board

    // let gameTiles = document.querySelectorAll(".grid-item")

    // console.log(gameTiles[0])
    
    for (let i = 0; i< gameTileList.length; i++){ 
        
        gameTileList[i].addEventListener("click", () =>{


            // If winner, game over. no more tiles can be played
            if (gameTileList[i].innerText == "" && gameOver == false){
                console.log(gameTileList[i])

               

            
                

                //add a turn per click
                totalNumOfTurns++
                console.log(totalNumOfTurns)

                //IF 👣 turn, newPlayStatus = "X", ELIF ⏰ turn, newPlayStatus = "O" AND get diabled? or cant click on box with string
                
                //add a class to each element to identify if it's been clicked
                //before clicking, check to make sure if it's been clicked

               


                
                
                
                
                if (userMessage.innerText === "⏰"){
                    
                    gameTileList[i].innerText = "⏰"
                    winCheck()
                    
                    userMessage.innerText = "👣"

                    if(winner.innerText != ""){
                        userMessage.innerText = ""
                    }



                // console.log("Player2")
                }else{
                    
                    console.log(userMessage.innerText)
                    gameTileList[i].innerText = "👣"
                    winCheck()
                    
                    userMessage.innerText = "⏰"
                    if(winner.innerText != ""){
                        userMessage.innerText = ""
                    }
                }
                //Adding event to try and disable tile after click
                //   :(
            }
        //
        })   
            }





        let clearButton = document.querySelector("#clearButton")
        clearButton.addEventListener("click", () =>{
            for (let i=0; i<gameTileList.length; i++){
                    gameTileList[i].innerText = ""

                    userMessage.innerText="" 
                    winner.innerText = ""
        
                }
            }) //end of clearButton

            
 








//Closing Brackets            
})
            


















/*
After TA sesh: got win function to work. getting stuck on comparing the id's not the text of the id's

Need to make it turn based in order to see if the tie function works

need to make tiles unable to change (probably part of turn based)

add player turn to the top

Start button?/player one choose "X OR O"







Make player turns, 👣 chooses x or o (buttons?)

Mark x or o based on player turn (toggle on player turn)

check if someone wins, or if tie

alternate clicks depending on turn (with message)
    if player turn == true, boardSpots turns into x or 0 depending on player

change class of tile after click (or diable event listener) 
    so it doesnt get clicked again until board clears and resets




reset function to clear all game marks

*/


//EVENT OBJECT::::::
// for (let i = 0; i< gameTileList.length; i++){
// gameTileList[i].addEventListener("click",(event) =>{
// console.log(event))}
// })
// }
// })


        // let tern = conditionalCheck ? true : false
        // let exampleTern = westonLocation === "LA" ? "coffee" : "no coffee"













    //     // GET the list of tiles
    // let boardSpots = []
    // for (item of gameTileList){
        
    //     boardSpots.push(item)
        
    //     }console.log(boardSpots)    