'use strict';

let Shape = require('@ull-edna-joseluis-kevin-35l2/ull-shape');

class Triangle extends Shape {
  /**
  * @construct Shape
  * @param {hash} options Alto y Ancho
  */
    constructor(options) {
      super(options)
    }

    /**
    * @function area
    * @return {number} Area de la figura
    */
    area() {
      return 0.5 * this.width * this.height;
    }
}
Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;
