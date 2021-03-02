const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const myTeam = [];
const content = {};

function assembleTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "roleSelection",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern", "No more employees"],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.roleSelection) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          createTeam();
      }
    });

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Name?",
          name: "managerName",
        },

        {
          type: "input",
          message: "id?",
          name: "managerID",
        },

        {
          type: "input",
          message: "Email?",
          name: "managerEmail",
        },

        {
          type: "input",
          message: "Office number?",
          name: "managerOfficeNumber",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        myTeam.push(manager);
        assembleTeam();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Name?",
          name: "engineerName",
        },

        {
          type: "input",
          message: "Id?",
          name: "engineerID",
        },

        {
          type: "input",
          message: "Email?",
          name: "engineerEmail",
        },

        {
          type: "input",
          message: "Github username?",
          name: "gitHub",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.managerId,
          answers.managerEmail,
          answers.managergithub
        );
        myTeam.push(engineer);
        assembleTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Name?",
          name: "internName",
        },

        {
          type: "input",
          message: "Id?",
          name: "internID",
        },

        {
          type: "input",
          message: "Email?",
          name: "internEmail",
        },

        {
          type: "input",
          message: "School?",
          name: "internSchool",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        myTeam.push(intern);
        assembleTeam();
        // render(myTeam);
        // createTeam();
      });
  }

  function createTeam() {
    fs.writeFileSync(outputPath, render(myTeam));
  }
}

assembleTeam();

module.exports = myTeam;

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
