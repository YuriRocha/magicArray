function sym(args){
    var sum = [];
    for(var i = 0; i < arguments.length; i++){
    		sum.push(arguments[i]);
    }
    return sum.reduce(function(prev, cur){
    	return diff(prev, cur);
    });

    function diff(arr1, arr2){
      var newArr = [];
      for(var i = 0; i < arr1.length; i++){
        var count = 0;
        for(var j = 0; j < arr2.length; j++){
          if(arr1[i] !== arr2[j]){
            count++;
          }
        }

        if(count == arr2.length){
        	newArr.push(arr1[i]);
        }
      }

       for(var i = 0; i < arr2.length; i++){
        var count = 0;
        for(var j = 0; j < arr1.length; j++){
          if(arr2[i] !== arr1[j]){
            count++;
          }
        }

        if(count == arr1.length){
        	newArr.push(arr2[i]);
        }
      }

      var unique = newArr.filter(function(item, pos) {
      	return newArr.indexOf(item) == pos;
  	})

      return unique;
    }
  }

  module.exports = sym;