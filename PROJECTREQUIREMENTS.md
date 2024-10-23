# Project Requirements: Quiz Application

## 1. Functional Requirements

### 1.1 Game play

- **Game Mode Selection:**  
    There will be three different game modes which the user can chose from.
  - **Math**
  - **Geography**
  - **Trick Questions**

### 1.2 Question Presentation

- **Randomized Questions:**  
  The game will present three random questions from the selected category, one at a time.
  
- **Question Display:**  
  Each question should will be dynamically displayed to the user.

### 1.3 Input Validation

- **Math Mode:**  
  The math mode will only accept numbers
  
- **Geography & Trick Questions Modes:**  
  Both Geopgraphy and Trick Questions modes will only accept lowercase and uppercase letters.

### 1.4 Real-Time Feedback

- **Input Field Validation:**
  - **Valid Input:**  
    As long as the input field consist of the correct input and is not empty, the input field will be green.    
  - **Invalid Input:**  
    If the input field recieves the wrong input, the input field will turn red.
  - **No input**
    When the input field is empty, the field will remain white.

### 1.5 Answer Evaluation

- **Immediate Feedback:**
  - **Correct Answer:**  
    The screen will transition from the old question to a green screen and from a green screen to a white screen with the new question.
    
  - **Incorrect Answer:**  
    The screen will transition from the old question to a red screen and from a red screen to a white screen with the new question.

### 1.6 User Instructions

- **Dynamic Instructions:**  
  The Quiz-application should display correct instructions for the input field depending on which mode is selected.

## 2. Non-Functional Product Requirements

### 2.1 User Interface

- **Intuitive Design:**  
  The interface should be user-friendly and intuitive to use.
  
- **Visual Appeal:**  
  Use of appropriate color schemes to make it more user friendly.

### 2.2 Performance

- **Real-Time Processing:**  
  Input validation and feedback should occur instantly with a small transition-effect without noticeable delay.

## 3. Organizational Requirements

### 3.1 Development

- **Technology Stack:**
  JavaScript, HTML, CSS.

### 3.2 Version Control

- **Git:**  
  Version control will be managed using Git with regular commits.
  
- **Commit Messages:**  
  Commits will have descriptive messages.

### 3.3 Code Standards

- **Coding Guidelines:**  
  Adherence to coding standards, including proper indentation, naming conventions, and modularization.

### 3.4 Documentation

- **In-Code Comments:**  
  Use of inline comments and JSDoc comments where necessary to explain complex logic.

## 4. External Requirements

### 4.1 Ethical Requirements

- **Inclusive Content:**  
  Ensure all quiz content is appropriate and non-discriminatory.
  
### 4.2 Legal & Standards Compliance

- **Privacy:**  
  No collection of personal data.

## Personal Information

- **Name:** Henrik Mattsson
- **Username:** hm222yj
- **Technologies:** HTML, CSS, JavaScript
