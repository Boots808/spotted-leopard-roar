//DONE!! TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//const licenses = ['Apache', 'GNU', 'BSD', 'Boost','Eclipse', 'IBM', 'None']

// TODO: Create an array of questions for user input
function userInput () {
return inquirer.prompt([
    {
        type: 'user input',
        name: 'title',
        message: 'Enter title of ReadME file Wanted',
},
    {
        type: 'user input',
        name: 'projectTitle',
        message: 'Please enter your project title',
},
    {
        type: 'user input',
        name: 'projectDescription',
        message: 'Please enter a description of your project (what, why, and how)',
    },
    {
       type: 'user input',
       name: 'projectInstallation',
       message: 'Please enter installation instructions for your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select License for Project from List',
        choices: ['Apache', 'Eclipse Marketplace', 'APM', 'ORE','MIT', 'EPL-2.0', 'NPM', 'None'] 
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
        name: 'projectFeatures',
        message: 'Please list any project features',
    },
    {
        type: 'user input',
        name: 'projectContributions',
        message: 'Please enter instructions for future contribution to project',
    },
    {
        type: 'user input',
        name: 'projectContact',
        message: 'Please enter your Github username',
    },
    {
        type: 'user input',
        name: 'projectRepo',
        message: 'Please enter the name of your project repo',
    },
])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md Has Successfully Been Created! .`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.title),(generateMarkdown(answers)));
}

// Function call to initialize app
init();

//resource for common open source licenses: https://opensource.org/licenses/category
//resouce for MarkDown license Badges: https://shields.io/category/license
//resource for license badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba