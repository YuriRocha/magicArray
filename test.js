const magicArray = {
    sym: require('./sym'),
    sumRange: require('./sumRange'),
    getRange: require('./getRange'),
    bouncer: require('./bouncer'),
    groups: require('./groups'),
    cut: require('./cut'),
    indexInserted: require('./indexInserted'),
    subMaxNumber: require('./subMaxNumber'),
    isMutation: require('./isMutation'),
    slash: require('./slash'),
    getObject: require('./getObject'),
    rangeAlphabet: require('./rangeAlphabet'),
    uniteUnique: require('./uniteUnique'),
    findElement: require('./findElement'),
    findAndRemove: require('./findAndRemove'),
    sumTraversal: require('./sumTraversal')
};


var assert = require('assert');

describe('Magic Array', function() {
  describe("# magicArray.sym([1, 2, 3, 'magic' ], [1,3]) should return [ 2, 'magic' ]", async function() {
    it("sym()", function() {
      assert.deepStrictEqual(magicArray.sym([1, 2, 3, 'magic' ], [1,3]), [ 2, 'magic' ]);
    });
  });

  describe("# magicArray.sumRange([1, 4]) and magicArray.sumRange([4, 1]) should return 10", async function() {
    it("sym()", function() {
      assert.deepStrictEqual(magicArray.sumRange([1, 4]), 10);
      assert.deepStrictEqual(magicArray.sumRange([4, 1]), 10);
    });
  });

  describe("# magicArray.getRange([1, 10]) should return [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]", async function(){
      it("#getRange()", function(){
        assert.deepStrictEqual(magicArray.getRange([1, 10]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
      });
  });

  describe("# magicArray.bouncer([7, 'magic', '', false, 9, 0, 1, undefined, null, NaN]) should return [ 7, 'magic', 9, 1 ]", async function(){
    it("bouncer()", function(){
        assert.deepStrictEqual(magicArray.bouncer([7, 'magic', '', false, 9, 0, 1, undefined, null, NaN]), [ 7, 'magic', 9, 1 ]);
    });
  });

  describe("# magicArray.groups([1,'magic', 'array', 2, 3, 4], 2) should return [ [ 1, 'magic' ], [ 'array', 2 ], [ 3, 4 ] ]", async function(){
    it("groups()", function(){
        assert.deepStrictEqual(magicArray.groups([1,'magic', 'array', 2, 3, 4], 2), [ [ 1, 'magic' ], [ 'array', 2 ], [ 3, 4 ] ]);
    });
  });

  describe("# magicArray.cut(['tree', 'hamburger', 53], 'tree', 53) should return [ 'hamburger' ]", async function(){
    it("cut()", function(){
        assert.deepStrictEqual(magicArray.cut(['tree', 'hamburger', 53], 'tree', 53), [ 'hamburger' ]);
    });
  });

  describe("# magicArray.indexInserted([5, 3, 20, 21, 3], 4) should return 2", async function(){
    it("indexInserted()", function(){
        assert.deepStrictEqual(magicArray.indexInserted([5, 3, 20, 21, 3], 4), 2);
    });
   });

   describe("# magicArray.subMaxNumber([[5, 3, 20, 21, 3], [4,1,2],[10,1]]) should return [ 21, 4, 10 ]", async function(){
    it("subMaxNumber()", function(){
        assert.deepStrictEqual(magicArray.subMaxNumber([[5, 3, 20, 21, 3], [4,1,2],[10,1]]), [ 21, 4, 10 ]);
    });
   });

   describe("# magicArray.isMutation(['Alien', 'line']) should return true and magicArray.isMutation(['hello', 'hey']) should return false", async function(){
    it("isMutation()", function(){
        assert.deepStrictEqual(magicArray.isMutation(['Alien', 'line']), true);
        assert.deepStrictEqual(magicArray.isMutation(['hello', 'hey']), false);
    });
   });

   describe("# magicArray.slash([1, 2, 3, 1, 5], 2) should return [ 3, 1, 5 ]", async function(){
    it("slash()", function(){
        assert.deepStrictEqual(magicArray.slash([1, 2, 3, 1, 5], 2), [ 3, 1, 5 ]);
    });
   });

   describe("# magicArray.getObject(arr, { last: 'Capulet' }) should return [ { first: 'Mercutio', last: 'Capulet' },{ first: 'Tybalt', last: 'Capulet' } ]", async function(){
    var arr = [{ first: "Romeo", last: "Montague" },
          { first: "Mercutio", last: "Capulet" },
          { first: "Tybalt", last: "Capulet" }]

    it("getObject()", function(){
        assert.deepStrictEqual(magicArray.getObject(arr, { last: 'Capulet' }), [ { first: 'Mercutio', last: 'Capulet' },{ first: 'Tybalt', last: 'Capulet' } ]);
    });
   });

   describe("# magicArray.rangeAlphabet('a', 'f') should return [ 'a', 'b', 'c', 'd', 'e', 'f' ]", async function(){
    it("rangeAlphabet()", function(){
        assert.deepStrictEqual(magicArray.rangeAlphabet('a', 'f'), [ 'a', 'b', 'c', 'd', 'e', 'f' ]);
    });
   });

   describe("# magicArray.uniteUnique([1,2], [4,2], [3, 6, 1], [9]) should return [ 1, 2, 4, 3, 6, 9 ]", async function(){
    it("uniteUnique", function(){
        assert.deepStrictEqual(magicArray.uniteUnique([1,2], [4,2], [3, 6, 1], [9]), [ 1, 2, 4, 3, 6, 9 ]);
    });
   });

   describe("# magicArray.findElement([1, 3, 4, 5, 8, 9, 10], callback) should return 4", async function(){
    it("findElement()", function(){
        assert.deepStrictEqual(magicArray.findElement([1, 3, 4, 5, 8, 9, 10], function(num) {
            return num % 2 === 0;
          }), 4);
    });
   });

   describe("# magicArray.findAndRemove([2,5,10,55], 10) should return [2,5,55]", async function(){
    it("findAndRemove", function(){
        assert.deepStrictEqual(magicArray.findAndRemove([2,5,10,55], 10), [2,5,55]);
    });
   });

   describe("# magicArray.sumTraversal(obj, 'salary') should return 35", async function(){
    const obj = {
        teste2: [{name:'Crowley', salary: 12}, {name: 'Regardie', salary: 12}],
        teste3: [{name: 'Paracelso', salary: 10, last: 1}],
        teste4: [{last: 2, first: 10, salary: 1}]
    }

    it("sumTraversal()", function(){
        assert.deepStrictEqual(magicArray.sumTraversal(obj, 'salary'), 35);
    });
   });
});



