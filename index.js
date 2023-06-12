// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const promptQuestion = [          
    {
        type: "input",
        name: "title",
        message: "Enter Project Title"
    },

    {
        type: "input",
        name:"description",
        message:"Please Provide a short description of your Project"
    },
        
    {
        type: "input",
        name:"installation",
        message:"Please add Installation Instructions",   
    },

    {
        type:"input",
        name:"usage",
        message:"Please Provide instructions and examples for Use",
    },

    {
        type:"input",
        name:"contribution",
        message:"Please add your Contribution Guidelines",
    },

    {
        type:"input",
        name:"test",
        message:"Please enter your test instructions",
    },
    
    {
        type:"list",
        name:"license",
        message:"Choose a Liscense",
        choices: [
            'None', 
            'Apache Liscense 2.0',
            'GNU General public License v3.0', 
            'MIT License', 
        ]
    },
    
    {
        type:"input",
        name:"username",
        message:"Please enter your GitHub Username ",
    },

    {
        type:"input",
        name:"email",
        message:"Please enter your email address ",
    },           
]

// TODO: Create a function to write README file
function writeReadmeFile (fileName, data) {
    const myData = genMarkdown(data)
    fs.writeFile (fileName, myData,(error) => error ? console.log(error) : console.log("Good JOB!"))   
    console.log(myData);
}

// TODO: Create a function to initialize app
async function init() {
const answers = await inquirer.prompt(promptQuestion)
console.log(answers)
    writeReadmeFile("README.md" , answers )
}

// Function call to initialize app
init();
