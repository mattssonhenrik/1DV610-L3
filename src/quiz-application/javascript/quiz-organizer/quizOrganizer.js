import { quizQuestionFetcher } from "../quiz-question-fetcher/quizQuestionFetcher"

export class QuizOrganizer {
    constructor () {
        this.quizQuestionFetcher = new quizQuestionFetcher

        document.querySelector("#math-button").addEventListener("click", () => {
            this.handleStartButtonClick("math")
        })
    
        document.querySelector("#geography-button").addEventListener("click", () => {
            this.handleStartButtonClick("geography")
        })
    
        document.querySelector("#trick-questions-button").addEventListener("click", () => {
            this.handleStartButtonClick("trickQuestions")
        })
    
        document.querySelector("#mix-button").addEventListener("click", () => {
            this.handleStartButtonClick("mix")
        })
    }

    handleStartButtonClick (type) {
        this.quizQuestionFetcher.setQuestionType(type)
        this.quizQuestionFetcher.fetchQuestions() // Really gotta start making some questions so we can start testing
    }
}