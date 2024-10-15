import { jest } from '@jest/globals'


jest.mock("../quiz-question-fetcher/quizQuestionFetcher.js", () => ({
    QuizQuestionFetcher: jest.fn().mockImplementation(() => ({
        setQuestionType: jest.fn(),
        fetchQuestions: jest.fn()
    }))
}))


import { QuizOrganizer } from "./quizOrganizer.js"
import { QuizQuestionFetcher } from "../quiz-question-fetcher/quizQuestionFetcher.js"


describe('quizOrganizerStartButtons', () => {
    let quizOrganizer

    beforeEach(() => {
        document.body.innerHTML = `
        <div id="starting-screen"></div>
        <div id="input-container"></div>
        <button id="math-button">Math</button>
        <button id="geography-button">Geography</button>
        <button id="trick-questions-button">Trick Questions</button>
        <button id="mix-button">Mix</button>`
        quizOrganizer = new QuizOrganizer()
    })



    afterEach(() => {
        jest.clearAllMocks()
    })


    test('Testing if clicks on the math button triggers setting the question type to math and calling the fetch answers functions', () => {
        const mathButton = document.querySelector("#math-button")
        mathButton.click()
        expect(quizOrganizer.quizQuestionFetcher.setQuestionType).toHaveBeenCalledWith('math')
        expect(quizOrganizer.quizQuestionFetcher.fetchQuestions).toHaveBeenCalledWith('math')
    })

    test('Testing if clicks on the geography button triggers setting the question type to geography and calling the fetch answers functions', () => {
        const geographyButton = document.querySelector("#geography-button")
        geographyButton.click()
        expect(quizOrganizer.quizQuestionFetcher.setQuestionType).toHaveBeenCalledWith('geography')
        expect(quizOrganizer.quizQuestionFetcher.fetchQuestions).toHaveBeenCalled()
    })

    test('Testing if clicks on the trick-questions button triggers setting the question type to trickQuetions and calling the fetch answers functions', () => {
        const trickQuestionButton = document.querySelector("#trick-questions-button")
        trickQuestionButton.click()
        expect(quizOrganizer.quizQuestionFetcher.setQuestionType).toHaveBeenCalledWith('trickQuestions')
        expect(quizOrganizer.quizQuestionFetcher.fetchQuestions).toHaveBeenCalled()
    })
})