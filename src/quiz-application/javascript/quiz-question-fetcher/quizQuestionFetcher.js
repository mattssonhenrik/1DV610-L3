export class quizQuestionFetcher {
    #currentQuestionType
    
    constructor () {
        this.#currentQuestionType = ''
    }

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

    fetchQuestions () {
        if (type === 'math') {
            // Gotta get the questions for math
        } else if (type === 'geography') {
            // Gotta get the questions for geo
        } else if (type === 'trickQuestions') {
            // Gotta get the questions trick questions
        } else if (type === 'mix') {
            // Gotta get the questions of all types
        } else {
            // Throw some kind of error or should we do that with a try/catch wrapper?
        }
    }
}