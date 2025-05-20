
// functions 1

// problem 1

function calcArea () {
    let userLength = Number(prompt("enter length"));
    let userWidth = Number(prompt('enter width'));
    let area = userLength * userWidth;

    alert(`length: ${userLength}, width: ${userWidth}, area: ${area}`);
}

// calcArea();

// problem 2

// I prompt user to enter a number of feet
// P feetToInches() 1ft = 12in
// O display the inches

function feetToInches() {
    let userFeet = Number(prompt('enter the amount of feet'));
    let inches = userFeet * 12;

    alert(`feet entered: ${userFeet}, inches: ${inches}`);
}

// feetToInches();


// problem 3

// I user enters what they got for the math problem
// P spits out 2 random numbers, adds the numbers together, stores the calculation somewhere, compares the answer key to the users answer
// O displays the users answer, the computers answer, correct/incorrect



function mathQuiz() {
    let num1 = Math.floor((Math.random() * 10) + 1)
    let num2 = Math.floor((Math.random() * 10) + 1)
    let total = num1 + num2;
    
    let userCalc = Number(prompt(`what is ${num1} + ${num2}`));

    if (total === userCalc) {
        alert(`${num1} + ${num2} = ${total}. Your calculation: ${userCalc}. You are correct!`);
    } else {
        alert(`${num1} + ${num2} = ${total}. Your calculation: ${userCalc}. Sorry, that is incorrect.`);
    }
}

// mathQuiz();


// Problem 4

// I prompts user to enter two numbers
// P maximum() - compares the two numbers
// O display which of the two is greater


function maximum() {
    let userNum1 = Number(prompt('enter first number'));
    let userNum2 = Number(prompt('enter second number'));

    if (userNum1 > userNum2) {
        alert(`${userNum1} is greater than ${userNum2}`);
    } else if (userNum1 < userNum2) {
        alert(`${userNum2} is greater than ${userNum1}`);
    } else {
        alert(`${userNum1} and ${userNum2} are equal`);
    }
}

// maximum();



// Problem 5

//I array of time values 1-10
//P d = (1/2) * 9.8 * t*t fallingDistance()
//O return the distance in meters that the object has fallen in whatever time

let timeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let distanceArray = [];

for (let i = 0; i < timeArray.length; i++) {
    
    function fallingDistance(time) {
        let distance = ((1/2) * 9.8 * (time*time)).toFixed(2);
        
        distanceArray.push(distance); 
    }
    
    // fallingDistance(i);
}

// console.log(distanceArray);


// Problem 6

//I asks the user to enter five test scores
//P calcAverage() determineGrade()
//O display a letter grade for each score and the average score


function calcAverage() {
    let score1 = Number(prompt('enter score 1'));
    let score2 = Number(prompt('enter score 2'));
    let score3 = Number(prompt('enter score 3'));
    let score4 = Number(prompt('enter score 4'));
    let score5 = Number(prompt('enter score 5'));

   for (let i  = 0; i < 5; i++) {

    }
}
