/*  
* Filename: sophisticated_code.js
* Description: This code demonstrates a sophisticated algorithm for finding the n-th Fibonacci number iteratively.
* Author: AI Developer
* Date: 2022-12-15
*/

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let a = 0;
  let b = 1;
  let result;

  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return result;
}

function calculateFibonacci() {
  const n = parseInt(prompt("Enter a number:"));

  if (isNaN(n)) {
    console.log("Invalid input!");
    return;
  }

  const fibonacciNumber = fibonacci(n);
  console.log(`The ${n}-th Fibonacci number is: ${fibonacciNumber}`);
}

calculateFibonacci();