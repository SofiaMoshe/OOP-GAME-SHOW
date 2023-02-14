/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
// 		This is the actual phrase the Phrase object is representing. This property
// should be set to the `phrase` parameter, but converted to all lower case.
        this.phrase = phrase.toLowerCase();
    }
    /**
     * * Display phrase on game board
     Loop over each phrase letter or space (space between words) */

    addPhraseToDisplay() {
        const phraseDisplay = this.phrase.split("");
        // phraseDisplay = ['y','o','u',' ',...]

        const phraseUl = document.querySelector("#phrase ul");

        let htmlPhrase = " ";
        // making a string to start list

        phraseDisplay.forEach(letter => {
            if (letter === " ") {
                htmlPhrase += `<li class="space"> </li>`;
            } else {
                htmlPhrase += `<li class="hide letter">${letter}</li>`;
            }
        });
        // set the html to htmlPhrase
        phraseUl.innerHTML = htmlPhrase;
    }
    /**
    Checks to see if the letter selected by the player matches a letter
    in the phrase.
    */
    checkLetter(letter) {
        return this.phrase.includes(letter)
    }

    showMatchedLetter(letter) {
        const matchLetters = document.querySelectorAll('#phrase li');

        matchLetters.forEach(matchLetter => {

            if (letter === matchLetter.innerHTML) {
                matchLetter.classList.remove('hide');
                matchLetter.classList.add('show');
            }
            // console.log(`-${letter}-${matchLetter.innerHTML}-`);
        });
    }
}