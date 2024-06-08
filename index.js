const inquirer = require('inquirer'); // import inquirer for asking questions
const fs = require('fs'); // import file system for writing files

// load shape modules from the 'lib' directory for creating shapes
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

// questions that will be asked to the user
const questions = [
    {
        type: 'input', 
        name: 'text', 
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

// prompt the user with the defined questions
inquirer.prompt(questions).then(answers => {
    // extract user inputs from answers
    const { text, textColor, shape, shapeColor } = answers;
    let shapeInstance;
    // create the selected shape
    switch (shape) {
        case 'circle':
            shapeInstance = new Circle();
            break;
        case 'triangle':
            shapeInstance = new Triangle();
            break;
        case 'square':
            shapeInstance = new Square();
            break;
    }
    // set the color of the shape
    shapeInstance.setColor(shapeColor);
    // create the SVG content using template literals
     const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeInstance.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
    // write the generated SVG content to a file named 'logo.svg'
    fs.writeFileSync('logo.svg', svgContent.trim());
    // log a message to the console indicating the file has been created
    console.log('Generated logo.svg');
});