// Define an array of ages
const ages = [3,9,23,64,2,8,28,93];

// Calculate the difference between the last and first age in the array
const diff = ages[ages.length - 1] - ages[0];
console.log(diff); // Log the difference
 
// Add a new age to the end of the array
ages.push(65);
// Calculate the new difference between the last and first age in the array
const newdiff = ages[ages.length - 1] - ages[0];
console.log(newdiff); // Log the new difference

// Calculate the average age
let ageSum = 0;
for (let i = 0; i < ages.length; i++){ 
  ageSum += ages[i];
}
const averageAge = ageSum / ages.length;
console.log(averageAge); // Log the average age

// Define an array of names
const names =["Sam", "Tommy", "Tim","Sally","Buck","Bob"];
 
// Calculate the average number of letters per name
let lettersSum = 0;
for (let i =0; i < names.length; i++){
lettersSum += names[i].length;
}
const avgLetters = lettersSum / names.length;
console.log(avgLetters); // Log the average number of letters per name

// Concatenate all the names into a single string
let addNames = "";
for (let i = 0; i < names.length; i++){
 addNames += names[i] + " ";
}
addNames = addNames.trim(); 
console.log(addNames); // Log the concatenated names

// Get the last and first elements of the ages array
const lastElement = ages [ages.length -1];
const firstElement = ages [0];

// Calculate the length of each name and store the lengths in a new array
const nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths); // Log the array of name lengths

// Calculate the sum of the name lengths
let nameLengthSum = 0;
for (let i = 0; i < nameLengths.length; i++){
  nameLengthSum += nameLengths[i];
}
console.log(nameLengthSum); // Log the sum of the name lengths

// Define a function that repeats a word a given number of times
function addWord(word, n){
  let result = "";
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}

// Define a function that concatenates a first name and a last name
function getfullName(firstName, lastName) {
 return `${firstName} ${lastName}`;
}

// Define a function that checks if the sum of an array is greater than 100
function isSumGreaterThan100(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum > 100;
}

// Define a function that calculates the average of an array
function getAverage(array){
  let sum = 0;
  for ( let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

// Define a function that checks if the average of one array is greater than the average of another array
function isArrayGreater(array1, array2){
  return getAverage(array1) > getAverage(array2);
}

// Define a function that checks if a person will buy a drink
function willBuyDrink(isHotOutside, moneyInPocket) {
return isHotOutside && moneyInPocket > 10.50;
}

// Example of a custom function
// This function calculates the factorial of a given number
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

/**
 * This function generates a random compliment.
 *
 * @returns {string} - Returns a random compliment.
 *
 * The reason for creating this function is to provide a fun and positive user experience.
 * This can be useful in various scenarios, such as in user interfaces, chatbots, or games to engage users in a friendly manner.
 */
function generateCompliment() {
    let compliments = [
        "You're an awesome person!",
        "Your creativity is inspiring!",
        "You're a great problem solver!",
        "Your positivity is infectious!",
        "You're a fantastic learner!"
    ];

    let index = Math.floor(Math.random() * compliments.length);
    return compliments[index];
}
console.log(generateCompliment());  // Outputs: A random compliment
