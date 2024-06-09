// This function will be called in index.js file within createLogo,

const Circle = require('./circle.js'); // import the Circle class
const Square = require('./square.js'); // import the Square class
const Triangle = require('./triangle.js'); // import the Triangle class

// match user response to shape class to make new shape
function shapeChoices(response) {

    if (response.shape === 'circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'square') {
        let userShape = new Square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'triangle') {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};

module.exports = shapeChoices; // export the shapeChoices function