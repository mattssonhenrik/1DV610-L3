import { InputRule } from '../input-rules/inputRules.js'
import { OutputColorToBrowser } from '../output-color-to-browser/outputColorToBrowser.js'
import { InputFromBrowser } from '../input-from-browser/inputFromBrowser.js'


export class InputProcessor {
    constructor(ruleHandler) {
        this.inputFromBrowser = new InputFromBrowser()
        this.inputElementColorChanger = new OutputColorToBrowser()
        this.ruleHandler = ruleHandler
        this.regex = new RegExp(this.ruleHandler.getChosenRule())
        this.inputElement = document.querySelector(".filter")

        // Aye aye aye, this is bad, need to change this part to add an eventlistener for when an input element gets inserted.
        if(this.inputElement !== null) {
            this.inputElement.addEventListener("keyPressed", () => {
                this.isInputValid()
            })
        } else {
            // do nothing for now
        }
    }

    updateRules(newRuleHandler) {
        this.ruleHandler = newRuleHandler
        this.regex = new RegExp(this.ruleHandler.getChosenRule())
    }

    isInputValid() {
        let currentInput = this.inputElement.value
        if (this.regex.test(currentInput)) {
            this.processInvalidInput()
        } else {
            this.processValidInput()
        }
    }

    processInvalidInput() {
        document.dispatchEvent(new CustomEvent("incorrectInput"))
    }

    processValidInput() {
        document.dispatchEvent(new CustomEvent("correctInput"))
    }

    processSpecialKey() {
        return
    }

}
