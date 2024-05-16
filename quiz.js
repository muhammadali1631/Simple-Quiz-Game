#! /usr/bin/env node
import inquirer from 'inquirer';
const quizQuestions = await inquirer.prompt([
    {
        question: 'What is the capital of France?',
        choices: ['Paris', 'London', 'Berlin', 'Rome'],
        answer: 'Paris'
    },
    {
        question: 'What is the largest animal?',
        choices: ['Elephant', 'Blue whale', 'Giraffe', 'Hippo'],
        answer: 'Blue whale'
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        choices: ['Harper Lee', 'Jane Austen', 'Mark Twain', 'Charles Dickens'],
        answer: 'Harper Lee'
    }
]);
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
async function startQuiz() {
    console.log('Welcome to the Quiz Game!');
    console.log('Answer the following questions:');
    shuffleArray(quizQuestions);
    let score = 0;
    for (const question of quizQuestions) {
        const { answer } = await inquirer.prompt({
            type: 'list',
            name: 'answer',
            message: question.question,
            choices: question.choices
        });
        if (answer === question.answer) {
            console.log('Correct!');
            score++;
        }
        else {
            console.log(`Incorrect! The correct answer is: ${question.answer}`);
        }
    }
    console.log(`Quiz ended. Your score: ${score}/${quizQuestions.length}`);
}
// Start the quiz
startQuiz();
