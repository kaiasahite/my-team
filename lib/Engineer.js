// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

// Inheritance with class syntax
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email); //passing parameters from parent
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

//export class
module.exports = Engineer;
