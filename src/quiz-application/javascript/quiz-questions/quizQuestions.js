/**
 * Manages quiz questions for different quiz types (math, geography, trick questions).
 */
export class QuizQuestions {
    #questions = {}

    /**
     * Initializes a new instance of the QuizQuestions class.
     * Predefines sets of questions for different quiz types.
     */
    constructor () {
        this.#questions = {
            math: [
                {question: 'A man has 5 sons, each son has a sister, how many daughters does he have?', answer: '1'},
                {question: 'A phone and a charger costs 150, the phone costs 100 more than the charger, what does the charger cost?', answer: '25'},
                {question: 'There were 10 fishes swimming in a tank, 4 drowned and 3 died from other reasons, how many fishes were left in the tank', answer: '10'},
                {question: 'A grandad, 2 fathers and 2 sons were going to the movies, how many tickets did they buy?', answer: '3'},
                {question: 'When Bob was 8 his sister was half his age, when Bob turned 40, how old was his sister then?', answer: '36'},
                {question: 'If 3 cats can catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes?', answer: '3'},
                {question: 'How many seconds is it in a day?', answer: '86400'},
                {question: 'Which number can you multiply with any number and always get the same result?', answer: '0'}
            ],
            geography: [
                {question: 'Which country has the most Islands?', answer: 'sweden'},
                {question: 'What is the capital of Canada?', answer: 'ottawa'},
                {question: 'What is the capital of Australia?', answer: 'canberra'},
                {question: 'Which country is the largest country in the world?', answer: 'russia'},
                {question: 'Which is the largest island in the world?', answer: 'greenland'},
                {question: 'Which state of USA is the largest one in area?', answer: 'alaska'},
                {question: 'In which country is Mount Everest?', answer: 'nepal'},
                {question: 'Where is Matterhorn located?', answer: 'schweiz'},
                {question: 'Which is the capital of New Zeeland?', answer: 'wellington'},
                {question: 'Which is the capital of South Korea?', answer: 'seoul'}
            ],
            trickQuestions: [
                {question: 'Poor people have it, rich people need it?', answer: 'nothing'},
                {question: 'What travels around the world but stays in the same spot?', answer: 'stamp'},
                {question: 'What is so delicate, that saying its name breaks it?', answer: 'silence'},
                {question: 'What do you see once in a year, twice in a week, but only twice in forever?', answer: 'e'},
                {question: 'What word in the dictionary is spelled incorrectly?', answer: 'incorrectly'},
                {question: 'The more you take, the more you leave behind...What am I', answer: 'footsteps'},
                {question: 'What gets wet when drying?', answer: 'towel'},
                {question: 'What is it that no man ever saw, which never was, but always will be?', answer: 'tomorrow'},
                {question: 'I can only live where there is light, but I die if the light shines on me...What am I?', answer: 'shadow'},
                {question: 'If you have me, you want to share me. If you share me, you do not have me...What am I?', answer: 'secret'}
            ]
        }
    }

    /**
     * Returns a randomized subset of quiz questions for the specified quiz type.
     * 
     * @param {string} type - The type of quiz (e.g., "math", "geography", "trickQuestions").
     * @returns {Array} - A randomized list of quiz questions.
     */
    returnQuestions(type) {
        let questionsList = this.getQuestions(type)
        let questionsToReturn = this.randomizeQuestions(questionsList)
        return questionsToReturn
    }

    /**
     * Retrieves the list of questions for the specified quiz type.
     * 
     * @param {string} type - The type of quiz (e.g., "math", "geography", "trickQuestions").
     * @returns {Array} - An array of questions for the specified quiz type.
     */
    getQuestions (type) {
        const questionsList = this.#questions[type]
        return questionsList
    }

    /**
     * Randomizes the order of questions and returns a subset of 3 random questions.
     * 
     * @param {Array} questionsList - The array of quiz questions to randomize.
     * @returns {Array} - An array containing 3 random quiz questions.
     */
    randomizeQuestions (questionsList) {
        let trackedIndexes = []
        let questionsToReturn = []
        for (let i = 0; i < 3;) {
            let randomNumber = this.getRandomNumber(questionsList)

            if (!trackedIndexes.includes(randomNumber)) {
                questionsToReturn.push(questionsList[randomNumber])
                trackedIndexes.push(randomNumber)
                i++
            }
        }
        return questionsToReturn
    }

    /**
     * Generates a random index for selecting a question.
     * 
     * @param {Array} questionsList - The array of quiz questions.
     * @returns {number} - A random index within the range of the questions list.
     */
    getRandomNumber (questionsList) {
        const randomNumber = Math.floor(Math.random() * questionsList.length)
        return randomNumber
    }
}