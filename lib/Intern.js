// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Inheritance with class syntax
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email); //passing parameters from parent
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

//export class
module.exports = Intern;
