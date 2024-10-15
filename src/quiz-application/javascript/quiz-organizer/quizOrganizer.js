import { QuizQuestionFetcher } from "../quiz-question-fetcher/quizQuestionFetcher.js"

export class QuizOrganizer {
    constructor() {
        this.quizQuestionFetcher = new QuizQuestionFetcher

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
        this.sendUserDecision(type)

    }

    removeStartScreen() {
        let startScreen = document.querySelector("#starting-screen")
        startScreen.classList.toggle("hidden")
    }

    addQuestionScreen() {
        let quizElement = document.querySelector("#quiz-screen")
        quizElement.classList.toggle("hidden")

        // let inputElement = document.querySelector("#input-container")
        // inputElement.classList.toggle("hidden")
    }

    sendUserDecision(type) {
        this.quizQuestionFetcher.setQuestionType(type)
        this.quizQuestionFetcher.fetchQuestions(type)
    }
}