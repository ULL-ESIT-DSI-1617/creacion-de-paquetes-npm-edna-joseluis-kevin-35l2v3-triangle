'use strict'
var Shape = require('../lib/triangle.js');
// var Triangle = require('@ednagc/ull-shape-triangle-ednagc');

describe("getArea", function() {
  it("Calculo del area de un triangulo correctamente. Objeto tipo Shape", function() {
    let a = new Shape({ width: 100, height: 50 }, 'Triangle');
    let s = a.getArea();
    s.should.match(/^5000$/);
  })
  it("Calculo del area de un triangulo correctamente. Objeto Triangle", function() {
    let a = new Triangle({ width: 100, height: 50 });
    let s = a.getArea();
    s.should.match(/^5000$/);
  })
});
