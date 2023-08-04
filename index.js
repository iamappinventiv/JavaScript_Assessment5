// In readme
Array.prototype.myReduce = function(callback, initialValue) {
    let result = initialValue;
   
    for (let i = 0; i < this.length; i++) {
      if (result !== undefined) {
        result = callback(result, this[i], i, this);
      } else {
        result = this[i];
      }
    }
    return result;
  };
  
  const numbers = [1, 2, 3, 4];
  const sum = numbers.myReduce((total, currentNumber) => total + currentNumber,0);
  console.log(sum); 
  

 
  