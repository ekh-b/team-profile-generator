// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.



// ALSO INCLUDE:

// extend Employee class and just add the additonal info:

//office number
//git office number()
//getRole()- overide and return manager instead of emplpyees?


// Includes Employee class as a base and adds github ino to it

const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, OfficeNumber) {

        super(name, id, email);
        this.OfficeNumber = OfficeNumber;
  
    }

// Get

getOfficeNumber() {

    return this.OfficeNumber;
}

// Return

getRole() {

    return 'Manager';

}

}



//EXPORT

module.exports = Manager;