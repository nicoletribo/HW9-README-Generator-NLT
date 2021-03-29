// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = () => 
    inquirer.prompt ([
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
            name: 'tableOfContents',
            message: 'Please add a Table of Contents.',
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
            type: 'input',
            name: 'license',
            message: 'Please select which license you would like to use.',
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
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

