const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {},

    ])
    .then((response) =>
    fs.appendFile('index.html', `
    
    `, err =>
    err ? console.log('Error - please try again!') : console.log('Readme created!')
    ));