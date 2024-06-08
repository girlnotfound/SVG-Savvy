class Shape { 
    constructor() {
        this.color = ''; // initialize color property
    }
    setColor(color) {
        this.color = color; // set the color property
    }
    render() {
        throw new Error('render() method must be implemented by subclass'); // error if render is not defined in subclass
    }
}
module.exports = Shape; // export the Shape class
