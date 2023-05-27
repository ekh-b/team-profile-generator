// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// ALSO INCLUDE:

// extend Employee class and just add the additonal info:

//github username
//git GIThub()
//getRole()- overide and return engineer instead of emplpyees?


// Includes Employee class as a base and adds github ino to it

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email,github) {    // add additional info to 

        super(name, id, email);
        this.github = github;
  
    }

// Get

getGithub() {

    return this.github;
}

// Return

getRole() {

    return 'Enginner';

}

}



//EXPORT

module.exports = Engineer;