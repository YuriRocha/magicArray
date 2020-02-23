function isMutation(arr){
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

module.exports = isMutation;