import { QuizQuestions } from '../quiz-questions/quizQuestions.js'

export class QuizQuestionFetcher {
    constructor () {
        this.quizQuestions = new QuizQuestions()
    }

    fetchQuestions (type) {
        if (type === 'math') {
            let mathQuestions = this.quizQuestions.returnQuestions(type)
            return mathQuestions
        } else if (type === 'geography') {
            let geographQuestions = this.quizQuestions.returnQuestions(type)
            return geographQuestions
        } else if (type === 'trickQuestions') {
            let trickQuestions = this.quizQuestions.returnQuestions(type)
            return trickQuestions
        } else {
            console.log('its not a string')
            // Throw some kind of error or should we do that with a try/catch wrapper?
        }
    }
}