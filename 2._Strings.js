// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
// ANDET løsning: const addedNumbers = parseFloat(numberOne) + parseFloat(numberTwo);
const FloatNumberOne = Number(numberOne);
const FloatNumberTwo = Number(numberTwo);
console.log(`Exercise 3: ${FloatNumberOne + FloatNumberTwo}`)

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";
const AddedFloatWithDecimal = (Number(anotherNumberOne) + Number(anotherNumberTwo)).toFixed(2);
console.log(`Exercise 4: ${AddedFloatWithDecimal}`)
// --------------------------------------
// Exercise 5 - Decimals and average
const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const averageResult = (parseFloat(one + two + three) / 3).toFixed(5);
console.log(`Exercise 5: ` + averageResult)

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(`Exercise 6: ${letters[2]}`);




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const theLetter = fact.indexOf("j");
const newFact = fact.slice(0, theLetter) 
                + fact[theLetter].toUpperCase()
                + fact.slice(theLetter + 1);

console.log(`Exercise 7: ${newFact}`);

// --------------------------------------



