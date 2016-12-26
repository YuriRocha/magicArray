function magicArray(){
  //diff
  this.diff = function(arr1, arr2){
    var newArr = [];
    for(var i = 0; i < arr1.length; i++){
      for(var j = 0; j < arr2.length; j++){
        if(arr1[i] == arr2[j]){
          arr1[i] = null;
          arr2[j] = null;
        }
      }
    }

    for(var k = 0; k < arr1.length; k++){
      if(arr1[k] != null){
        newArr.push(arr1[k]);
      }
    }
    for(var z = 0; z < arr2.length; z++){
      if(arr2[z] != null){
        newArr.push(arr2[z]);
      }
    }
    return newArr;
  }
  //sym
  this.sym = function(args){
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
  //sumRange
  this.sumRange = function(arr){
  var first = arr[0];
  var last = arr[1];
  var result = [];
  if(first < last){
  for(var i = first; i <= last; i++){
  	result.push(i);
  }
 }else{
 	for(var j = first; j >= last; j--){
  		result.push(j);
  	}
  }
  return result.reduce(function(prev, cur){
  		return cur + prev;
    });
  }
  //getRange
  this.getRange = function(arr){
  var first = arr[0];
  var last = arr[1];
  var result = [];
  if(first < last){
  for(var i = first; i <= last; i++){
  	result.push(i);
  }
 }else{
 	for(var j = first; j >= last; j--){
  		result.push(j);
  	}
  }
  return result;
  }
  //bouncer
  this.bouncer = function(arr){
    var result = arr.filter(function(element){
  		return element;
  	});
    	return result;
  }
  //groups
  this.groups = function(arr, size){
    var result = [];
    for(var i = 0; i < arr.length; i += size){
      	result.push(arr.slice(0 + i, size + i));
  	}
    return result;
  }
  //cut
  this.cut = function(arr){
    var arr = Array.prototype.slice.call(arguments[0]);
    var args = Array.prototype.slice.call(arguments)

    for(var i = 1; i < args.length; i++){
    	for(var j = 0; j < arr.length; j++){
       	if(args[i] == arr[j]){
           	delete arr[j];
           }
       }
    }

    return arr.filter(function(element){
    	return element !== undefined;
    });
  }
  //indexInserted
  this.indexInserted = function(arr, num){
    var insert = num;
    arr.push(insert);
    arr.sort(function(a, b){
    return a - b;
    });

    for(var i = 0; i < arr.length; i++){
       if(arr[i] == insert){
          return arr.indexOf(insert);
        }
    }
  }
  //subMaxNumber
  this.subMaxNumber = function(arr){
    var result = arr.map(function(element){
   	return element.reduce(function(prev, cur){
       	return (cur > prev) ? cur : prev;
       });
     });
     return result;
  }
  //isMutation
  this.isMutation = function(arr){
    var left = arr[0].toLowerCase();
  	var right = arr[1].toLowerCase();
  	var count = 0;

  	for(var i = 0; i < right.length; i++){
      	if(left.indexOf(right[i]) !== -1){
    		count += 1;
    		}
  	}
  	if(count == right.length ){
  		return true;
  	}else{
  		return false;
  	}
  }
  //slash
  this.slash = function(arr, howMany){
    arr.splice(0, howMany);
    return arr;
  }
  //getObject
  this.getObject = function(collection, source){
  var arr = [];
  var finalArr = [];
  var att = Object.keys(source); //a , c
  //var values = Object.values(source);// 1, 2, 2
  var values = Object.keys(source).map(function(key) {
    return source[key];
});
  collection.forEach(function(obj){
    for(var i = 0; i < values.length; i++){
     	if(obj.hasOwnProperty(att[i])){
        	if(obj[att[i]] == values[i]){
              arr.push(obj);
            }
        }
    }
  });

  arr.forEach(function(obj){
    var compare = Object.keys(obj);
    var temp = [];
    for(var j = 0; j < compare.length; j++){
      for(var z = 0; z < att.length ; z++){
        if(compare[j] == att[z]){
        	temp.push(compare[j]);
        }
      }

      if(temp.length >= att.length){
      	finalArr.push(obj);
      }
    }

  });
  return finalArr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  });
  }
  //rangeAlphabet
  this.rangeAlphabet = function(charA, charZ){
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
  }
  //uniteUnique
  this.uniteUnique = function(arr){
    var result = [];
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(el){
      for(var i = 0; i < el.length; i++){
    	   if(result.indexOf(el[i]) == -1){
    		     result.push(el[i]);
    	      }
          }
        });
    return result;
  }
  //findElement
  this.findElement = function(arr, func){
    var num = arr.filter(func);
    return num[0];
  }

}

module.exports = new magicArray();
