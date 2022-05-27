const inquirer = require("inquirer");
const fs = require("fs");
// const { writeFile, copyFile } = require("./utils/generate-site.js");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const pageTemplate = require("./src/page-template");

var employees = [];

// creating Manager profile

const generate = function () {
  return inquirer
    .prompt([
      {
        // prompts for manager/name
        type: "text",
        name: "name",
        message: "What is the team manager's name?",
      },
      {
        // prompts for manager/id
        type: "text",
        name: "id",
        message: "What is the manager's ID?",
      },
      {
        // prompts for manager/email
        type: "text",
        name: "email",
        message: "What is the manager's email?",
      },
      {
        // prompts for manager/officeNumber
        type: "text",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])

    .then((managerData) => {
      const { name, id, email, officeNumber } = managerData;
      const manager = new Manager(name, id, email, officeNumber);
      employees.push(manager);
    });
};

// creating Menu for Employee and Intern

const menu = function () {
  return inquirer
    .prompt([
      {
        // menu prompt
        type: "list",
        message: "Do you want to add another employee?",
        name: "role",
        choices: ["Engineer", "Intern", "Exit"],
        when: ({ role }) => role != "Exit",
      },
      {
        // prompts for employee/name
        type: "text",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        // prompts for employee/id
        type: "text",
        name: "id",
        message: "What is the employee's ID?",
      },
      {
        // prompts for employee/email
        type: "text",
        name: "email",
        message: "What is the employee's email?",
      },
      {
        // prompts for employee/github
        type: "text",
        name: "github",
        message: "What is the employee's Github username?",
        when: (input) => input.role === "Engineer",
      },
      {
        // prompts for employee/school
        type: "text",
        name: "school",
        message: "where does the intern attended school?",
        when: (input) => input.role === "Intern",
      },
      {
        // prompts for adding another employee or intern
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Do you want to add another employee?",
        default: false,
      },
    ])

    .then((employeesData) => {
      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeesData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      employees.push(employee);
      if (confirmAddEmployee) {
        return menu(employees);
      } else {
        return employees;
      }
    });
};

generate()
  .then(menu)
  .then((data) => {
    const pageHTML = pageTemplate(data);
    fs.writeFile("./dist/index.html", pageHTML, (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(
          "Woow! your team profile is created. Please check (./dist/index.html)"
        );
      }
    });
  });
