import { QuizQuestionFetcher } from "../quiz-question-fetcher/quizQuestionFetcher.js"
import { QuizQuestionDisplayer } from "../quiz-question-displayer/quizQuestionDisplayer.js"
import { QuizUserInputHandler } from "../quiz-user-input-handler/quizUserInputHandler.js"

export class QuizOrganizer {
    #questions
    #currentQuestion = 0
    background
    
    constructor() {
        this.quizQuestionFetcher = new QuizQuestionFetcher
        this.quizQuestionDisplayer = new QuizQuestionDisplayer
        this.quizUserInputHandler = new QuizUserInputHandler(this) //DI of the quizOrganizer instant

        document.querySelector("#math-button").addEventListener("click", () => {
            this.handleStartButtonClick("math")
        })

        document.querySelector("#geography-button").addEventListener("click", () => {
            this.handleStartButtonClick("geography")
        })

        document.querySelector("#trick-questions-button").addEventListener("click", () => {
            this.handleStartButtonClick("trickQuestions")
        })

        document.querySelector(".submit-button").addEventListener("click", () => {
            const inputValue = document.querySelector(".filter").value
            this.sendAnswerForProcess(inputValue, this.#questions)
            setTimeout(() => {
                this.displayQuizQuestion(this.#questions)
            },800)
        })

        this.background = document.querySelector("body")
    }

    handleStartButtonClick(type) {
        this.removeStartScreen()
        this.addQuestionScreen()
        this.getQuizQuestions(type)
        this.displayQuizQuestion(this.#questions)
    }

    removeStartScreen() {
        let startScreen = document.querySelector("#starting-screen")
        startScreen.classList.toggle("hidden")
    }

    addQuestionScreen() {
        let quizElement = document.querySelector("#quiz-screen")
        quizElement.classList.toggle("hidden")
    }

    getQuizQuestions(type) {
        this.#questions = this.quizQuestionFetcher.fetchQuestions(type)
    }

    displayQuizQuestion(questions) {
        let currentQuestion = this.getCurrentQuestion(questions)
        this.quizQuestionDisplayer.updateQuizQuestion(currentQuestion)
    }

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

    sendAnswerForProcess(userAnswer, questions) {
        let correctAnswer = questions[this.#currentQuestion].answer
        this.quizUserInputHandler.processAnswer(userAnswer, correctAnswer)
        this.#currentQuestion++
    }

    correctAnswerEffects() {
        this.background.style.transition = "background-color 0.5s"
        this.background.style.backgroundColor = "lightgreen"
        this.revertBackGroundToWhite()
    }

    wrongAnswerEffects () {
        this.background.style.transition = "background-color 0.5s ease"
        this.background.style.backgroundColor = "salmon"
        this.revertBackGroundToWhite()
    }

    revertBackGroundToWhite() {
        setTimeout(() => {
            this.background.style.backgroundColor = "white"     
        }, 500)     
    }
}