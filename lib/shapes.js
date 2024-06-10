class Shape { 
    constructor(shapeColor, text, textColor) {
      this.shapeColor = shapeColor || '';
      this.text = text || '';
      this.textColor = textColor || '';
  }
  setColor(color) {
        this.shapeColor = color;
    }
};

module.exports = Shape; // export the Shape class
