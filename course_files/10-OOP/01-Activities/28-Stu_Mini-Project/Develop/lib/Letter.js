class Letter {
    constructor(character) {
        this.character = character;
        this.visible = !/[a-z1-9]/i.test(character);
    }

    toString() {
        if(this.visible === true) {
            return this.character
        }
        return "_";
    }

    guess(charGuess) {
        if(charGuess.toUpperCase() === this.character.toUpperCase()) {
            this.visible = true;
            return true;
        }
        return false;
    }
}

module.exports = Letter;
