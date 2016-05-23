var app = require('../js/script.js');

describe("incorrect data entry", function() {
  it("string", function() {
      var base;
      var exponent;
      expect(app.pow("a", 4)).toEqual(NaN);
      expect(app.pow("a", 40)).toEqual(NaN);
  });
});

describe("exponent > 1", function(){
    it("exponent > 1", function() {
      expect(app.pow(3, 1)).toBe(3);
      expect(app.pow(10, 1)).toBe(10);
    });
});
