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

// ARRAY OF QUESTIONS- when prompted user input is required    


const menuQuestions=[                                  
    {
        type: 'list',                                
        message: 'What would you like to do next?',
        name: 'MainMenu',
        choices:[
        'Add Engineer',
        'Add Intern',
        'Finish building the team',
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
        name: 'id',
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

const engineerQuestions = [
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
        let manager = new Manager (data.Name, data.id, data.Email, data.OfficeNumber); 
        teamMembers.push(manager);     //pushed answers to teamMembers array 
        getMainMenu() ;   //to prompt back to starting qs- need to delacre/define this 
                                //need to prompt menu questions- switching and breaking to ask qs in order
    });
}

const getEngineerData =() =>{

    inquirer.prompt(engineerQuestions).then((data)=>{
        let engineer = new Engineer (data.Name, data.id, data.Email, data.GitHub); 
        teamMembers.push(engineer); 
        getMainMenu() ;           

    });
}

const getInternData =() =>{

    inquirer.prompt(internQuestions).then((data)=>{
        let intern = new Intern (data.Name, data.id, data.Email, data.School); 
        teamMembers.push(intern); 
        getMainMenu() ;           

    });
}

//Need to get it to ask wquestions in the right order/ offer to add differnt types of team members

 //Will these quesions run like the README - maybe put them in one array and just repeate the qestions to see if it works
                                               
 // jut write file, don't need to write to as line 20&21 create folder and file

 //backtick not in right place, can't use MenUReturn as it causes probelms- don't know why it's asking for it (= was missing)

 //need to  make sure it matches the menu list


 //  FUNCTION TO WRITE html FILE  

 //break = semi colon ;
 //case= colon :

const getMainMenu =()=> {       
    
    inquirer.prompt(menuQuestions).then((data) => {
    switch (data.MainMenu){
        case "Add Engineer":
        getEngineerData();
        break;
        case "Add Intern":
        getInternData();                    
        break;
        case "Finish Building the team":
        generateHTML();
        break;

    }


});

}
getManagerData ();              //Where does manager data go?

//FUNCTION TO CALL RENDER?

const generateHTML = () => {          //had problems when using function
let createHTML= render(teamMembers);     //empty arrat
fs.writeFile(outputPath, createHTML, (err)=>
err? console.log (err) : console.log ("Team profile file has been created- to view it, visit the 'output' folder"));

}

// function writeToFile(fileName, data)
// fs.writeFile(fileName, data ,function (err){
//     if (err) console.log ("error");
//     console.log ("Team profile file has been created- to view it, visit the 'output' folder")
// });


              
// function writeToFile(fileName, data) { // do I need to change fileName data to what I want the document to be called?- not changine data otherwise have to change iin other js file 

//     fs.writeFile(fileName, data ,function (err){  // Have to have all 3 elements in order to use write file function ( function, err and sucess?)
        
//         if (err) console.log ("error");
    
//         console.log ("README.md file has been created- to view it, visit the 'GeneratedFile' folder")
//     });

//Difference between const and functin?

//FUNCTION TO INITIALISE PROGRAMME             

//FUNCTION CALL TO INITIALISE PROGRAMME

