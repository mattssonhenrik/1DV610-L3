
import { InputProcessor } from './input-processor/inputProcessor.js'
import { InputFromBrowser } from './input-from-browser/inputFromBrowser.js'
import { OutputTextToBrowser } from './output-text-to-browser/outputTextToBrowser.js'

document.addEventListener('DOMContentLoaded', () => {
    const inputProcessor = new InputProcessor()
    const inputFromBrowser = new InputFromBrowser()
    const browserText = new OutputTextToBrowser()
    browserText.checkRules()
})