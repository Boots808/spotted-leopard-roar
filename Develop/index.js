//DONE!! TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('./utils');
const licenses = ['Apache', 'GNU', 'BSD', 'MIT','MPL 2.0', 'EPL-2.0', 'None']

// TODO: Create an array of questions for user input
//const questions = [
return inquirer.prompt([
    {
        type: 'user input',
        name: 'projectTitle',
        message: 'Please enter your project title?',
},
    {
        type: 'user input',
        name: 'project description',
        message: 'Please enter a description of your project (what, why, and how)',
    },
    {
       type: 'user input',
       name: 'project installation',
       message: 'Please enter installation instructions for your project',
       choices: ['Apache', 'Eclipse Marketplace', 'APM', 'ORE','MIT', 'EPL-2.0', 'NPM', 'None']
    },
    {
        type: 'user list',
        name: 'project license',
        message: 'Select License for Project from List'
    }
    {
        type: 'user input',
        name: 'project usage',
        message: 'Please provide instructions for use',
    },
    {
        type: 'user input',
        name: 'project credits',
        message: 'Please enter project credits (collaboration, 3rd party assets, tutorial links etc.)',
    },
    {
        type: 'user input',
        name: 'project features',
        message: 'Please list any project features',
    },
    {
        type: 'user input',
        name: 'project contribution',
        message: 'Please enter instructions for future contribution to project',
    },
    {
        type: 'user input',
        name: 'project github username'
        message: 'Please enter your Github username',
    },
    {
        type: 'user input',
        name: 'project repo name'
        message: 'Please enter the name of your project repo',
    },
]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('Successfully created ReadMe!')
    })

}

// TODO: Create a function to initialize app
function init() => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.catch(err => {
    console.log(err);
})


//resource for common open source licenses: https://opensource.org/licenses/category
//resouce for MarkDown license Badges: https://shields.io/category/license