/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// original code
//console.log("Welcome to the bootcamp

// corrected code 
console.log("Welcome to the bootcamp");

// What’s Wrong?  
// There is a syntax error.  The code is missing "); characters at the end of the statement.  



console.log();

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

// original code
//let numbers = [2, 4, "eight"];
//for (let i = 0; i < numbers.length; i++) {
//  let doubled = numbers[i] * 2;
//  console.log(doubled);
//}

// corrected code
let numbers = [2, 4, "eight"];

for (let i = 0; i < numbers.length; i++) 
{
  if (!(Number.isNaN(numbers[i] * 2)))
  {
    let doubled = numbers[i] * 2;
    console.log(doubled);
  }  
}


// What’s Wrong?
// There is a runtime error.  There is a string in the array that should only contain
// numbers.  I will use Number.isNaN() to verify that the calculation will be successful.   


console.log();

// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

// original code
//function isPrime(num) {
//  if (num < 2) return false;
//  for (let i = 2; i < num; i++) {
//    if (num % i === 0) {
//      return true;  // Supposed to indicate num is NOT prime
//    }
//  }
//  return false; // Supposed to indicate num IS prime
//}

//console.log(isPrime(7)); // Expected true but gets false

// corrected code
function isPrime(num) 
{
  if (num < 2) 
  {
    return false;
  }

  for (let i = 2; i < num; i++) 
  {
    if (num % i === 0) 
    {
      return false;  // Supposed to indicate num is NOT prime
    }
  }

  return true; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false


// What’s Wrong?
// There is a logic error.  The return value for any number that is evenly divisible should be false.
// The final return value should be true to indicate that all validations checked out.


