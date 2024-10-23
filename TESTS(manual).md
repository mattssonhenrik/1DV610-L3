> We only need to change the rules to test different aspects of the application.



| What was tested                                   | How it was tested                                                                                       | Test result                                                    |
|---------------------------------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| Loading the page                                   | Go to https://the-quiz-application.netlify.app                                                          | Worked as expected                                             |
| Test to load the Math mode of the quiz             | Clicking on the button with the text `Math`                                                             | Worked as expected                                             |
| Test to load the Geography mode of the quiz        | Clicking on the button with the text `Geopgraphy`                                                       | Worked as expected                                             |
| Test to load the Trick Questions mode of the quiz  | Clicking on the button with the text `Trick Questions`                                                  | Worked as expected                                             |
| Test the dynamic instructions with Math mode       | Clicking on the button with the text `Math`                                                             | Worked as expected                                             |
| Test the dynamic instructions with Geography mode  | Clicking on the button with the text `Geography`                                                       | Worked as expected                                             |
| Test the dynamic instructions with Trick Questions mode | Clicking on the button with the text `Trick Questions`                                              | Worked as expected                                             |
| Valid input: lowerAndUpperLettersPlusNumbers       | Entered "testTEST1234" with `lowerAndUpperLettersPlusNumbers = true`                                     | Worked as expected                                             |
| Invalid input: lowerAndUpperLettersPlusNumbers     | Entered "testTEST1234!\"#€" with `lowerAndUpperLettersPlusNumbers = true`                                | Worked as expected                                             |
| Valid input: lowerLetters                          | Entered "test" with `lowerLetters = true`                                                                 | Worked as expected                                             |
| Invalid input: lowerLetters                        | Entered "testTEST" with `lowerLetters = true`                                                             | Worked as expected                                             |
| Valid input: upperLetters                          | Entered "TEST" with `upperLetters = true`                                                                 | Worked as expected                                             |
| Invalid input: upperLetters                        | Entered "TESTtest" with `upperLetters = true`                                                             | Worked as expected                                             |
| Valid input: lowerAndUpperLetters                  | Entered "testTEST" with `lowerAndUpperLetters = true`                                                     | Worked as expected                                             |
| Invalid input: lowerAndUpperLetters                | Entered "testTEST1234" with `lowerAndUpperLetters = true`                                                 | Worked as expected                                             |
| Valid input: lowerLetterAndNumbers                 | Entered "test1234" with `lowerLetterAndNumbers = true`                                                    | Worked as expected                                             |
| Invalid input: lowerLetterAndNumbers               | Entered "test1234TEST" with `lowerLetterAndNumbers = true`                                                | Worked as expected                                             |
| Valid input: upperLetterAndNumbers                 | Entered "TEST1234" with `upperLetterAndNumbers = true`                                                    | Worked as expected                                             |
| Invalid input: upperLetterAndNumbers               | Entered "TEST1234test" with `upperLetterAndNumbers = true`                                                | Worked as expected                                             |
| Valid input: numbers                               | Entered "1234" with `numbers = true`                                                                      | Worked as expected                                             |
| Invalid input: numbers                             | Entered "1234test" with `numbers = true`                                                                  | Worked as expected                                             |
| Reset input field after removing all text          | Entered "testBeforeRemovingInput", removed all text using `Backspace`, checked if the field returned to white | Worked as expected                                             |
| Pasting invalid input: lowerAndUpperLettersPlusNumbers | Pasted "testTEST1234!\"#€" with `lowerAndUpperLettersPlusNumbers = true`                                   | **Did NOT work as expected** (field turned green instead of red) |




# 1. Chosing game modes
## 1.1 Loading the page
### Preconditions
Open a browser.
### Expected Output
A webpage "Quizzit" which shows 3 different quiz topics.
### Input
Go to https://the-quiz-application.netlify.app
### Output
Works as expected
![Image over tested rule](./src/quiz-application/assets/testpictures/test-cases-1/test-case-1.1.png)

## 1.2 Loading the Math Mode
### Preconditions
The page https://the-quiz-application.netlify.appis is loaded.
### Expected Output
The page should change view from the start page to the page with math quizes.
### Input
Click on the button `Math`
### Output
Works as expected
![Image over tested rule](./src/quiz-application/assets/testpictures/test-cases-1/test-case-1.2.png)

## 1.3 Loading the Geography Mode
### Preconditions
The page https://the-quiz-application.netlify.appis is loaded.
### Expected Output
The page should change view from the start page to the page with geography quizes.
### Input
Click on the button `Geography`
### Output
Works as expected
![Image over tested rule](./src/quiz-application/assets/testpictures/test-cases-1/test-case-1.3.png)

## 1.4 Loading the Trick Questions Mode
### Preconditions
The page https://the-quiz-application.netlify.appis is loaded.
### Expected Output
The page should change view from the start page to the page with geography quizes.
### Input
Click on the button `Trick Questions`
### Output
Works as expected
![Image over tested rule](./src/quiz-application/assets/testpictures/test-cases-1/test-case-1.4.png)

# 2 Dynamic instructions
## 2.1 Loading the Math Mode
### Preconditions
The page https://the-quiz-application.netlify.appis is loaded.
### Expected Output
The instructions `Only numbers (0-9)` should appear.
### Input
Click on the button `Math`
### Output
Works as expected
![Image over tested rule](./src/quiz-application/assets/testpictures/test-cases-1/test-case-1.2.png)

## 2.2 Loading the Geography Mode
### Preconditions
The page https://the-quiz-application.netlify.appis is loaded.
### Expected Output
The instructions `Only lower- and uppercase letters` should appear.
### Input
Click on the button `Geography`
### Output
Works as expected
![Image over tested rule](./src/quiz-application/assets/testpictures/test-cases-1/test-case-1.3.png)

## 2.3 Loading the Trick Questions Mode
### Preconditions
The page https://the-quiz-application.netlify.appis is loaded.
### Expected Output
The instructions `Only lower- and uppercase letters` should appear.
### Input
Click on the button `Trick Questions`
### Output
Works as expected
![Image over tested rule](./src/quiz-application/assets/testpictures/test-cases-1/test-case-1.4.png)

# Gameplay
## 3.1 Loading the Math Mode
### Preconditions
The page https://the-quiz-application.netlify.appis is loaded.
### Expected Output
The instructions `Only numbers (0-9)` should appear.
### Input
Click on the button `Math`
### Output
Works as expected
![Image over tested rule](./src/quiz-application/assets/testpictures/test-cases-1/test-case-1.2.png)

# Gameplay
## 3.1 Loading the Math Mode
### Preconditions
The page https://the-quiz-application.netlify.appis is loaded.
### Expected Output
The instructions `Only numbers (0-9)` should appear.
### Input
Click on the button `Math`
### Output
Works as expected
![Image over tested rule](./src/quiz-application/assets/testpictures/test-cases-1/test-case-1.2.png)

# Gameplay
## 3.1 Loading the Math Mode
### Preconditions
The page https://the-quiz-application.netlify.appis is loaded.
### Expected Output
The instructions `Only numbers (0-9)` should appear.
### Input
Click on the button `Math`
### Output
Works as expected
![Image over tested rule](./src/quiz-application/assets/testpictures/test-cases-1/test-case-1.2.png)