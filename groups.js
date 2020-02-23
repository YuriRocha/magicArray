function groups(arr, size){
    var result = [];
    for(var i = 0; i < arr.length; i += size){
      	result.push(arr.slice(0 + i, size + i));
      }
      
    return result;
}

module.exports = groups;