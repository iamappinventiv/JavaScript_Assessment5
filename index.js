Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
  
    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  
    return accumulator;
  };
  
  const numbers = [1, 2, 3, 4];
  const sum = numbers.myReduce((acc, cur) => acc + cur, 0);
  console.log(sum); 
  