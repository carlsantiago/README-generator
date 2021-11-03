const generateMarkdown = ({ username, email, project, desciption, licence, dependencies, test, usage, contact },github) => {

  let licenceImg = "";
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
    licenceImg = "no"
    break;
  }

return `
  # ${project}
  ![Github licence](${licenceImg})
  
  ## Desciption
  
  ${desciption}
  
  ## Table of Content
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Licence](#licence)
  
  * [Contributing](#contributing)
  
  * [Test](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependecies, run the following command: 
  
  \`\`\`
  ${dependencies}
  \`\`\`
  
  ## Usage
  
  ${usage}
  
  ## Licence
  
  This project is licenced under the ${licence} licence.
  
  ## Contributing
  
  ${contact}
  
  ## Tests
  \`\`\`
  ${test}
  \`\`\`
  ## Questions
  
  - Email me at ${email}
  - Github https://www.github.com/${username}

---
© ${github.name} 
--
<img src="https://avatars.githubusercontent.com/${username}" alt="drawing" height="200" width="200"/>

  `;
}

module.exports = generateMarkdown;
