function subMaxNumber(arr){
    var result = arr.map(function(element){
   	return element.reduce(function(prev, cur){
       	return (cur > prev) ? cur : prev;
       });
     });

     return result;
}

module.exports = subMaxNumber;