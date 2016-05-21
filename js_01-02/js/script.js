var base = prompt('base: ');
var exponent = prompt('exponent: ');


function pow(base, exponent) {
    var result = base;

    for (var i = 1; i < exponent; i++) {
    result *= base;
}

    return result;

}

pow();

console.log('result = ', pow(base, exponent));
