import { QuizQuestionFetcher } from "../quiz-question-fetcher/quizQuestionFetcher.js"
import { QuizQuestionDisplayer } from "../quiz-question-displayer/quizQuestionDisplayer.js"
import { QuizUserInputHandler } from "../quiz-user-input-handler/quizUserInputHandler.js"
import { InputRule } from '../../../input-processor/javascript/input-rules/inputRules.js'
import { InputProcessor } from '../../../input-processor/javascript/input-processor/inputProcessor.js'
import { OutputTextToBrowser } from '../../../input-processor/javascript/output-text-to-browser/outputTextToBrowser.js'


/**
 * Organizes the quiz by fetching questions, handling input, and processing answers.
 */
export class QuizOrganizer {
    #questions
    #currentQuestion = 0
    background
    
    /**
     * Initializes a new instance of the QuizOrganizer class.
     * Sets up dependencies and event listeners for different quiz buttons.
     */
    constructor() {
        this.quizQuestionFetcher = new QuizQuestionFetcher
        this.quizQuestionDisplayer = new QuizQuestionDisplayer
        this.quizUserInputHandler = new QuizUserInputHandler(this)
        this.ruleHandler = new InputRule
        this.inputProcessor = new InputProcessor(this.ruleHandler)
        this.outputTextToBrowser = new OutputTextToBrowser(this.ruleHandler)
        

        document.querySelector("#math-button").addEventListener("click", () => {
            this.setOnlyNumbersForInput()
            this.handleStartButtonClick("math")
        })

        document.querySelector("#geography-button").addEventListener("click", () => {
            this.setOnlyLowerAndUpperCaseForInput()
            this.handleStartButtonClick("geography")
        })

        document.querySelector("#trick-questions-button").addEventListener("click", () => {
            this.setOnlyLowerAndUpperCaseForInput()
            this.handleStartButtonClick("trickQuestions")
        })

        document.querySelector(".submit-button").addEventListener("click", () => {
            const inputValue = document.querySelector(".filter").value
            const inputElement = document.querySelector(".filter")
            this.sendAnswerForProcess(inputValue, this.#questions)
            setTimeout(() => {
                this.displayQuizQuestion(this.#questions)
                inputElement.value= ''
                inputElement.dispatchEvent(new CustomEvent('keyPressed', {
                    bubbles:true
                }))
            },1300)
        })

        this.background = document.querySelector("body")
    }

    /**
     * Handles the start button click, removes the start screen, adds the question screen, 
     * and fetches quiz questions based on the quiz type.
     * 
     * @param {string} type - The type of quiz (e.g., "math", "geography", "trickQuestions").
     */
    handleStartButtonClick(type) {
            this.removeStartScreen()
            this.addQuestionScreen()
            this.getQuizQuestions(type)
            this.displayQuizQuestion(this.#questions)
    }

    /**
     * Removes the start screen by toggling the "hidden" class.
     */
    removeStartScreen() {
        let startScreen = document.querySelector("#starting-screen")
        startScreen.classList.toggle("hidden")
    }

    /**
     * Adds the question screen by toggling the "hidden" class.
     */
    addQuestionScreen() {
        let quizElement = document.querySelector("#quiz-screen")
        quizElement.classList.toggle("hidden")
    }

    /**
     * Fetches quiz questions from the QuizQuestionFetcher.
     * 
     * @param {string} type - The type of quiz.
     */
    getQuizQuestions(type) {
        this.#questions = this.quizQuestionFetcher.fetchQuestions(type)
    }

    /**
     * Displays the current quiz question using the QuizQuestionDisplayer.
     * 
     * @param {Array} questions - The array of quiz questions.
     */
    displayQuizQuestion(questions) {
        let currentQuestion = this.getCurrentQuestion(questions)
        this.quizQuestionDisplayer.updateQuizQuestion(currentQuestion)
    }

    /**
     * Retrieves the current question based on the current question index.
     * 
     * @param {Array} questions - The array of quiz questions.
     * @returns {string} - The current question.
     */
    getCurrentQuestion(questions) {
        if (this.#currentQuestion < 3) {
            let currentQuestion = questions[this.#currentQuestion].question
            return currentQuestion
        } else {
            this.removeStartScreen()
            this.addQuestionScreen()
            this.#currentQuestion = 0
        }
    }

    /**
     * Sends the user's answer for processing by comparing it to the correct answer.
     * 
     * @param {string} userAnswer - The user's answer.
     * @param {Array} questions - The array of quiz questions.
     */
    sendAnswerForProcess(userAnswer, questions) {
        let correctAnswer = questions[this.#currentQuestion].answer
        this.quizUserInputHandler.processAnswer(userAnswer, correctAnswer)
        this.#currentQuestion++
    }

    /**
     * Applies visual effects for a correct answer (changes background to light green).
     */
    correctAnswerEffects() {
        this.background.style.transition = "background-color 0.5s"
        this.background.style.backgroundColor = "lightgreen"
        this.revertBackGroundToWhite()
    }

    /**
     * Applies visual effects for a wrong answer (changes background to salmon).
     */
    wrongAnswerEffects () {
        this.background.style.transition = "background-color 0.5s ease"
        this.background.style.backgroundColor = "salmon"
        this.revertBackGroundToWhite()
    }

    /**
     * Reverts the background color to white after a brief delay.
     */
    revertBackGroundToWhite() {
        setTimeout(() => {
            this.background.style.backgroundColor = "white"     
        }, 500)     
    }

    /**
     * Configures the input rules to accept only numbers.
     */
    setOnlyNumbersForInput(){
        this.ruleHandler.lowerAndUpperLetters = false
        this.ruleHandler.numbers = true
        this.inputProcessor.updateRules(this.ruleHandler)
        this.outputTextToBrowser.checkRules()
    }


    /**
     * Configures the input rules to accept only lowercase and uppercase letters.
     */
    setOnlyLowerAndUpperCaseForInput() {
        this.ruleHandler.lowerAndUpperLetters = true
        this.ruleHandler.numbers = false
        this.inputProcessor.updateRules(this.ruleHandler)
        this.outputTextToBrowser.checkRules()
    }
}