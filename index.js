// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Employeed = parent class

//Creating managers calss want to add more stuff- like the office number

// Need to have questions array

//Call on the other js pages in the lib folder

//DEPENDENCIES

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");// Will this folder generate? or do i need to create it?
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// ARRAY OF QUESTIONS- when prompted user input is required     //Need to check naming conventions match the page-template file

//Employee questions:

const employeeQuestions = [                                 //Is this all one big array or do I need saprte ones and then call them x4?
    {
        type: 'input',                                     //Tyes is lowercase
        message: 'Please enter employee name',            //Cannot use plural word for employee as it uses a apostrophe/backtick
        name: 'Name',
    },

    {
        type: 'input',
        message: 'Please enter employee ID',
        name: 'ID',
    },

    {
        type: 'input',
        message: 'Please enter employee email address',
        name: 'Email',
    },


];

//Manager questions                     //Use spread syntax to add additional questions

const managerQuestions = [

    ...employeeQuestions,
    {
        type: 'input',
        message: 'Please enter office number',      //Number for a rom or a phine number??
        name: 'OfficeNumber',                       //Don't think i can have a space- not sure if it needs to be like const upper and lowercase??
    },

    


];

//Engineer questions:

const engineerQuestion = [
    ...employeeQuestions,

    {
        type: 'input',
        message: 'Please enter GitHub username',
        name: 'GitHub',
    },


];


//Intern questions:

const internQuestions= [

    ...employeeQuestions,
    {
        type: 'input',
        message: 'Please enter school name',
        name: 'School',
    },


];


//  FUNCTION TO WRITE html FILE                 //Will these quesions run like the README - maybe put them in one array and just repeate the qestions to see if it works

//FUNCTION TO INITIALISE PROGRAMME              //Think I'll have to keep everything separate so that the tests can run
function init(){

    
}                                             //Write after each employee type not after all quesrions have been answered?

//FUNCTION CALL TO INITIALISE PROGRAMME

init();