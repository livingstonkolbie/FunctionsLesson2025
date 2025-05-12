// problem 1 Rectangle Area

//I - users width and length
//P - a = width * length
//O - displays the rectangle's area

function calcArea() {
    let length = Number(prompt('enter the length'));
    let width = Number(prompt('enter the width'));
    let area = length * width;
    console.log(`the area: ${area}`);
}

// calcArea();




// Problem 2 Feet to Inches

//I accepts a number of feet as an argument - use prompt()
//P feetToInches - foot = 12 inches
//O returns the number of inches

function feetToInches() {
    let feetAmount = Number(prompt('enter the number of feet'));
    let inches = feetAmount * 12;
    console.log(`you entered ${feetAmount} feet, which is ${inches} inches`);
}

// feetToInches();




// Problem 3 Math Quiz

// I - the user enters an answser to the random number generator
// P - create random number generator that displays 2 numbers to a user, the generator will know the correct answer, 
// O - the program alert's whether the user is correct

function mathQuiz() {
    let randomNum1 = Math.floor(Math.random()*100);
    let randomNum2 = Math.floor(Math.random()*100);

    let mathProb = randomNum1 + randomNum2;
    console.log(`the answer is ${mathProb}`);

    let userAnswer = Number(prompt(`what is ${randomNum1} + ${randomNum2} ?`));

    if(userAnswer == mathProb) {
        console.log(`you got ${userAnswer} which is correct!`);
    } else {
        console.log(`you got ${userAnswer} which is incorrect.`);
    }
}

// mathQuiz();


// Problem 4 Maximum of Two Values

// I - prompt() user to enter 2 values
// P - maximum() - this compares the two values and selects the bigger one
// O - display the value that is the greater of the 2

function maximum() {
    let num1 = Number(prompt('enter the first number'));
    let num2 = Number(prompt('enter the second number'));
    
    if(num1 > num2) {
        console.log(`${num1} is the greater number`);
    } else if(num1 < num2) {
        console.log(`${num2} is the greater number`);
    } else {
        console.log('the two numbers you entered are the same');
    }
}

// maximum();




// Problem 5 Falling Distance [COULDNT FIGURE OUT]

//I - create a loop that passes values 1 - 10 as arguments
//P - D - (1/2) * 9.8 * t * t ... fallingDistance(timeInSeconds)  
//O - return the distance in meters that the object has fallen during that time interval 

// create a program that calls the function in a loop that passes the values 1-10

let arrDistance = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 1; i <= 10; i++) {

    function fallingDistance(arrDistance) {
        let distance = (i*i) * (1/2) * 9.8;

        return arrDistance;
    }

}

// fallingDistance();



// Problem 6 Test Avg Grade

// I - user enters 5 test scores
// P - calcAverage() determineGrade() 
// O - display a letter grade for each score and the avg test score

let numberOfGrades = 5;
let grades = [];

function calcAverage() {
    for (let j = 0; j < numberOfGrades; j++) {
        let studentGrades = Number(prompt(`enter grade ${j+1}`));
        grades.push(studentGrades);
    }

    console.log(`the grades are ${grades}`); // an array of the student's inputs

    let avgGrades = 0;
    
    for(let l = 0; l < grades.length; l++) {
        avgGrades += grades[l] / 5;
    }

    console.log(`the avg grade is ${avgGrades}`);
}

calcAverage();