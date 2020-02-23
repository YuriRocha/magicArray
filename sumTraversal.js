function sumTraversal(obj, field){
    if (Array.isArray(obj)) {
      return obj.reduce((prev, current) =>{
          if(current.hasOwnProperty(field)){
            return prev + current[field];
          }
          return 0;

      } , 0);
    } else {
      let sum = 0;
      for(let subobj of Object.values(obj)) {
        sum += this.sumTraversal(subobj, field);
      }
      return sum;
    }
}

module.exports = sumTraversal;
