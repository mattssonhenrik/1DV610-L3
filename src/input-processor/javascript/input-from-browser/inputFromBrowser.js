export class InputFromBrowser {
    constructor() {
        this.inputElement = document.querySelector(".filter")

        // Aye aye aye, this is bad, need to change this part to add an eventlistener for when an input element gets inserted.
        if(this.inputElement !== null) {
            this.inputElement.addEventListener("input", event => {
                this.dispatchCustomEvent(event)
            })
        } else {
            // do nothing for now
        }
    }

    dispatchCustomEvent(event) {
        this.inputElement.dispatchEvent(new CustomEvent('keyPressed'))
    }
}