function slash(arr, howMany){
    arr.splice(0, howMany);
    return arr;
}

module.exports = slash;