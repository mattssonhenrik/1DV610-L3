export class QuizUserInputHandler {
    constructor(quizOrganizer) {
        this.quizOrganizer = quizOrganizer
    }
    
    processAnswer (userAnswer, correctAnswer){
        let lowerCaseUserAnswer = userAnswer.toLowerCase()
        if (lowerCaseUserAnswer === correctAnswer) {
            this.correctAnswer()
        } else {
            this.wrongAnswer()
        }
    }

    answerToLowerCase(userAnswer) {
        return toLowerCase(userAnswer)
    }

    correctAnswer() {
        this.quizOrganizer.correctAnswerEffects()
    }

    wrongAnswer () {
        this.quizOrganizer.wrongAnswerEffects()
    }
}


