"use strict";

var base = 1;
var exponent = 50;

var app = {
    pow: function(base, exponent){
        var result = base;

        for (var i = 1; i < exponent; i++){
            result *= base;
        }
        return result;
    }
};

module.exports = app;
