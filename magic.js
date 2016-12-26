//TESTES
var magicArray = require('./magicArray.js');

var result = magicArray.findElement([1, 3, 4, 5, 8, 9, 10], function(num) {
  return num % 2 === 0;
});

console.log(result);
//console.log(magicArray);
//console.log(Object.keys(magicArray).length);
