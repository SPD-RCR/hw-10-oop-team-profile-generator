const inquirer = require('inquirer');
const fs = require('fs');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the team manager Name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the team manager Employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the team manager Email Address?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the team manager Office Number?',
    },
    {
      type: 'list',
      name: 'newEmployee',
      message: 'Would you like to add another employee?',
      choices: ['Engineer', 'Intern', 'Finish building my team'],
  },
    {
      type: 'input',
      name: 'gitHub',
      message: 'What is their GitHub UserName?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school are they currently attending?',
    }
  ]);
};

const generateHTML = (answers) => 

`# ${answers.title}

`