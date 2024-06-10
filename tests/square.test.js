const Square = require('../lib/square'); // import the Square class

test('Square render method with color blue', () => {
    const shape = new Square(); // create a new Square instance
    shape.setColor("blue"); // set the color to blue
    // check if the rendered SVG matches the expected output
    expect(shape.render().replace(/\s+/g, ' ').trim()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" fill="blue"/> <text x="100" y="125" font-size="70" text-anchor="middle" fill=""></text> </svg>');
});