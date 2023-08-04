Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback(accumulator, this[i], i, this);
      } else {
        accumulator = this[i];
      }
    }
    return accumulator;
  };
  
  const numbers = [1, 2, 3, 4];
  const sum = numbers.myReduce((total, currentNumber) => total + currentNumber);
  console.log(sum); 

 
  