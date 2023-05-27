// TODO: Write code to define and export the Employee class


// Do I need to extand the class to all of the employees?


// PARENT CLASS- EMPLOYEE

class Employee {                            // Why is it not class =??

    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;
    }


    // GET NAME- user input

    getName() {

        return this.name;
    }

    // GET ID- user input

    getId() {

        return this.id;

    }


    // GET EMAIL- user input

    getEmail() {

        return this.email;

    }

    // GET ROLE- returns all of the above?

    getRole() {

        return 'Employee';

    }


}



// EXPORT- keep putside class

module.exports = Employee;  // don't know why these aren't changed colours

//module.export = Employee;  - should it be export instead?