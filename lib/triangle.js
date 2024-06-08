const Shape = require('./shapes'); // import the Shape base class

class Triangle extends Shape { // define the Triangle class that extends Shape
    render() {
        // return an SVG string for a triangle with specified points and fill color
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
module.exports = Triangle; // export the Triangle class
