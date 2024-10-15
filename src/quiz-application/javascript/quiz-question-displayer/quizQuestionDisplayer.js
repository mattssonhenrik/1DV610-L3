export class QuizQuestionDisplayer {
    constructor () {
        this.quizQuestionElement = document.querySelector("#quiz-question")
    }

    updateQuizQuestion(questions) {
        const firstQuestion = questions[0].question
        this.quizQuestionElement.textContent=firstQuestion

        console.log(questions)
    }
}