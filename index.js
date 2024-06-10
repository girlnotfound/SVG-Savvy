const inquirer = require('inquirer'); // import inquirer for asking questions
const fs = require('fs'); // import file system for writing files

// load shape modules from the 'lib' directory for creating shapes
const shapeChoices = require('./lib/shapeChoices.js');
// color keywords array
const colorKeywords = require('./lib/colorChoices.js');

// questions that will be asked to the user
const questions = [
    {
        type: 'input', // type of input
        name: 'title', // key for the answer 
        message: 'What is the title for your SVG file?:',
         validate: (answer) => {
            if (!answer.trim()) {
                return "\n Title cannot be empty. Please enter a valid title.";
            }
            return true;
        }
    },
    {
        type: 'input', 
        name: 'text',  
        message: 'What text would you like on your logo? Enter up to three characters:',
        validate: (answer) => {
            if (answer.length > 3) {
                return "\n Text must be three characters or less! Please try again";
            }
            return true;
        }
    },
    {
        type: 'list', // provides list of options for the user to choose from 
        name: 'textColorChoice',
        message: 'What color would you like the text to be? Choose a color format:',
        choices: ['color keyword', 'hexadecimal'] // list options
    },
    // color keyword (validate with colorKeywords array)
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color keyword:",
        when: (answers) => answers.textColorChoice === 'color keyword',
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            if (colorKeywords.includes(answerLowercase)) {
                return true;
            }
            return "\n Please enter a valid color keyword";
        }
    },
    // hexadecimal (validate hexadecimal with RegEx pattern)
    {
        type: "input",
        name: "textColor",
        message: "Enter the text hexadecimal number (#CCCCCC):",
        when: (answers) => answers.textColorChoice === 'hexadecimal',
        validate: (answer) => {
            const hexRegEx = /^#[A-Fa-f0-9]{6}$/;
            if (!answer.match(hexRegEx)) {
                return "\n Please enter a valid hexadecimal";
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'list',
        name: 'shapeColorChoice',
        message: 'What color would you like the shape to be? Choose a color format:',
        choices: ['color keyword', 'hexadecimal']
    },
    // color keywords w/validation
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color keyword:",
        when: (answers) => answers.shapeColorChoice === 'color keyword',
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            if (colorKeywords.includes(answerLowercase)) {
                return true;
            }
            return "\n Please enter a valid color keyword";
        }
    },
    // hexadecimal option w/validation
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal number (#CCCCCC):",
        when: (answers) => answers.shapeColorChoice === 'hexadecimal',
        validate: (answer) => {
            const hexRegEx = /^#[A-Fa-f0-9]{6}$/;
            if (!answer.match(hexRegEx)) {
                return "\n Please enter a valid hexadecimal";
            }
            return true;
        }
    },
];

// function to create new SVG file using inquirer response and file system
function createLogo(title, response) {
    const svg = shapeChoices(response); // generate SVG content based on user response
    const fileName = `./generated-logos/${title}.svg`;
    fs.writeFile(fileName, svg, () => console.log(`Generated ${fileName}!`));  // write the SVG content to the file
}

// function to initialize, ask questions then createLogo using responses, and catch any errors
function init() {
    inquirer
        .prompt(questions) // ask user the questions
        .then((response) => {
            const { title } = response; // extract title from response
            createLogo(title, response); // create SVG file with the given title and response
        })
        .catch(err => {
            console.log(err); // log errors
        });
}

init(); // initialize 