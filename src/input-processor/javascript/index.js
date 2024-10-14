
import { InputProcessor } from './input-processor/inputProcessor.js'
import { InputFromBrowser } from './input-from-browser/inputFromBrowser.js'
import { OutputTextToBrowser } from './output-text-to-browser/outputTextToBrowser.js'

export function exportingInputFilter () {
    const inputProcessor = new InputProcessor()
    const inputFromBrowser = new InputFromBrowser()
    const browserText = new OutputTextToBrowser()
    browserText.checkRules()
}

document.addEventListener('DOMContentLoaded', () => {
    exportingInputFilter()
})