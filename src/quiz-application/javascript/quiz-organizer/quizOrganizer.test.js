import { jest } from '@jest/globals'


jest.mock("../quiz-question-fetcher/quizQuestionFetcher.js", () => ({
    quizQuestionFetcher: jest.fn(() => ({
        setQuestionType: jest.fn(),
        fetchQuestions: jest.fn()
    }))
}))




import { QuizOrganizer } from "./quizOrganizer.js"
import { quizQuestionFetcher } from "../quiz-question-fetcher/quizQuestionFetcher.js"


describe('quizOrganizerStartButtons', () => {
    let quizOrganizer

    beforeEach(() => {
        document.body.innerHTML = `
        <button id="math-button">Math</button>
        <button id="geography-button">Geography</button>
        <button id="trick-questions-button">Trick Questions</button>
        <button id="mix-button">Mix</button>`
        quizOrganizer = new QuizOrganizer()
    })



    afterEach(() => {
        jest.clearAllMocks()
    })


    test('Testing if clicks on the math button triggers setting the question type to Math and calling the fetch answers functions', () => {
        const mathButton = document.querySelector("#math-button")

        mathButton.click()
        expect(quizOrganizer.quizQuestionFetcher.setQuestionType).toHaveBeenCalledWith('math')
        expect(quizOrganizer.quizQuestionFetcher.fetchQuestions).toHaveBeenCalled()
    })
})