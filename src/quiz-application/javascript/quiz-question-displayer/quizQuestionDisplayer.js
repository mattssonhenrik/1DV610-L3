export class QuizQuestionDisplayer {
    #quizQuestions
    constructor () {
        this.quizQuestions = []
        this.quizQuestionElement = document.querySelector("#quiz-question")
    }

    updateQuizQuestion(question) {
        this.quizQuestionElement.textContent=question
    }
}