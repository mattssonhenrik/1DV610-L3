export class QuizQuestionDisplayer {
    #quizQuestions
    constructor () {
        this.quizQuestions = []
        this.quizQuestionElement = document.querySelector("#quiz-question")
    }

    updateQuizQuestion(question) {

        // Change the mumbojumo below to something similiar but in each function below and call from QuizOrganizer?
        // const firstQuestion = questions[0].question
        // this.quizQuestionElement.textContent=firstQuestion

        // console.log(questions)
        console.log('is this triggered?')
        this.quizQuestionElement.textContent=question

        /*
        showQuestionOne()
        showQuestionTwo()
        showQuestionthree()
        */
    }
}