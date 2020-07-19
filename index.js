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
    fs.appendFileSync(fileName, data, (error) => {
        if(error) console.log(error);
    });
}

inquirer.prompt(questions)
    .then((answers) => {
        const answerValues = Object.values(answers);

        answerValues.forEach((answer) => writeToFile('./Generated-README.md', `${answer}\n\n`))
    })
    .catch((error) => console.log(error));