/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// Inside the app.js file, declare a new variable called `game` that’s not set to anything. Then, add a "click" event listener to the HTML `<button>` element with an `id` of
// `btn__reset`.
const startGameButton = document.getElementById('btn__reset');

// const newGame = new Game();
const game = new Game();

startGameButton.addEventListener('click', (e) => {
    game.startGame();

});

document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    };
});
game.handleInteraction();