/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
     this.missed ='0';
     this.phrases = [
        new Phrase('Say cheese'),
        new Phrase('To boldly go where no man has gone before'),
        new Phrase('Spitting feathers'),
        new Phrase(' Go out on a limb'),
        new Phrase(' Magical realism'),
     ];
     this.activePhrase ='null';
     }

getRandomPhrase() {
    return this.phrases[ Math.floor( Math.random() * this.phrases.length ) ];

};

startGame() {
 const overlay = document.getElementById('overlay');
 overlay.style.display = "none";

 this.activePhrase = this.getRandomPhrase();     
 this.activePhrase.addPhraseToDisplay();    

};

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
`checkForWin()`: This method checks to see if the player has revealed all of the letters in the active phrase.*/

checkForWin() {
 let remainingLetters = [ ];
 let hiddenBoxes = document.querySelectorAll (".hide");

  hiddenBoxes.forEach(box=> {
    remainingLetters.push(box)
  });

};

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {};
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {};
}






