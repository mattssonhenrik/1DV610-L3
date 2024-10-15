import { quizQuestionFetcher } from "../quiz-question-fetcher/quizQuestionFetcher.js"

export class QuizOrganizer {
    constructor () {
        this.quizQuestionFetcher = new quizQuestionFetcher

        document.querySelector("#math-button").addEventListener("click", () => {
            this.handleStartButtonClick("math")
            console.log('math')
        })
    
        document.querySelector("#geography-button").addEventListener("click", () => {
            this.handleStartButtonClick("geography")
            console.log('geo')
        })
    
        document.querySelector("#trick-questions-button").addEventListener("click", () => {
            this.handleStartButtonClick("trickQuestions")
            console.log('trick')
        })
    
        document.querySelector("#mix-button").addEventListener("click", () => {
            this.handleStartButtonClick("mix")
            console.log('mix')
        })
    }

    handleStartButtonClick (type) {
        this.quizQuestionFetcher.setQuestionType(type)
        this.quizQuestionFetcher.fetchQuestions() // Really gotta start making some questions so we can start testing
    }
}