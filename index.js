const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// Initial questions for the Manager to fill out for himself/herself
const managerQuestions = () => {
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
      message: 'What is the team manager Office Number?'
    }
  ]);
};
let teamHtml

const managerHtml = (answers) => {
  teamHtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>My Team | Profile Generator</title>
  </head>
  <body>
      <div class="jumbotron jumbotron-fluid">
          <div class="container">
              <h1 class="display-4">My Team</h1>
          </div>
      </div>
      <div class="container">
          <div class="row">

              <div class="col col-12 col-sm-6 col-lg-4"  style="margin-bottom: 15px;">
                  <div class="card h-100 bg-primary text-white">
                      <div class="card-body">
                          <h2 class="card-title" id="name">${answers.name}</h2>
                          <h4 class="card-title" id="role">Manager</h3>
                          <div class="card bg-secondary text-secondary">
                              <ul class="list-group list-group-flush">
                                  <li class="list-group-item" id="id">id: ${answers.id}</li>
                                  <li class="list-group-item" id="email">Email: <a href="mailto:${answers.email}?cc=${answers.email}">${answers.email}</a></li>
                                  <li class="list-group-item" id="other">Office Number: ${answers.officeNumber}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>`;
  return teamHtml;
};

//Questions to Add ENGINEER 
const engineerQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Engineer Name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Engineer Employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Engineer Email Address?',
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'What is the Engineer GitHub UserName?',
    }
  ])
};

const engineerHtml = (answers) => {
  // const engineer = new Engineer (answers.name, answers.id, answers.email, answers.gitHub);
  teamHtml = teamHtml + `           <div class="col col-12 col-sm-6 col-lg-4" style="margin-bottom: 15px;">
                <div class="card h-100 bg-primary text-white">
                    <div class="card-body">
                        <h2 class="card-title" id="name">${answers.name}</h2>
                        <h4 class="card-title" id="role">Engineer</h3>
                        <div class="card bg-secondary text-secondary">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" id="id">id: ${answers.id}</li>
                                <li class="list-group-item" id="email">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
                                <li class="list-group-item" id="other">GitHub Username: <a href="https://github.com/${answers.gitHub}/" target="_blank" rel="noopener noreferrer">${answers.gitHub}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
  return teamHtml;
};

//Questions to Add INTERN 
const internQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Intern Name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Intern Employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Intern Email Address?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school is the Intern currently attending?',
    }
  ])
};

const internHtml = (answers) => {
  teamHtml = teamHtml + `           <div class="col col-12 col-sm-6 col-lg-4"  style="margin-bottom: 15px;">
                <div class="card h-100 bg-primary text-white">
                    <div class="card-body">
                        <h2 class="card-title" id="name">${answers.name}</h2>
                        <h4 class="card-title" id="role">Intern</h3>
                        <div class="card bg-secondary text-secondary">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" id="id">id: ${answers.id}</li>
                                <li class="list-group-item" id="email">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
                                <li class="list-group-item" id="other">School: ${answers.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
  return teamHtml;
};

// If/else
const addExit = () => {
  return inquirer.prompt([
    {
      type: 'confirm', // boolean default true
      name: 'addExit',
      message: 'Would you like to add another employee?'
    }
  ])
};

// If/else
const addNewEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employeeRole',
      message: 'What is the employee role?',
      choices: ['Engineer', 'Intern']
    }
  ]).then((answer) => {
    console.log('answer:', answer)
    if (answer.value = "Engineer") {
      return engineerQuestions().then((answers) => {
        engineerHtml(answers);
    })
   } else {
      return internQuestions().then((answers) => {
        internHtml(answers);
      })
    }
  })
};

const endHtml = () => {
  teamHtml = teamHtml + `   </div>
    </div>
</body>
</html>`;

  console.log('Successfully wrote to team.html')
  //.catch((err) => console.error(err));
};

const init = () => {
  managerQuestions().then((answers) => {
    managerHtml(answers);
    addExit().then((response) => {
      console.log('response:', response)
      if (response.addExit) {
        addNewEmployee()
      } else {
        endHtml()
        console.log('team html ', teamHtml)
        // write file

      // .then(() => writeFileAsync('./dist/team.html', generateHTML(teamHtml)))
      // .then(() => console.log('Successfully wrote to team.html'))
        process.exit(0)
      }
    })
  });
};

init();

// const init = () => {
//   promptManager()
//     .then((answers) => writeFileAsync('./dist/team.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to team.html'))
//     .catch((err) => console.error(err));
// };

// init();