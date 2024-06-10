const Triangle = require('../lib/triangle'); // import the Triangle class

test('Triangle render method with color blue', () => {
    const shape = new Triangle(); // create a new Triangle instance
    shape.setColor("blue"); //set the color to blue
    // check if the rendered SVG matches the expected output
    expect(shape.render().replace(/\s+/g, ' ').trim()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="100, 15 200, 200 0, 200" fill="blue"/> <text x="100" y="165" font-size="60" text-anchor="middle" fill=""></text> </svg>');
});