function indexInserted(arr, num){
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

module.exports = indexInserted;