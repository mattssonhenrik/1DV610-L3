import { InputRule } from '../input-rules/inputRules.js'

/**
 * Handles displaying text in the browser to provide feedback on the input validation rules and results.
 */
export class OutputTextToBrowser {
    /**
     * Initializes a new instance of the OutputTextToBrowser class.
     * Sets up event listeners to change text color based on input validation and assigns the rule handler.
     * 
     * @param {InputRule} ruleHandler - The rule handler that defines the input validation rules.
     */
    constructor (ruleHandler) {
        this.textField = document.querySelector(".text-container")
        this.ruleHandler = ruleHandler
        console.log(this.ruleHandler)

        document.addEventListener('incorrectInput', (event) => {
            this.textField.style.color = "red"
        })

        document.addEventListener('correctInput', (event) => {
            this.textField.style.color = "black"
        })
    }

    /**
     * Updates the text in the text field to reflect the current input validation rules.
     * Displays a message based on which rule is currently active.
     */
    checkRules() {
        if (this.ruleHandler.lowerAndUpperLettersPlusNumbers) {
            this.textField.textContent = 'Upper- and lowercase letters and numbers are valid'
        } else if (this.ruleHandler.lowerLetters) {
            this.textField.textContent = 'Only lowercase letters'
        } else if (this.ruleHandler.upperLetters) {
            this.textField.textContent = 'Only uppercase letters'
        } else if (this.ruleHandler.lowerAndUpperLetters) {
            this.textField.textContent = 'Only lower- and uppercase letters'
        } else if (this.ruleHandler.lowerLetterAndNumbers) {
            this.textField.textContent = 'Only lowercase letters and numbers'
        } else if (this.ruleHandler.upperLetterAndNumbers) {
            this.textField.textContent = 'Only uppercase letters and numbers'
        } else {
            this.textField.textContent = 'Only numbers (0-9)'
        }
    }
}