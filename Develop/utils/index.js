// TODO: Include packages needed for this application
const fs = require('fs');
// per node documentation, this is required for working with files and directories
const path = require('path')
const inquirer = require('inquirer');

// this is to link the generateMarkdown code
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    // ask user for their github username (make sure this goes under a section titled: 'Questions')
    type: 'input',
    name: 'username',
    message: 'Enter GitHub Username',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your GitHub Username.');
            return false;
        }
    }
},
{
    // ask user for github repository name (this will be the Project Title (name: 'title'))
    type: 'input',
    name: 'title',
    message: 'Enter your Repository name',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your GitHub Repository name.');
            return false;
        }
    }
},

{
    // ask user for description of their github repository
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your GitHub repository',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Description must be provided.');
            return false;
        }
    }
},

{
    // ask user about licensing
    type: 'list',
    name: 'license',
    message: 'Please select a license from the list',
    choices: ['Apache License 2.0', 'GNU General Public License', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'No License'],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('A license must be selected.');
            return false;
        }
    }
},

{
    // ask user to provide installation instructions
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Install Instructions must be provided.');
            return false;
        }
    }
},

{
    // ask user to provide usage instructions
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instructions for your project',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Usage instructions must be provided.');
            return false;
        }
    }
},

{
    // ask user to describe testing process
    type: 'input',
    name: 'tests',
    message: 'Please describe how to test this project',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Description of testing must be provided.');
            return false;
        }
    }
},

{
    // ask user to explain how other developers can contribute
    type: 'input',
    name: 'contributing',
    message: 'Please list how others can contribute to this project',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Contribution must be explained.');
            return false;
        }
    }
},


{
    // ask user for contact info for questioning. This section should be called 'Questions' and include github Username from above
    type: 'input',
    name: 'questions',
    message: 'Please provide your email address as contact info for developers viewing your README',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Email address for others to use regarding questions must be provided.');
            return false;
        }
    }
},
/*{
    Template
    type: 'input',
    name: 'title',
    message: '',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('');
            return false;
        }
    }
},*/
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join('README.md', fileName, data, error => {
        // if error, record the error
        if (error) {
            console.log(error);
            return;
        } else {
            // return successful if no error occurred
            console.log('README.md file has now been created.')
        }
    })
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        if (answers) {
            console.log('Initialization has been successful')
        } else {
            console.log('Initialization has failed')
        }
        // Generate markdown based on answers and write data to file
        const data = generateMarkdown(answers)
        writeToFile('README.md', data);
    })
};

// Function call to initialize app
init();