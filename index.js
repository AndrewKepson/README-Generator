const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    { type:'input', name: 'title', message: 'What is the title of your project?' }, 
    { type: 'input', name: 'description', message: 'Please provide a concise description of your project.' }, 
    { type: 'input', name: 'table of contents', message: 'Please provide a table of contents for your project.' },
    { type: 'input', name: 'installation', message: 'What is the installation process for this project?' },
    { type: 'input', name: 'usage', message: 'Describe the project usage.' },
    { type: 'input', name: 'license', message: 'License' },
    { type: 'input', name: 'contributing', message: 'Who are the project contributors?' },
    { type: 'input', name: 'tests', message: 'Tests' },
    { type: 'input', name: 'questions', message: 'If you have any relevant questions related to the project, please enter them.'},
];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (error) => {
        if(error) console.log(error);
    });
}

inquirer.prompt(questions)
    .then((answers) => {
        const answerValues = Object.values(answers);
        writeToFile('./Generated-README.md',createReadMe(answerValues));
        // answerValues.forEach((answer) => writeToFile('./Generated-README.md', `${answer}\n\n`))
    })
    .catch((error) => console.log(error));

const createReadMe = (answerValues) => {
    return `${renderBadge(answerValues[5])}\n\n
#Title \n\n ${answerValues[0]}
##Description \n\n ${answerValues[1]}
##Table of Contents \n\n ${answerValues[2]}
##Installation \n\n ${answerValues[3]}
##Usage \n\n ${answerValues[4]}
##License \n\n ${answerValues[5]}
##Contributors \n\n ${answerValues[6]}
##Tests \n\n ${answerValues[7]}
##Questions \n\n ${answerValues[8]} `
}

const renderBadge = (license) => {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
}