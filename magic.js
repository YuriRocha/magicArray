//TESTES
 var magicArray = require('./magicArray.js');

/*
 var result = magicArray.findElement([1, 3, 4, 5, 8, 9, 10], function(num) {
   return num % 2 === 0;
 });
*/
//var myArray = [2,5,10,55];
//console.log(magicArray.findAndRemove(myArray, 10));

const obj = {
  teste2: [{name:'Crowley', salary: 12}, {name: 'Regardie', salary: 12}],
  teste3: [{name: 'Paracelso', salary: 10, last: 1}],
  teste4: [{last: 2, first: 10, salary: 1}]
}

console.log(magicArray.sumTraversal(obj, 'salary'));
