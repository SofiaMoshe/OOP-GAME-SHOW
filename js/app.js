/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// 1. app.js to create a new instance of the `Game` class and add event listeners for the start
// button and onscreen keyboard buttons.

const startButton = document.getElementById('btn__reset');
const keyBoardButton= document.getElementById('qwerty')
let game;
 

startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();

});


keyBoardButton.addEventListener('click', (e) => {
    if ( e.target.tagName === 'BUTTON' ) {
         game.handleInteraction(e.target);
    };
});

  
