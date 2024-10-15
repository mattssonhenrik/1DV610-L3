import { InputRule } from '../input-rules/inputRules.js'
import { OutputColorToBrowser } from '../output-color-to-browser/outputColorToBrowser.js'


export class InputProcessor {
    constructor() {
        this.inputElementColorChanger = new OutputColorToBrowser()
        this.ruleHandler = new InputRule()
        this.ruleSelected = this.ruleHandler.getChosenRule()
        this.regex = new RegExp(this.ruleSelected)

        this.inputElement = document.querySelector(".filter")

        // Aye aye aye, this is bad, need to change this part to add an eventlistener for when an input element gets inserted.
        if(this.inputElement !== null) {
            this.inputElement.addEventListener("keyPressed", event => {
                this.isInputValid(event.detail.keyPressed)
            })
        } else {
            // do nothing for now
        }

    }

    isInputValid(keyPressed) {
        if (this.regex.test(keyPressed)) {
            this.processInvalidInput(keyPressed)
        } else {
            this.processValidInput()
        }
    }

    processInvalidInput(keyPressed) {
        if (keyPressed === 'Backspace') {
            this.processBackspace()
        } else if (keyPressed === 'Shift' || keyPressed === 'Alt' || keyPressed === 'Ctrl' || keyPressed === 'Control' || keyPressed === 'Meta' || keyPressed === 'CapsLock' || keyPressed === 'ArrowLeft' || keyPressed === 'ArrowRight' || keyPressed === 'ArrowUp' || keyPressed === 'ArrowDown') {
            this.processSpecialKey()
        } else {
            this.processInvalidKey()
        }
    }

    processValidInput() {
        this.processBackspace()
    }

    processBackspace() {
        setTimeout(() => {
            let charactersInInput = this.inputElement.value
            if(!this.regex.test(charactersInInput)) {
                document.dispatchEvent(new CustomEvent("correctInput"))
            }
        }, 1)
    }

    processSpecialKey() {
        return
    }

    processInvalidKey() {
        document.dispatchEvent(new CustomEvent("incorrectInput"))
    }
}
