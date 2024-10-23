export class InputFromBrowser {
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

    dispatchCustomEvent(event) {
        this.inputElement.dispatchEvent(new CustomEvent('keyPressed'))
    }
}