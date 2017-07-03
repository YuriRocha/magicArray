//TESTES
 var magicArray = require('./magicArray.js');

/*
 var result = magicArray.findElement([1, 3, 4, 5, 8, 9, 10], function(num) {
   return num % 2 === 0;
 });
*/
var myArray = [2,5,10,55];
 console.log(magicArray.findAndRemove(myArray, 10));
