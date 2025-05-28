
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





//Below im doing some notes from mdn web docs_

let button = document.getElementById("button");

function changePlayerName() {
    let name = prompt("enter player name");
    button.innerText = `Name: ${name}`
}

button.addEventListener("click", changePlayerName);

//ORRRR... mike does the annon function inside the event listener

let ageButton = document.getElementById("ageButton");

ageButton.addEventListener("click", () => {
    let age = prompt("enter the age");
    ageButton.innerText = `Player Age: ${age}`
});

// REMEMBER!!!!! 
//get element, function, addEventListener (the function can be included/called in the event listener)


let col1 = document.getElementById("col1");
let col2 = document.getElementById("col2");
let col3 = document.getElementById("col3");

function changeColOne() {
    col1.style.backgroundColor = "red"
}

col1.addEventListener("click",changeColOne);

col2.addEventListener("click", () => {
    col2.style.backgroundColor = "green"
});

function changeColThreeText() {
    col3.innerText = "yerrrrr"
}

col3.addEventListener("click", changeColThreeText);


// this isnt working BELOW, how do i grab multiple elements with the same ids
let newBut = document.querySelectorAll("#newBut");

newBut.forEach(newBut => {
    newBut.addEventListener("click", () => {
        newBut.style.backgroundColor = "green";
    });
});

newBut.forEach(newBut => {
    newBut.addEventListener("dblclick", () => {
        newBut.innerText = "double clicked";
    });
});

let reviewButtons = document.querySelectorAll("#tryAgain");

reviewButtons.forEach(reviewButtons => {
    reviewButtons.addEventListener("click", () => {
        reviewButtons.style.backgroundColor = "coral";
    });

});

reviewButtons.forEach(reviewButtons => {
    reviewButtons.addEventListener('dblclick', () => {
        reviewButtons.innerText = "click click";
        reviewButtons.style.backgroundColor = "yellow";
    });
});


let clickMeButton = document.getElementById("clickMe");
let h1Joint = document.getElementById("h1Element");
let count = 1;

clickMeButton.addEventListener("click", () => {

    clickMeButton.innerText = "click again!"
    h1Joint.innerText = `times clicked: ${count}`

    count += 1;
});


let brothers = ["kolton", "conner", "jordan", "nick", ["james", "paul"], 1, 2];
brothers[1] = 50;
brothers[4][2] = "peanut";


// console.log(brothers[4][2]);

for (const bro of brothers){
    console.log(bro);
};

let toys = ["ball", "legos", "skateboard"]

for (const toy of toys) {
    console.log(toy);
    console.log(`${toy} is a toy`);
};