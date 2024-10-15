import { exportingInputFilter } from "../../input-processor/javascript/index.js"
import { QuizOrganizer } from "../javascript/quiz-organizer/quizOrganizer.js"

document.addEventListener('DOMContentLoaded', () => {
    exportingInputFilter()
    const quizOrganizer = new QuizOrganizer()
})