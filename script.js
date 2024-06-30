const ages = [3,9,23,64,2,8,28,93];

const diff = ages[ages.length - 1] - ages[0];
console.log(diff);
 
 ages.push(65);
 const newdiff = ages[ages.length - 1] - ages[0];
 console.log(newdiff);

 let ageSum = 0;
 for (let i = 0; i < ages.length; i++){ 
  ageSum += ages[i];
 }
 const averageAge = ageSum / ages.length;
 console.log(averageAge);

 const names =["Sam", "Tommy", "Tim","Sally","Buck","Bob"];
 
 
 let lettersSum = 0;
 for (let i =0; i < names.length; i++){
lettersSum += names[i].length;
 }

 const avgLetters = lettersSum / names.length;
 console.log(avgLetters);

 let addNames = "";
 for (let i = 0; i < names.length; i++){
 addNames += names[i] + " ";
 }
 addNames = addNames.trim(); 
 console.log(addNames);

 const lastElement = ages [ages.length -1];

 const firstElement = ages [0];

 const nameLengths = [];
 for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
 }
 console.log(nameLengths);

 let nameLengthSum = 0;
 for (let i = 0; i < nameLengths.length; i++){
  nameLengthSum += nameLengths[i];
 }
 console.log(nameLengthSum);

 function addWord(word, n){
  let result = "";
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
 }

 function getfullName(firstName, lastName) {
 return `${firstName} ${lastName}`;
}

 function isSumGreaterThan100(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum > 100;
  
 }
  
function getAverage(array){
  let sum = 0;
  for ( let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
  }

 function isArrayGreater(array1, array2){
  return getAverage(array1) > getAverage(array2);
 }
 
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
