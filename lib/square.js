const Shape = require('./shapes'); // import the Shape base class

class Square extends Shape { // define the Square class that extends Shape
    render() {
        // return an SVG string for a square with specified position and fill color
        return `<rect x="70" y="30" width="160" height="160" fill="${this.color}" />`;
    }
}
module.exports = Square; // export the Square class
