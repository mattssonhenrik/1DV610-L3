import { QuizQuestions } from '../quiz-questions/quizQuestions.js'

export class QuizQuestionFetcher {
    #currentQuestionType
    // #arrayOfQuestions to return or display to quizQuestionDisplayer, another dependancy... 
    
    constructor () {
        this.#currentQuestionType = ''
        this.quizQuestions = new QuizQuestions()
    }

    // Do I even need this?
    setQuestionType (type) {
        if (type === 'math') {
            this.#currentQuestionType = 'math'
        } else if (type === 'geography') {
            this.#currentQuestionType = 'geography'
        } else if (type === 'trickQuestions') {
            this.#currentQuestionType = 'trickQuestions'
        } else if (type === 'mix') {
            this.#currentQuestionType = 'mix'
        } else {
            console.log('type must be math, geography, trickQuestions or mix')
            // change to a comment
            // do nothing for now
        }
    }

    fetchQuestions (type) {
        if (type === 'math') {
            let mathQuestions = this.quizQuestions.returnQuestions(type)
            console.log(mathQuestions)
            return mathQuestions
        } else if (type === 'geography') {
            let geographQuestions = this.quizQuestions.returnQuestions(type)
            console.log(geographQuestions)
            return geographQuestions
        } else if (type === 'trickQuestions') {
            let trickQuestions = this.quizQuestions.returnQuestions(type)
            console.log(trickQuestions)
            return trickQuestions
        } else {
            console.log('its not a string')
            // Throw some kind of error or should we do that with a try/catch wrapper?
        }
    }
}