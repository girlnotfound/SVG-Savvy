const Shape = require('./shapes'); // import the Shape base class

class Circle extends Shape { // define the Circle class that extends Shape
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        // return an SVG string for a circle with specified position, radius, and fill color
        return  `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};
module.exports = Circle; // export the Circle class
