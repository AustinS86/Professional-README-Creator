//TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    }, {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    }, {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }, {
        type: 'input',
        name: 'title',
        message: 'What is title of your project?',
    }, {
        type: 'input',
        name: 'description',
        message: 'Please enter a description?',
    }, {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license to use? (Please choose one)',
        choices: ['ISC', 'MIT', 'GNUGPLv3', 'APACHE2']
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
//function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((data) => {
            const markdown = generateMarkdown(data)
            fs.writeFile('generated-README.md', markdown, function (err) {
                if (err) {
                    console.log('file not created', err)
                } else {
                    console.log('README created!')
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })

}

// Function call to initialize app
init();
