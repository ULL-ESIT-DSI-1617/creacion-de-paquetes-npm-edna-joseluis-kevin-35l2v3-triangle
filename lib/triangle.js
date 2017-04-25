let Shape = require('@ednagc/ull-shape-ednagc');

class Triangle extends Shape {
  /**
  * @construct Shape
  * @param {hash} options Alto y Ancho
  */
    constructor(options) {
      super(options)
    }

    /**
    * @function getArea
    * @return {number} Area de la figura
    */
    area() {
      return 0.5 * this.width * this.height;
    }
}
Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;
