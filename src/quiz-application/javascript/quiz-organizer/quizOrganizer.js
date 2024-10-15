import { QuizQuestionFetcher } from "../quiz-question-fetcher/quizQuestionFetcher.js"
import { QuizQuestionDisplayer } from "../quiz-question-displayer/quizQuestionDisplayer.js"

export class QuizOrganizer {
    #questions
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
        this.quizQuestionDisplayer.updateQuizQuestion(questions)
    }
}