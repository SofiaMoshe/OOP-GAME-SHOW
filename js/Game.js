/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Say cheese'),
            new Phrase('To boldly go where no man has gone before'),
            new Phrase('Spitting feathers'),
            new Phrase(' Go out on a limb'),
            new Phrase(' Magical realism')
        ];
        this.activePhrase = null;
    }
     
    // 1. Select a phrase from phrases property
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];

    };
    //2. Start game- selecting a random phrase and displaying it to user
    startGame() {
        // a. Removing overlay to start game:
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        // b. New random phrase to initializing phrase class 
        this.activePhrase = this.getRandomPhrase();

        // c. Displaying random phrase on display-(changed the html on phrase.js file)
        this.activePhrase.addPhraseToDisplay();

        // d. Reset a game after playing:
        this.missed = 0; // for resetting a game - when start button is clicked(win or lose)
        let hearts = document.querySelectorAll('.tries'); // for resetting a game - when start button is clicked(win or lose)
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].firstChild.src = "images/liveHeart.png";
        }
        const buttons = document.getElementsByTagName('button'); // clearing buttons classes after game reset
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = 'key'
            buttons[i].disabled = false;;
        }
    }
    
    
    /**
    * Checks for winning move 
    * * @return {boolean} True if game has been won, false if game wasn't
    This method checks to see if the player has revealed all of the letters in the active phrase. */
    checkForWin() {
        let remainingLetters = [];
        let hiddenBoxes = document.querySelectorAll(".hide");

        hiddenBoxes.forEach(box => {
            remainingLetters.push(box)
        });
        if (remainingLetters.length === 0) {
            this.gameOver();
        }
    };

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        const tries = document.querySelectorAll(".tries img");
        // for (let i = 0; i < tries.length; i++) {
        tries[this.missed].setAttribute('src', 'images/lostHeart.png');
        // }

        this.missed++;

        if (this.missed === 5) {
            this.gameOver();
            this.restartGame();
        }
        console.log(tries);
    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = '';

        const message = document.getElementById('game-over-message');
        const button = document.getElementById('btn__reset');
        button.innerText = 'Play Again!';

        if (this.missed < 5) {
            message.innerText = 'Yay You Win!';
            overlay.className = 'win';
        } else {
            message.innerText = 'Better luck next time';
            overlay.className = 'lose';

        }
    };

    handleInteraction(button) {
        button.disabled = true;

        if (this.activePhrase.checkLetter(button.innerHTML)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.innerHTML);

            if (this.checkForWin()) {
                this.gameOver();
                this.restartGame();
            }

        } else {
            button.classList.add('wrong');
            this.removeLife();
        };

    }
  }
    