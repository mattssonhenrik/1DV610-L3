export class InputFromBrowser {
    constructor() {
        this.inputElement = document.querySelector(".filter")
        // this.keyPressed = ''

        // Aye aye aye, this is bad, need to change this part to add an eventlistener for when an input element gets inserted.
        if(this.inputElement !== null) {
            this.inputElement.addEventListener("keydown", event => {
                this.dispatchCustomEvent(event)
            })
        } else {
            // do nothing for now
        }



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