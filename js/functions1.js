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

mathQuiz();