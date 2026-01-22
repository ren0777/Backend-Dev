// console.log('This is the NODE index.js file');

// console.log("Hello, World!");

const task=require('./task'); //module export
console.log(task.add(5,10));
console.log(task.subtract(10,5));
console.log(task.multiply(5,10));
console.log(task.divide(10,2));