// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer

        const promptQuestion = [          
            {
                type: "input",
                name: "readMeTitle",
                message: "Enter Project Title"
            },

            {
                type: "input",
                name:"readmeDescription",
                message:"Please Provide a short description of your Project"
            },

            {
                type: "input",
                name:"readMeInstallation",
                message:"Please add Installation Instructions",   
            },

            {
                type:"input",
                name:"readmeUsage",
                message:"Please Provide instructions and examples for Use",


            },

            {
                type:"input",
                name:"readmeContribution",
                message:"Please add your Contribution Guidelines",

            }     
        ]
    inquirer.prompt(promptQuestion).then((answers) => {

        const generateMarkdown = generateMarkdown(answers);
    });
    

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    fs.writeFile('readme.md', 'process.argv[2]', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

fs.writeFile('readme.md', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
