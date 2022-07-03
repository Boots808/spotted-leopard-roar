//DONE!! TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('questions');

// TODO: Create an array of questions for user input
const questions = [];
questions
    .prompt ({
        type: 'text',
        name: 'name',
        message: 'What is your project title?'
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();