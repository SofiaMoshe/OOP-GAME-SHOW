/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// Inside the app.js file, declare a new variable called `game` that’s not set to anything.
const game = new Game();


// Then, add a "click" event listener to the HTML `<button>` element with an `id` of
// `btn__reset`.
const startGameButton = document.getElementById('btn__reset');

const newGame = new Game();

startGameButton.addEventListener('click', (e) => {
    newGame.startGame();
    

});

game.activePhrase.checkLetter('a');
