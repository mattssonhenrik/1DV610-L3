/**
 * Handles user input during the quiz, processing answers and triggering appropriate effects.
 */
export class QuizUserInputHandler {
    /**
     * Initializes a new instance of the QuizUserInputHandler class.
     * 
     * @param {Object} quizOrganizer - The instance of QuizOrganizer to trigger effects on correct or wrong answers.
     */
    constructor(quizOrganizer) {
        this.quizOrganizer = quizOrganizer
    }
    
    /**
     * Processes the user's answer by comparing it to the correct answer.
     * Triggers the appropriate effects based on whether the answer is correct or wrong.
     * 
     * @param {string} userAnswer - The answer provided by the user.
     * @param {string} correctAnswer - The correct answer for the current quiz question.
     */
    processAnswer (userAnswer, correctAnswer){
        let lowerCaseUserAnswer = userAnswer.toLowerCase()
        if (lowerCaseUserAnswer === correctAnswer) {
            this.correctAnswer()
        } else {
            this.wrongAnswer()
        }
    }

    /**
     * Converts the user's answer to lowercase.
     * 
     * @param {string} userAnswer - The answer provided by the user.
     * @returns {string} - The lowercase version of the user's answer.
     */
    answerToLowerCase(userAnswer) {
        return toLowerCase(userAnswer)
    }

    /**
     * Triggers the effects for a correct answer by calling the appropriate method in the QuizOrganizer.
     */
    correctAnswer() {
        this.quizOrganizer.correctAnswerEffects()
    }

    /**
     * Triggers the effects for a wrong answer by calling the appropriate method in the QuizOrganizer.
     */
    wrongAnswer () {
        this.quizOrganizer.wrongAnswerEffects()
    }
}


