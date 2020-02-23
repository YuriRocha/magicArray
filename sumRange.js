function sumRange(arr){
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

module.exports = sumRange;