export class InputRule {
    constructor () {
        // Only one rule can be applicable at the same time
        this.lowerAndUpperLettersPlusNumbers = false
        this.lowerLetters = true
        this.upperLetters = false
        this.lowerAndUpperLetters = false
        this.lowerLetterAndNumbers = false
        this.upperLetterAndNumbers = false
        this.numbers = false
    }
    
    getChosenRule() {
        if (this.lowerAndUpperLettersPlusNumbers) {
            return this.getLowerAndUpperLettersPlusNumbers()
        } else if (this.lowerLetters) {
            return this.getLowerLetters()
        } else if (this.upperLetters) {
            return this.getUpperLetters()
        } else if (this.lowerAndUpperLetters) {
            return this.getLowerAndUpperLetters()
        } else if (this.lowerLetterAndNumbers) {
            return this.getLowerLetterAndNumbers()
        } else if (this.upperLetterAndNumbers) {
            return this.getUpperLetterAndNumbers()
        } else {
            return this.getNumbers()
        }
    }

    getLowerAndUpperLettersPlusNumbers() {
        return /[^a-zA-Z0-9]/
    }

    getLowerLetters() {
        return /[^a-z^]/
    }

    getUpperLetters() {
        return /[^A-Z]/
    }

    getLowerAndUpperLetters() {
        return /[^a-zA-Z]/
    }

    getLowerLetterAndNumbers() {
        return /[^a-z0-9]/
    }

    getUpperLetterAndNumbers() {
        return /[^A-Z0-9]/
    }

    getNumbers() {
        return /[^0-9]/
    }
}
