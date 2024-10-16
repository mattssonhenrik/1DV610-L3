import { QuizQuestionFetcher } from "../quiz-question-fetcher/quizQuestionFetcher.js"
import { QuizQuestionDisplayer } from "../quiz-question-displayer/quizQuestionDisplayer.js"

export class QuizOrganizer {
    #questions
    #currentQuestion = 0
    constructor() {
        this.quizQuestionFetcher = new QuizQuestionFetcher
        this.quizQuestionDisplayer = new QuizQuestionDisplayer

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
            this.sendAnswerForProcess(inputValue)
            this.displayQuizQuestion(this.#questions)
            // this.updateNextQuestion(this.#questions)
        })
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

    getCurrentQuestion(questions) {
        if (this.#currentQuestion < 3) {
            let currentQuestion = questions[this.#currentQuestion].question
            console.log(this.#currentQuestion)
            this.#currentQuestion++
            return currentQuestion
        } else {
            console.log('no more questions!?')
        }
    }

    displayQuizQuestion(questions) {
        let currentQuestion = this.getCurrentQuestion(questions)
        this.quizQuestionDisplayer.updateQuizQuestion(currentQuestion)


        // this.quizQuestionDisplayer.updateQuizQuestion(questions)
    }

    // updateNextQuestion(questions) {
    //     updateQuizQuestion()
    //     this.#currentQuestion++
    // }

    sendAnswerForProcess(inputValue) {
        //implement
        console.log(inputValue)
    }
}