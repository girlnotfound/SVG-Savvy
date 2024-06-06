const inquirer = require('inquirer'); // import inquirer for asking questions
const fs = require('fs'); // import file system for writing files

// load shape modules from the 'lib' directory for creating shapes
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

// questions that will be asked to the user
const questions = [
    {
        type: 'input', // type of input
        name: 'text', // key for the answer
        message: 'What text would you like on your logo? Enter up to three characters:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be? (keyword or hexadecimal):',
    },
    {
        type: 'list', // provides list of options for the user to choose from 
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'triangle', 'square'], // shape options
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be? (keyword or hexadecimal):',
    },
];