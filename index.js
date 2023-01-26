// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    }, {
        type: 'input',
        name: 'github username',
        message: 'What is your GitHub username?',
    }, {
        type: 'input',
        name: 'github link ',
        message: 'What is your GitHub link?',
    }, {
        type: 'input',
        name: 'email address',
        message: 'What is your email address?',
    }, {
        type: 'input',
        name: 'project title',
        message: 'What is title of your project?',
    }, {
        type: 'input',
        name: 'description',
        message: 'Please enter a description?',
    }, {
        type: 'input',
        name: 'license',
        message: 'Please choose a license to use?',
        choices: ['MIT', 'Apache2', 'GNUGPLv3', 'GNUGPLv2', 'ISC']
    }, {
        type: 'input',
        name: 'install',
        message: 'Please enter the installation instructions for your project?',
    }, {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information of the repository?',
    }, {
        type: 'input',
        name: 'test',
        message: 'Please enter what commands need to used to run tests?',
    }, {
        type: 'input',
        name: 'contributor',
        message: 'Please enter any guidelines for any future users to contribute to this repository?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((data) => {
            const markdown = generateMarkdown(data)
            fs.writeFile('generated-README.md', markdown, function (err) {
                if (err) {
                    console.log('file not created', err)
                } else {
                    console.log('New README.md created!')
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })

}

// Function call to initialize app
init();
