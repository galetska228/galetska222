// Helper function to calculate the square of a number
function square(num) {
    return num * num;
  }
  
  // Helper function to check if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Main function to demonstrate the helper functions
  function main() {
    // Example usage of the square function
    const number = 5;
    const squaredNumber = square(number);
    console.log(`The square of ${number} is: ${squaredNumber}`);
  
    // Example usage of the isEven function
    const anotherNumber = 10;
    if (isEven(anotherNumber)) {
      console.log(`${anotherNumber} is even.`);
    } else {
      console.log(`${anotherNumber} is odd.`);
    }
  }
  
  // Call the main function to execute the code
  main();
  