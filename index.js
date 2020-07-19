const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    { type:'input', name: 'title', message: 'Title' }, 
    { type: 'input', name: 'description', message: 'Description' }, 
    { type: 'input', name: 'table of contents', message: 'Table of Contents' },
    { type: 'input', name: 'installation', message: 'Installation' },
    { type: 'input', name: 'usage', message: 'Usage' },
    { type: 'input', name: 'license', message: 'License' },
    { type: 'input', name: 'contributing', message: 'Contributing' },
    { type: 'input', name: 'tests', message: 'Tests' },
    { type: 'input', name: 'questions', message: 'Questions'},
];

const writeToFile = (fileName, data) => {
    fs.appendFile(fileName, data, (error) => {
        if(error) console.log(error);
    });
}

inquirer.prompt(questions)
    .then((answers) => {
        const answerValues = Object.values(answers);

        answerValues.forEach((answer) => writeToFile('./README.md', `${answer}\n\n`))
    })
    .catch((error) => console.log(error));