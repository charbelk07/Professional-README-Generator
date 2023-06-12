// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "Apache Liscense 2.0": 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case `GNU General public License v3.0`:
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case `MIT License`:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    default:
      return `None`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(pizza) {
  return `
  # ${pizza.title}

  ## license
  ${renderLicenseBadge(pizza.license)}

  ## Description
  ${pizza.description}

  ## Table of Content
  - [LICENSE](#license)
  - [INSTALLATION](#installation)
  - [USAGE](#usage)
  - [CONTRIBUTION](#contribution)

  ## Installation
  ${pizza.installation}

  ## Contributions
  ${pizza.contribution}\n
  Contact: ${pizza.email}\n
  Github: ${pizza.username}
`;
}

module.exports = generateMarkdown;
