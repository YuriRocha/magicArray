function uniteUnique(arr){
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

module.exports = uniteUnique;