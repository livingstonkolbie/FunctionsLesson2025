// problem 1
// rectangle area

console.log("problem 1");

// what exactly do i need the program to do?
// we want the user to give us inputs about the rectangle- the length and width
// then, i need a function to take those inputs, do the area formula math, then console.log me the result of that math



function rectangleArea(l, w) {
    console.log(l * w);

}

rectangleArea(5, 3);








// problem 2 
// feet to inches

//IPO
// I- prompt the user to enter the number of feet
// P- 1 foot = 12 inches
// O- displays the number of feet in that many inches

console.log('problem 2');

let feetAmount = Number(prompt('how many feet?'));

function feetToInches(feetAmount) {
    let inchesAmount = Number(feetAmount * 12);
    console.log(inchesAmount);
}

feetToInches(feetAmount);










// Problem 3
// Math Quiz

// I
// P
// O

// PROCESS: computer prompts 2 random numbers to be added by the user
// PROCESS: the program knows the answer already
// INPUT: user adds the numbers and inputs it in the prompt popup
// OUTPUT: make a function to do 2 things: if the prompt input matches its answer, alert() correct, if the prompt input does not match, alert() incorrect, with the correct answer

// how to make a program that chooses 2 random numbers 1 - 10
// how would i do it in the real world?

// i can have a bucket with little sheets of paper labled 1-10 and i reach in 2 times to grab random sheets- kinda feels like an array is needed and make a loop that selects 2 random numbers

let quizNumbers = [1,2,3,4,5,6,7,8,9,10];
let randomPicks = [];

for(let i = 1; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * quizNumbers.length);
    randomPicks.push(quizNumbers[randomIndex]);
}

console.log(`the quiz numbers: ${randomPicks}`);

// program it to then multiply the 2 numbers and save the answer as computer answer
// ive got the 2 numbers, how do i multiply them by eachother 


let computerAnswer = randomPicks[0] * randomPicks[1];
console.log(`answer key: ${computerAnswer}`);


let userAnswer = Number(prompt(`multiply ${randomPicks}`));

console.log(`the user got: ${userAnswer}`);

if(userAnswer === computerAnswer){
    alert("You are correct");
} else if(userAnswer !== computerAnswer) {
    alert("You are incorrect")
} 





// problem 4
// maximum of two values

// I- promt the user to enter 2 integers
// P- create a program that compares the two inputted numbers
// O- returns the value of the bigger number

let a = 2;
let b = 3;

// how would i compare two numbers in real life? then code that.
// create a number line... find the two numbers... the one on the left is the biggest

// i can use operators.... < > = ....
// should i be using boolean ?