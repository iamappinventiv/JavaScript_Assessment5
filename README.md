# JavaScript_Assessment5

### Overview - This assignment focuses on using JavaScript. The main concepts covered include event handling, and asynchronous programming. Throughout the assignment, I used various techniques such as callbacks, promises, and async/await to handle asynchronous operations. 
-------------
# Question 1
## What is the output of this code snippet?Why?
```js
console.log('start'); 
const promise1 = new Promise((resolve, reject) => { 
    console.log(1) 
    resolve(2) 
    console.log(3) }) 
 promise1.then(res => { console.log(res) }) 
 console.log('end');

 // Output:
start
1
3
end
2
 
 ```
### Explanation - 
This is because the `console.log('start')` is executed first, followed by the creation of the promise1 object. The function passed to the Promise constructor is executed immediately, so `console.log(1)` and `console.log(3)` are executed next. The `resolve(2)` call doesn’t do anything immediately, but it sets up the promise to be resolved with the value 2.

After the promise is created, the code will continue to execute, so `console.log('end')` is executed next. Finally, when the current call stack is empty, the event loop checks for any resolved promises and executes their `.then()` callbacks. In this case, the callback passed to` .then()` logs the resolved value of the `promise (2)` to the console.

-------------
-------------
# Question 2
## What is the output of this code snippet?Why?
```js
console.log('start') 
setTimeout(() => { console.log('setTimeout') }) 
Promise.resolve().then(() => { console.log('resolve') }) 
console.log('end')

 // Output:
start
end
resolve
setTimeout
 ```
 ### Explanation -
 This is because the `console.log('start')` is executed first, followed by the `setTimeout` function which schedules a callback to be executed after a delay of `0 milliseconds`. However, the `callback` is not executed immediately, but is added to the queue of tasks to be executed.

Next, the `Promise.resolve() `creates a resolved promise, and the `.then() `method execute or we can say schedule a `callback` to be executed when the `promise` is `resolved`. Since the `promise` is already `resolved`, the `callback` is added to the queue of microtasks to be executed.

After that, the `console.log('end')` is executed. At this point, all `synchronous `code has finished executing, so the event loop checks for any microtasks in the queue and executes them. In this case, the callback passed to .`then()` is executed, logging resolve to the console.

Finally, when there are no more microtasks in the queue, the event loop checks for any tasks in the queue and executes them. In this case, the callback passed to `setTimeout` is executed, logging `setTimeout` to the console.
 -------------
 -------------
 # Question 3
## What is callback hell? Write an example to convert callback hell to promise.
### Explanation-
Callback hell is when we have many functions that depend on the results of other functions, and we end up with a lot of nested code that is hard to read. A promise is a way to write this code in a cleaner and more readable way. Instead of nesting functions, we can chain them together using `.then()`.
I can Explain with eg here - 
 ```js
 // Callback Hell
function main(callback) {
  AsyncTask1(result1 => {
    AsyncTask2(result2 => {
      AsyncTask3(result3 => {
        callback(result3);
      });
    });
  });
}

// Using Promise
function main() {
  return new Promise((resolve, reject) => {
    AsyncTask1()
      .then(AsyncTask2)
      .then(AsyncTask3)
      .then(resolve);
  });
}

 
 ```
 * Code Explanation - we have a function main that takes a callback as an argument. This function calls AsyncTask1, which takes another callback as an argument. This pattern continues, resulting in nested callbacks.

In the second example, we use promises to avoid this nesting. The function main returns a new promise. Inside this promise, we call AsyncTask1, which returns a promise. We can then use the .then() method to chain the next function, AsyncTask2, which also returns a promise. We can continue chaining functions in this way until we reach the end of the chain, at which point we call resolve to indicate that the promise has been fulfilled.

 -------------
 -------------
 # Question: 4
 ## What is the output of this code snippet?Why?
```js
function createIncrement() { 
  let count = 0; 
  function increment() {
   count++; 
  } 
  let message = `Count is ${count}`; 
 function log() { 
  console.log(message); 
  } 
  return [increment, log]; 
 } 
  const [increment, log] = createIncrement(); 
  increment(); 
 increment(); 
 // Output :
 Count is 0
 
 ```
### Explanation-
The function `createIncrement` defines a variable count and sets its value to 0. It also defines two inner functions, `increment` and `log`. The `increment function` increases the value of `count by 1` each time it is called. The `log `function logs the value of the variable message, which is defined as a `template literal` that includes the value of `count`. then, the value of message is set when the function `createIncrement` is called, and it is not updated when the value of count changes.

When we call `createIncrement`, it returns an array containing the `two inner functions`, increment and log. We then use `destructuring assignment` to assign these functions to the variables increment and log, respectively.

We then call the increment function three times, which increases the value of `count to 3`. However, when we call the `log` function, it logs the value of the variable message, which was set when the function `createIncrement` was called and has not been updated since. Therefore, it logs the string Count is 0.

-------------
-------------
# Question: 5
### Extract the data from the API https://jsonplaceholder.typicode.com/users and print name, email id, phone number and company name from the extracted data.
#### Code :

```js
async function main() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    data.map((e)=>{
      console.log(`1.Name : ${e.name}`);
      console.log(`2.Email : ${e.email}`);
      console.log(`3.Phone Number : ${e.phone}`);
      console.log(`4.Company Name : ${e.company.name}`);
      console.log('<><><><><><><><>');
    })
   
   
  } catch (err) {
    console.log("Error: " + err.message);
    
  }
}

main();

// Output :

1.Name : Leanne Graham
2.Email : Sincere@april.biz
3.Phone Number : 1-770-736-8031 x56442
4.Company Name : Romaguera-Crona
<><><><><><><><>

/// continued to id 10 


```
#### Code Explanation - 
This code defines an asynchronous function `main` that fetches data from a URL using the `fetch function`. The data is in JSON format, so it is converted to a JavaScript object using the `.json()` method. The data is then mapped , and for each element, the name, email, phone number, and company name are logged to the console. If there is an error during the process, it is caught and logged to the `console`. Finally, the main function is called to run the code.

-------------
-------------
# Question 6 :
## Explain and write a code snippet for the following:-
- a. Promise.all()
- b. Promise.allSettled()
- c. Promise.any()
- d. promise.race()
### Answer :-
**Promise.all()** takes an array of promises as an argument and returns a new promise that resolves when all of the promises in the array have resolved, or rejects if any of the promises in the array reject. The resolved value is an array of the resolved values of the promises in the order they were passed.
In eg:
```js
const promise1 = new Promise((resolve, reject) => {
    const a = 1 + 1;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });
  const promise2 = new Promise((resolve, reject) => {
    const a = 1 + 1;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });
  const promise3 = new Promise((resolve, reject) => {
    const a = 1 + 1;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });



Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values)) 
  .catch((error) => console.log(error));

// Output:

[ 'success', 'success', 'success' ]
 ```
**Promise.allSettled()** takes an array of promises as an argument and returns a new promise that resolves when all of the promises in the array have either resolved or rejected. The resolved value is an array of objects that describe the outcome of each promise.
Eg: 
```js
const promise1 = new Promise((resolve, reject) => {
    const a = 1 + 1;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });
  const promise2 = new Promise((resolve, reject) => {
    const a = 1 + 1;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });
  const promise3 = new Promise((resolve, reject) => {
    const a = 1 + 1;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });
  // Output:
   [
  { status: 'fulfilled', value: 'success' },
  { status: 'fulfilled', value: 'success' },
  { status: 'rejected', reason: 'fail' }
]
```
**Promise.any()** takes an array of promises as an argument and returns a new promise that resolves as soon as one of the promises in the array resolves. If all of the promises in the array reject, then the returned promise rejects with an AggregateError.
```js
const promise1 = new Promise((resolve, reject) => {
    const a = 1 + 2;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });
  const promise2 = new Promise((resolve, reject) => {
    const a = 1 + 2;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });
  const promise3 = new Promise((resolve, reject) => {
    const a = 1 + 2;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });



Promise.any([promise1, promise2, promise3])
  .then((values) => console.log(values)) 
  .catch((error) => console.log(error));

// Output ;

[AggregateError: All promises were rejected] {
  [errors]: [ 'fail', 'fail', 'fail' ]
}

// If one of the promise will resolve it shows success 

const promise1 = new Promise((resolve, reject) => {
    const a = 1 + 1;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });
  const promise2 = new Promise((resolve, reject) => {
    const a = 1 + 1;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });
  const promise3 = new Promise((resolve, reject) => {
    const a = 1 + 1;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });



Promise.any([promise1, promise2, promise3])
  .then((values) => console.log(values)) 
  .catch((error) => console.log(error));

// Output :
'success'
```
**Promise.race()** takes an array of promises as an argument and returns a new promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

- Eg : 
```js
const promise1 = new Promise((resolve, reject) => {
    const a = 1 + 1;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });
  const promise2 = new Promise((resolve, reject) => {
    const a = 1 + 1;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });
  const promise3 = new Promise((resolve, reject) => {
    const a = 1 + 1;
  
    if (a == 2) {
      resolve('success');
    } else {
      reject('fail');
    }
  });



Promise.race([promise1, promise2, promise3])
  .then((values) => console.log(values)) 
  .catch((error) => console.log(error));

// Output :
'success'
```
-------------
-------------
# Question 7
## What are closures? Explain the output of below code snippet?
**closures** is a function that remembers the variables and the environment in which it was created, even if it is executed outside of that environment. This allows the function to access and manipulate variables that are outside of its local scope.

```js
"use strict"; 
function outer() { 
const a = 10; 
let b = 100; 
function inner() { 
let c = 20; 
console.log(`a=${a}, b=${b}, c=${c}`); 
b++; 
c++; 
} 
return inner; 
} 
const fnFirst = outer(); 
const fnSecond = outer(); 
console.log(fnFirst); 
fnFirst(); 
fnFirst(); 
fnFirst(); 
fnSecond();

// Output:

[Function: inner]
a=10, b=100, c=20
a=10, b=101, c=20
a=10, b=102, c=20
a=10, b=100, c=20
```
### Explaination -
In the given code , the outer function defines two variables, `a` and `b`, and an `inner function` inner. The` inner function` defines `a` variable `c`, logs the values of `a`, `b`, and `c`, and then increments the values of `b` and `c`. The `outer function` returns the `inner function`.

When we call the `outer function`, it returns a reference to the `inner function`. We assign this reference to the variable `fnFirst`. We then call the `outer function` again and assign the returned reference to the variable `fnSecond.`

When we log the value of `fnFirst`, it logs the source code of the `inner function`.

When we call the `fnFirst` function, it executes the code of the `inner function`.  this function is a `closure`, it remembers the values of `a` and `b` from when it was created. The first time we call it, it logs` a=10`, `b=100`,` c=20`. The values of `b` and `c` are then incremented. The second time we call it, it logs `a=10`, `b=101`, `c=20`. The third time we call it, it logs `a=10`, `b=102`, `c=20`.

When we call the `fnSecond` function, it executes the code of a new instance of the `inner function `that was created when we called the `outer function` for the second time. This instance has its own values for `a`, `b`, and `c`, so when we call it, it logs `a=10`, `b=100`, `c=20.`

In summary, this code demonstrates how closures can remember the values of variables from their environment even when they are executed outside of that environment.

-------------
-------------
# Question 8 
## What are generator functions? Explain it with the help of an example.
### Explaination -
In JS, generator functions are unique operations that support `pausing` and `restarting`. When called, they return a generator object and are defined using the `'function* syntax'`. The "generator function" can be run using the object's `".next()"` method up until it encounters the subsequent `"yield"` statement, at which point it pauses and returns the yielded value. You can continue the generator function's execution by invoking the `'.next()' `method once again.

#### Code Example :
```js
function* generateNum() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  
  const generator = generateNum();
  console.log(generator.next()); 
  console.log(generator.next()); 
  console.log(generator.next()); 
  console.log(generator.next()); 

  // Output:
 { value: 0, done: false }
 { value: 1, done: false }
 { value: 2, done: false }
 { value: 3, done: false }
  
  ```
- Code Eg.
in this example, we define a generator function `generateNum` that uses a while loop to yield an infinite sequence of numbers. When we call this function, it returns a generator object, which we assign to the variable generator. We can then call the `.next()` method on this object to get the next value in the sequence. Each time we call `.next()`, the generator function resumes execution from where it left off and runs until it reaches the next `yield` statement. 

-------------
-------------
# Question 9 
## Create a prototype of the reduce method.

```js
Array.prototype.myReduce = function(callback, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
      if (acc !== undefined) {
        acc = callback(acc, this[i], i, this);
      } else {
        acc = this[i];
      }
    }
    return acc;
  };
  
  const numbers = [1, 2, 3, 4];
  const sum = numbers.myReduce((total, currentNumber) => total + currentNumber);
  console.log(sum); 
  // Output:
  10
```
### Explaination -
In this example, we define a new method` myReduce` on the `Array prototype(Expalined below)``. This method takes two arguments: a `callback function` and an` initial value` for the `accumulator`. The method sets the value of the `accumulator` to the initial value.

The method then uses a for loop to iterate over the elements of the array. On each iteration, it checks if the `accumulator` is not undefined. If it is not undefined, it calls the `callback function` with four arguments: the current value of the `accumulator`, the current element of the array, the current index, and the array itself. The` callback function` can use these arguments to perform some computation and return a new value for the` accumulator`. If the `accumulator` is` undefined`, it is set to the current element of the array.
After all elements of the array have been processed, the method returns the final value of the `accumulator`.
In our example, i use this `myReduce` method to find the sum of an array of numbers. We pass a `callback function` that takes two arguments:` total` and `currentNumber`. The function returns the sum of these two values. When i call the` myReduce` method on our array of numbers, it `returns` the sum of all elements in the array and logged it.

**ArrayPrototype** Array.prototype is an object that represents the prototype of the Array constructor. In JS, all objects inherit properties and methods from their prototype, and the prototype of an object is determined by its constructor. This means that all arrays created using the Array constructor or the array literal syntax ([]) inherit properties and methods from Array.prototype.


-------------