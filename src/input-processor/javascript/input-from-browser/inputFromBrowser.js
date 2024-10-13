export class InputFromBrowser {
    constructor() {
        this.inputElement = document.querySelector(".filter")
        // this.keyPressed = ''

        this.inputElement.addEventListener("keydown", event => {
            this.dispatchCustomEvent(event)
        })
    }

    dispatchCustomEvent(event) {
        this.inputElement.dispatchEvent(new CustomEvent('keyPressed',
            {
                detail: {
                    keyPressed: event.key
                }
            }
        ))
    }
}