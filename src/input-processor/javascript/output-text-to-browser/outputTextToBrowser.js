import { InputRule } from '../input-rules/inputRules.js'

export class OutputTextToBrowser {
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