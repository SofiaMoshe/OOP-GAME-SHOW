/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}
	/**
	 * * Display phrase on game board
	 */

	addPhraseToDisplay() {
		const phraseDisplay = this.phrase.split("");
		const phraseUl = document.querySelector("#phrase ul");

		let htmlPhrase = "<ul>";

		phraseDisplay.forEach(letter => {
			if (letter !== " ") {
				htmlPhrase += `<li class="hide letter">${letter}</li>`;
			}
			if (letter === " ") {
				htmlPhrase += `<li class="space">${" "}</li>`;
			}
		});
		htmlPhrase += `</ul>`
		return htmlPhrase;

	}

/**
Checks to see if the letter selected by the player matches a letter
in the phrase.
*/       
checkLetter(e) {
    const letters = this._phrase.split('');
    let matchedLetter = 'false';
    letters.forEach(letter => {
        if(e.target.innerHTML === letter) {
            matchedLetter = true;
        } 
    })
    return matchedLetter;
}

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/

// `showMatchedLetter()`: Reveals the letter(s) on the board that matches the
// player's selection. To reveal the matching letter(s), select all of the letter DOM
// elements that have a CSS class name that matches the selected letter and
// replace each selected element's `hide` CSS class with the `show` CSS class.

showMatchedLetter(letter) {
    const phraseLetters = document.querySelectorAll('#phrase li');
    // loop over all phrases
    for (let i = 0; i < phraseLetters.length; i++)  {
        if (letter === phraseLetters[i].innerHTML) {
            phraseLetters[i].classList.remove('hide');
            phraseLetters[i].classList.add('show');
        }
    }
};

}