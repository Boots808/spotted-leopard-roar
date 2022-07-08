//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// questions array for user input

function userInput () {
return inquirer.prompt([
    {
        type: 'user input',
        name: 'title',
        message: 'Enter name of ReadME file',
},
    {
        type: 'user input',
        name: 'projectTitle',
        message: 'Please enter your project title',
},
    {
        type: 'user input',
        name: 'description',
        message: 'Please enter a description of your project (what, why, and how)',
    },
    {
       type: 'user input',
       name: 'installation',
       message: 'Please enter installation instructions for your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select License for Project from List',
        choices: ['Apache', 'Eclipse Marketplace', 'APM', 'GNU','IBM', 'Mozilla', 'Perl', 'None'] 
    },
    {
        type: 'user input',
        name: 'usage',
        message: 'Please provide instructions for use',
    },
    {
        type: 'user input',
        name: 'credits',
        message: 'Please enter project credits (collaboration, 3rd party assets, tutorial links etc.)',
    },
    {
        type: 'user input',
        name: 'features',
        message: 'Please list any current project features',
    },
    {
        type: 'user input',
        name: 'contributions',
        message: 'Please enter instructions for future contribution to project',
    },
    {
        type: 'user input',
        name: 'contact',
        message: 'Please enter your Github Username and Repo Link',
    },
    {
        type: 'user input',
        name: 'repoInfo',
        message: 'Please enter the name of your project repo with a link to your deployed page',
    },
])};
//end of questions array for user input

// function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md Has Successfully Been Created! .`))
}

// function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.title),(generateMarkdown(answers)));
}

// function call to initialize app
init();
