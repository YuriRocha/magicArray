function cut(arr){
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

module.exports = cut;