/* 
|Exercise 1: Favorite Color
|-----------------------------
|Write some simple Javascript code that will join all the items in the array above
|and console.log the result.
*/
let sentence = ["my","favorite","color","is","blue"];
let joinSentence = sentence.join(" ")

console.log(joinSentence);

/* 
|Exercise 2: Mixup
|-----------------------------
|Create 2 variables. The values should be strings
|Slice out and swap the first 2 characters of the two strings from part 1
|Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
|Finally console.log the new concatenated string
*/
let str1 = "mix"
let str2 = "pod"

let slice1 = str1.slice(0,2);
let slice2 = str2.slice(0,2);
let word1 = str1.replace(slice1,slice2);
let word2 = str2.replace(slice2,slice1);
let str3 = str1+" "+str2;

console.log(word1+","+word2);
console.log(str3);

/* 
|Exercise 3: Calculator
|-----------------------------
|Create 2 variables. The values should be strings
|Slice out and swap the first 2 characters of the two strings from part 1
|Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
|Finally console.log the new concatenated string
*/

let num1 = window.prompt("Enter a number");
let num2 = window.prompt("Enter a new number");
let sum = parseInt(num1) + parseInt(num2);
alert(`${num1} + ${num2} = ${sum}`);
