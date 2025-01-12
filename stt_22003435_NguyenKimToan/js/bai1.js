// Data 1
let markMass1 = 78; // kg
let markHeight1 = 1.69; // meters
let johnMass1 = 92; // kg
let johnHeight1 = 1.95; // meters

// Data 2
let markMass2 = 95; // kg
let markHeight2 = 1.88; // meters
let johnMass2 = 85; // kg
let johnHeight2 = 1.76; // meters

// Function to calculate BMI
function calculateBMI(mass, height) {
  return mass / (height * height);
}

// Calculate BMI for Data 1
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// Calculate BMI for Data 2
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Create boolean variable to check if Mark has a higher BMI than John for both sets of data
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

// Output results in the console
console.log(`Data 1: Mark's BMI: ${markBMI1}, John's BMI: ${johnBMI1}`);
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI1}`);

console.log(`Data 2: Mark's BMI: ${markBMI2}, John's BMI: ${johnBMI2}`);
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI2}`);
