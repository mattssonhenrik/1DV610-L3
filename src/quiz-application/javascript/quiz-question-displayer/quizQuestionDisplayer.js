/**
 * Handles the display of quiz questions in the UI.
 */
export class QuizQuestionDisplayer {
    #quizQuestions

    /**
     * Initializes a new instance of the QuizQuestionDisplayer class.
     * Selects the DOM element where the quiz question will be displayed.
     */
    constructor () {
        this.quizQuestions = []
        this.quizQuestionElement = document.querySelector("#quiz-question")
    }

    /**
     * Updates the displayed quiz question in the UI.
     * 
     * @param {string} question - The quiz question to be displayed.
     */
    updateQuizQuestion(question) {
        this.quizQuestionElement.textContent=question
    }
}