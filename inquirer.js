const inquirer = require('inquirer');

inquirer.prompt([{
  type: 'list',
  name: 'abc',
  message: 'Please choose xxx: ',
  choices: [
    'foo',
    'bar'
  ]
}]).then(answer => {
  console.log(answer);
});