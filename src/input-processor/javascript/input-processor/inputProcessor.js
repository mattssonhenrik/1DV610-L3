import { OutputColorToBrowser } from '../output-color-to-browser/outputColorToBrowser.js'
import { InputFromBrowser } from '../input-from-browser/inputFromBrowser.js'

/**
 * Processes user input, validates it against a defined rule, and triggers appropriate actions for valid/invalid input.
 */
export class InputProcessor {
    /**
     * Initializes a new instance of the InputProcessor class.
     * Sets up input handling, color changes, and validation based on the provided rule handler.
     * 
     * @param {InputRule} ruleHandler - The rule handler that defines the input validation rules.
     */
    constructor(ruleHandler) {
        this.inputFromBrowser = new InputFromBrowser()
        this.inputElementColorChanger = new OutputColorToBrowser()
        this.ruleHandler = ruleHandler
        this.regex = new RegExp(this.ruleHandler.getChosenRule())
        this.inputElement = document.querySelector(".filter")

        if(this.inputElement !== null) {
            this.inputElement.addEventListener("keyPressed", () => {
                this.isInputValid()
            })
        } else {
            // do nothing for now
        }
    }

    /**
     * Updates the input validation rules with a new rule handler.
     * 
     * @param {InputRule} newRuleHandler - The new rule handler to update the validation rules.
     */
    updateRules(newRuleHandler) {
        this.ruleHandler = newRuleHandler
        this.regex = new RegExp(this.ruleHandler.getChosenRule())
    }

    /**
     * Validates the current input against the active regular expression rule.
     * Triggers events for valid or invalid input accordingly.
     */
    isInputValid() {
        let currentInput = this.inputElement.value
        if (this.regex.test(currentInput)) {
            this.processInvalidInput()
        } else {
            this.processValidInput()
        }
    }

    /**
     * Dispatches a custom "incorrectInput" event when the input is invalid.
     */
    processInvalidInput() {
        document.dispatchEvent(new CustomEvent("incorrectInput"))
    }

    /**
     * Dispatches a custom "correctInput" event when the input is valid.
     */
    processValidInput() {
        document.dispatchEvent(new CustomEvent("correctInput"))
    }

    /**
     * Processes any special keys (currently no action defined).
     */
    processSpecialKey() {
        return
    }
}
