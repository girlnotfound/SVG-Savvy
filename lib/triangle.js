const Shape = require('./shapes'); // import the Shape base class

class Triangle extends Shape { // define the Triangle class that extends Shape
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);  
    };
    render() {
        // return an SVG string for a triangle with specified position, vertices, and fill color
        return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="100" y="165" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = Triangle; // export the Triangle class