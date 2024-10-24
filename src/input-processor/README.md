# 1DV610-L2

# Input Processor

The Input Processor is a JavaScript module that validates user input in real-time based on customizable rules. It provides immediate visual feedback to users, enhancing the user experience in web applications.

## Features

- **Real-Time Validation**: Input is validated as the user types.
- **Customizable Rules**: Choose from predefined validation rules or define your own.
- **Visual Feedback**: Input field changes color based on the validity of the input.
- **Easy Integration**: Simple to set up and integrate into existing projects.

## Getting Started

### Prerequisites

- A modern web browser.
- Live Server extension for Visual Studio Code or any local server to run the application.

```bash
git clone https://github.com/mattssonhenrik/1DV610-L2.git
```

### Add `.filter` Class to Input Elements

For the `InputProcessor` to function, make sure the input element in your HTML has the `.filter` class applied:

```html
<input type="text" class="filter" />
```

Also remember to instantiate the following objects:
```javascript
import { InputProcessor } from './path-to-input-processor/inputProcessor.js';
import { InputRule } from './path-to-input-rules/inputRules.js';

const ruleHandler = new InputRule();
const inputProcessor = new InputProcessor(ruleHandler);
```

This will create a new instance of the InputProcessor class with the InputRule class managing the validation rules.

### Start the Application

- If you're using Visual Studio Code, open the project folder and start the Live Server extension.
- Alternatively, use any local server to serve the files.

## Usage

The application includes an input field that validates user input based on the selected rule. The input field provides visual feedback:

- **Green Background**: Input is valid.
- **Red Background**: Input is invalid.
- **White Background**: Input field is empty.

![Image over tested rule](/src/input-processor/assets/README-pictures/validInput.png)
![Image over tested rule](/src/input-processor/assets/README-pictures/invalidInput.png)

## Customizing Validation Rules

You can change the validation rule applied to the input field by modifying the `InputRule` class in the `inputRules.js` file located at:

`/src/input-processor/javascript/input-rules/inputRules.js`

### Available Rules

- **Lower and Uppercase Letters plus Numbers** (`lowerAndUpperLettersPlusNumbers`)
- **Lowercase Letters Only** (`lowerLetters`)
- **Uppercase Letters Only** (`upperLetters`)
- **Lower and Uppercase Letters** (`lowerAndUpperLetters`)
- **Lowercase Letters and Numbers** (`lowerLetterAndNumbers`)
- **Uppercase Letters and Numbers** (`upperLetterAndNumbers`)
- **Numbers Only** (`numbers`)

#### Example:

```javascript
constructor() {
    this.lowerAndUpperLettersPlusNumbers = true;
    this.lowerLetters = false;
    this.upperLetters = false;
    this.lowerAndUpperLetters = false;
    this.lowerLetterAndNumbers = false;
    this.upperLetterAndNumbers = false;
    this.numbers = false;
}
```

## Helpful Documentation

- **Browser Input Events**
  - [`keydown` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)
  - [Creating and triggering events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
  
- **Regular Expressions in JavaScript**
  - [RegExp Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)


## License

This project is licensed under the MIT License - see the LICENSE file for details.
