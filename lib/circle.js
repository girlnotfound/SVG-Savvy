const Shape = require('./shapes'); // import the Shape base class

class Circle extends Shape { // define the Circle class that extends Shape
    render() {
        // return an SVG string for a circle with specified position, radius, and fill color
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}
module.exports = Circle; // export the Circle class
