window.addEventListener('DOMContentLoaded', () => {

    let gameTiles = document.querySelectorAll(".gameTile")

    for (let i = 0; i < gameTiles.length; i++) {
        gameTiles[i].addEventListener("click", () => {
        //see what current letter is of game tile that was clicked
        let tile = gameTiles[i].innerText
        //toggle between whichever letter is current
    
        //let tern = conditionalCheck ? true : false    
        let newStatus = tile === "X" ? "O" : "X"
        //set innerText of div to be new toggled letter
        gameTiles[i].innerText = newStatus


        })
    }

})

/* starting blank board
min moves 5
max moves 8

cvar winners = new Array();

function loadAnswers()
{
    winners.push([1, 2, 3]);
    winners.push([4, 5, 6]);
    winners.push([7, 8, 9]);
    winners.push([1, 4, 7]);
    winners.push([2, 5, 8]);
    winners.push([3, 6, 9]);
    winners.push([1, 5, 9]);
    winners.push([3, 5, 7]);
}
    let board;

    function init() {
        board = ['', '', '', '', '', '', '', '', ''];
    };

    take turns:

    let board;

    let turn = 'X';

    document.getElementById('board').addEventListener('click', handleTurn);
    function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    };