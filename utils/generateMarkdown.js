// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ github, email, project, desciption, licence, dependencies, test, usage, contact }) => {

  var licenceImg = "";
  switch (licence) {
    case 'MIT':
      licenceImg = "https://img.shields.io/badge/Licence-MIT-brightgreen"
      break;
    case 'APACHE 2.0':
      licenceImg = "https://img.shields.io/badge/Licence-APACHE%202.0-brightgreen"
      break;
    case 'GPL 3.0':
      licenceImg = "https://img.shields.io/badge/Licence-GPL%203.0-brightgreen"
      break;
    case 'BSD 3':
      licenceImg = "https://img.shields.io/badge/Licence-BSD%203-brightgreen"
      break;
    case 'None':
    licenceImg = ""
    break;
  }

return `
  # ${project}
  ![Github licence](${licenceImg})
  
  ## Desciption
  
  ${desciption}
  
  ## Table of Content
  
  * [Installation](#Installation)
  
  * [Usage](#Usage)
  
  * [Licence](#Licence)
  
  * [Contributing](#Contributing)
  
  *[Test](#tests)
  
  *[Questions](#Questions)
  
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
}

module.exports = generateMarkdown;
