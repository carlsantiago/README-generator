const inquirer = require ('inquirer');
const fs = require ('fs');
const axios = require('axios');
const generateREADME = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'project',
        message: `What is your project's name?`,
    },
    {
        type: 'input',
        name: 'description',
        message: `Please write a short description of your project:`,
    },
    {
        type: 'list',
        message: 'What kind of licence should your project have?',
        name: 'licence',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'dependencies',
        message: `What command should be run to install dependencies?`,
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: `What command should be run to run tests?`,
        default: 'npm tests'
    },
    {
        type: 'input',
        name: 'usage',
        message: `What does the user need to know about using the repo?`,
    },
    {
        type: 'input',
        name: 'contact',
        message: `What does the user need to know about contributing to the repo?`,
    },
];

inquirer
    .prompt(questions)
    .then(function(data){

        const profileUrl = `https://api.github.com/users/${data.username}`;

        axios.get(profileUrl).then(function(result){

            const github = {
                githubImage: result.data.avatar_url,
                profile: result.data.html_url,
                name: result.data.name
            };
     
            console.log("README has been generated!")
        fs.writeFile("./output/README.md", generateREADME(data,github), function(err){
            if (err){
                throw err;
              };
          });
        });
    });
