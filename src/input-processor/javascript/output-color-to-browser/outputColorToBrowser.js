/**
 * Handles the input field's background and border color changes based on input validation.
 */
export class OutputColorToBrowser {
    /**
     * Initializes a new instance of the OutputColorToBrowser class.
     * Sets up event listeners for "correctInput" and "incorrectInput" events and targets the input element.
     */
    constructor() {
        this.correctInput = true
        this.inputElement = document.querySelector(".filter")

        document.addEventListener("correctInput", (event) => {
            this.setCorrectInput()
        })

        document.addEventListener("incorrectInput", (event) => {
            this.setIncorrectInput()
        })
    }

    /**
     * Sets the input as correct and changes the color accordingly.
     */
    setCorrectInput() {
        this.correctInput = true
        this.setColor()
    }

    /**
     * Sets the input as incorrect and changes the color after a brief delay.
     */
    setIncorrectInput() {
        this.correctInput = false
        setTimeout(() => {
            this.setColor()
        }, 1)
    }

    /**
     * Updates the input field's color based on the current input value and validation state.
     */
    setColor() {
        let inputValue = this.inputElement.value
        if (inputValue === '') {
            this.setColorToWhite()
        } else if (inputValue !== '' && this.correctInput === true) {
            this.setColorToGreen()
        } else if (inputValue !== '' && this.correctInput === false) {
            this.setColorToRed()
        } else {
            this.setColorToGray()
        }
    }

    /**
     * Sets the input field's background and border color to white.
     */
    setColorToWhite() {
        this.inputElement.style.backgroundColor = "White"
        this.inputElement.style.borderColor = "gray"
    }

    /**
     * Sets the input field's background and border color to green (indicating correct input).
     */
    setColorToGreen() {
        this.inputElement.style.backgroundColor = "lightGreen"
        this.inputElement.style.borderColor = "green"
    }

    /**
     * Sets the input field's background and border color to red (indicating incorrect input).
     */
    setColorToRed() {
        this.inputElement.style.backgroundColor = "salmon"
        this.inputElement.style.borderColor = "red"
    }

    /**
     * Sets the input field's background color to gray (default color).
     */
    setColorToGray() {
        this.inputElement.style.backgroundColor = "gray"
    }
}