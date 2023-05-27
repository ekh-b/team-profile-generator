// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


// ALSO INCLUDE:

// extend Employee class and just add the additonal info:

//school
//git school()
//getRole()- overide and return intern instead of emplpyees?


// Includes Employee class as a base and adds github ino to it

const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email,school) {

        super(name, id, email);
        this.school = school;
  
    }

// Get

getSchool() {

    return this.school;
}

// Return

getRole() {

    return 'Intern';

}

}



//EXPORT

module.exports = Intern;