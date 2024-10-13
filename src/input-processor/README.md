# 1DV610-L2
To use the input-field-sorter, just download the repo and start it with the live-server-extension plugin to VSC.

![Image over tested rule](/src/input-processor/assets/README-pictures/validInput.png)
![Image over tested rule](/src/input-processor/assets/README-pictures/invalidInput.png)

You can change which rule you want to apply on the input-field in the file inputRules.js (/src/javascript/input-rules/inputRules.js), the rules you can choose between are:  
a-z + A-Z + 0-9 (lowerAndUpperLettersPlusNumbers)  
a-z (lowerLetters)  
A-Z (upperLetters)  
a-z + A-Z (lowerAndUpperLetters)  
a-z + 0-9 (lowerletterAndNumbers)  
A-Z + 0-9 (upperletterAndNumbers)  
0-9 (numbers)  

You change the current rule by setting it to true and you can only apply one rule at the same time. If you set multiple rules to true the first one in the list will be applicable. If you set all rule to false the numbers rule will apply.  
`        this.lowerAndUpperLettersPlusNumbers = true`    
`        this.lowerLetters = false`    
`        this.upperLetters = false`   
`        this.lowerAndUpperLetters = false`  
`        this.lowerLetterAndNumbers = false`  
`        this.upperLetterAndNumbers = false`  
`        this.numbers = false` 




Helpfull documentation:
browserInput:
https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events

rulesForInput.js (REGEX):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp