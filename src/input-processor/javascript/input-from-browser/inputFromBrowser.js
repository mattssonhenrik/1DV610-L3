/**
 * Handles input events from the browser and dispatches custom events.
 */
export class InputFromBrowser {
    /**
     * Initializes a new instance of the InputFromBrowser class.
     * Sets up the input element from the DOM and adds an event listener to handle user input.
     */    
    constructor() {
        this.inputElement = document.querySelector(".filter")

        if(this.inputElement !== null) {
            this.inputElement.addEventListener("input", event => {
                this.dispatchCustomEvent(event)
            })
        } else {
            // do nothing for now
        }
    }

    /**
     * Dispatches a custom 'keyPressed' event when the input element receives input.
     * 
     * @param {Event} event - The input event from the input element.
     */
    dispatchCustomEvent(event) {
        this.inputElement.dispatchEvent(new CustomEvent('keyPressed'))
    }
}