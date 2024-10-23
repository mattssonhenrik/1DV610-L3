/**
 * Defines various input validation rules based on character sets (letters, numbers, etc.).
 * Only one rule can be active at a time.
 */
export class InputRule {
    /**
     * Initializes a new instance of the InputRule class.
     * Sets the default state for all input validation rules to false.
     */
    constructor () {
        // Only one rule can be applicable at the same time
        this.lowerAndUpperLettersPlusNumbers = false
        this.lowerLetters = false
        this.upperLetters = false
        this.lowerAndUpperLetters = false
        this.lowerLetterAndNumbers = false
        this.upperLetterAndNumbers = false
        this.numbers = false
    }
    
    /**
     * Returns the currently selected rule as a regular expression.
     * Determines which rule is active and returns the corresponding regex.
     * 
     * @returns {RegExp} - The regular expression for the chosen rule.
     */
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

    /**
     * Returns a regular expression for allowing lowercase and uppercase letters plus numbers.
     * 
     * @returns {RegExp} - Regular expression for this rule.
     */
    getLowerAndUpperLettersPlusNumbers() {
        return /[^a-zA-Z0-9]/
    }

    /**
     * Returns a regular expression for allowing only lowercase letters.
     * 
     * @returns {RegExp} - Regular expression for this rule.
     */
    getLowerLetters() {
        return /[^a-z^]/
    }

    /**
     * Returns a regular expression for allowing only uppercase letters.
     * 
     * @returns {RegExp} - Regular expression for this rule.
     */
    getUpperLetters() {
        return /[^A-Z]/
    }

    /**
     * Returns a regular expression for allowing both lowercase and uppercase letters.
     * 
     * @returns {RegExp} - Regular expression for this rule.
     */
    getLowerAndUpperLetters() {
        return /[^a-zA-Z]/
    }

    /**
     * Returns a regular expression for allowing lowercase letters and numbers.
     * 
     * @returns {RegExp} - Regular expression for this rule.
     */
    getLowerLetterAndNumbers() {
        return /[^a-z0-9]/
    }

    /**
     * Returns a regular expression for allowing uppercase letters and numbers.
     * 
     * @returns {RegExp} - Regular expression for this rule.
     */
    getUpperLetterAndNumbers() {
        return /[^A-Z0-9]/
    }

    /**
     * Returns a regular expression for allowing only numbers.
     * 
     * @returns {RegExp} - Regular expression for this rule.
     */
    getNumbers() {
        return /[^0-9]/
    }
}
