import { QuizQuestions } from '../quiz-questions/quizQuestions.js'

/**
 * Fetches quiz questions based on the type of quiz.
 */
export class QuizQuestionFetcher {
    /**
     * Initializes a new instance of the QuizQuestionFetcher class.
     * Instantiates the QuizQuestions class to manage quiz questions.
     */
    constructor () {
        this.quizQuestions = new QuizQuestions()
    }

    /**
     * Fetches quiz questions based on the provided quiz type.
     * 
     * @param {string} type - The type of quiz (e.g., "math", "geography", "trickQuestions").
     * @returns {Array} - An array of quiz questions for the specified type.
     */
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
        }
    }
}