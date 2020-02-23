function findAndRemove(arr, element){
    var index = arr.indexOf(element);
    if (index > -1) {
        arr.splice(index, 1);
    }

    return arr;
}

module.exports = findAndRemove;