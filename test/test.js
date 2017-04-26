'use strict'
var Triangle = require('../lib/triangle.js');
var Shape = require('@ull-edna-joseluis-kevin-35l2/ull-shape');

describe("getArea", function() {

  it("Creación objeto Shape", function(){
    let sh = new Triangle ({width: 100, height: 100});
    sh.should.not.undefined();
  })

  it("Calculo del area de un triangulo correctamente. Objeto tipo Shape", function() {
    let a = new Shape({ width: 100, height: 100 }, 'Triangle');
    let result = a.getArea();
    result.should.equal(5000);
  })

  it("Calculo del area de un triangulo correctamente. Objeto Triangle", function() {
    let a = new Triangle({ width: 100, height: 100 });
    let result = a.getArea();
    result.should.equal(5000);
  })


});
