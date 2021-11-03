// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ github, email, project, desciption, licence, dependencies, test, usage, contact }) =>
 `
  # ${project}
  ![Github licence]()
  
  ## Desciption
  
  ${desciption}
  
  ## Table of Content
  
  * [Installation] (#installation)
  
  * [Usage] (#usage)
  
  * [Licence] (#licence)
  
  * [Contributing] (#contributing)
  
  *[Test] (#tests)
  
  *[Questions] (#questions)
  
  ## Installation
  
  To install necessary dependecies, run the following command: 
  
  
  ${dependencies}
  
  
  ## Usage
  
  ${usage}
  
  ## Licence
  
  This project is licenced under the ${licence} licence.
  
  ## Contributing
  
  ${contact}
  
  ## Tests
  
  ${test}
  
  ## Contact me at ${github} @ GitHub, ${email} , 
  `;


module.exports = generateMarkdown;

