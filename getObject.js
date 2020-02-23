function getObject(collection, source){
    var arr = [];
    var finalArr = [];
    var att = Object.keys(source); 
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

    return finalArr.filter(function(elem, index, self){
      return index == self.indexOf(elem);
    });
}

module.exports = getObject;