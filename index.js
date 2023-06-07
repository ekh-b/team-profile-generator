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

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


//Blank array to push data to

const teamMembers =[];

// ARRAY OF QUESTIONS- when prompted user input is required     //Need to check naming conventions match the page-template file


const startQuestions=[                                  //similar set up to licenses from readme
    {
        type: 'list',                                   //Need to call this section first or does a manager need to be added first
        message: 'What type of team member would you like to add?',
        name: 'MemberType',
        choices:[
        'Manager',
        'Engineer',
        'Intern',
        ]
    },

];

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

//CAPTURE DATA
//Need to capture data- data.name, similar to readme methlogy
//Do I need to get employee question data- or due to spread will they be included?- startQuestins doesn't highight

const getManagerData =() =>{

    inquirer.prompt(managerQuestions).then((data)=>{
        let manager = new Manager (data.Name, data.ID, data.Email, data.OfficeNumber); //why is ID yellow
        teamMembers.push(manager);     //pushed answers to teamMembers array     

    });
}

const getEngineerData =() =>{

    inquirer.prompt(engineerQuestions).then((data)=>{
        let engineer = new Engineer (data.Name, data.ID, data.Email, data.GitHub); //why is ID yellow
        teamMembers.push(engineer);          

    });
}

const getInternData =() =>{

    inquirer.prompt(internQuestions).then((data)=>{
        let intern = new Intern (data.Name, data.ID, data.Email, data.School); //why is ID yellow
        teamMembers.push(intern);          

    });
}



//  FUNCTION TO WRITE html FILE                 //Will these quesions run like the README - maybe put them in one array and just repeate the qestions to see if it works
                                                // jut write file, don't need to write to as line 20&21 create folder and file

function writeToFile(fileName, data) { // do I need to change fileName data to what I want the document to be called?- not changine data otherwise have to change iin other js file 

fs.writeFile(fileName, data ,function (err){  // Have to have all 3 elements in order to use write file function ( function, err and sucess?)
    
    if (err) console.log ("error");

    console.log ("Team html has been created- to view it, visit the 'output' folder")
});

}


//FUNCTION TO INITIALISE PROGRAMME              //Think I'll have to keep everything separate so that the tests can run
function init(){

    
}                                             //Write after each employee type not after all quesrions have been answered?

//FUNCTION CALL TO INITIALISE PROGRAMME

init();