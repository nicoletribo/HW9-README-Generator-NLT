// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');


// Array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please include installation instuctions for the user.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for the user.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines for the user.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instructions for the user.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select which license you would like to use.',
            choices: ['Apache', 'Boost', 'MIT', 'Mozilla','None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email Address',
        },
];

// The function that writes a README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();

