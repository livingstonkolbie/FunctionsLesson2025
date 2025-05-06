// problem 1
// rectangle area

// console.log("problem 1");


// function rectangleArea(l, w) {
//     console.log(l * w);

// }

// rectangleArea(5, 3);








// problem 2 

// console.log('problem 2');

// let feetAmount = Number(prompt('how many feet?'));

// function feetToInches(feetAmount) {
//     let inchesAmount = Number(feetAmount * 12);
//     console.log(inchesAmount);
// }

// feetToInches(feetAmount);










// Problem 3
// console.log('problem 3');



// let quizNumbers = [1,2,3,4,5,6,7,8,9,10];
// let randomPicks = [];

// for(let i = 1; i < 3; i++) {
//     let randomIndex = Math.floor(Math.random() * quizNumbers.length);
//     randomPicks.push(quizNumbers[randomIndex]);
// }

// console.log(`the quiz numbers: ${randomPicks}`);


// let computerAnswer = randomPicks[0] * randomPicks[1];
// console.log(`answer key: ${computerAnswer}`);


// let userAnswer = Number(prompt(`multiply ${randomPicks}`));

// console.log(`the user got: ${userAnswer}`);

// if(userAnswer === computerAnswer){
//     alert("You are correct");
// } else if(userAnswer !== computerAnswer) {
//     alert("You are incorrect")
// } 





// problem 4
// console.log('problem 4');


// let num1 = Number(prompt('what is the first number?'));
// let num2 = Number(prompt('what is the second number?'));

// if(num1 > num2) {
//     alert(`${num1} is the larger number`);
// } else if(num1 < num2) {
//     alert(`${num2} is the larger number`);
// } else if (num1 === num2) {
//     alert(`these numbers are equal`)
// }










// problem 5 

// console.log('problem 5');

// let secondsFalling = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i = 0; i < secondsFalling.length; i++) {
//     let fallingDistance = (1/2) * 9.8 * (i*i)
//     console.log(fallingDistance);
// }









// problem 6
console.log('problem 6');


// let scores = [];

// for (let i = 0; i < 5; i++) {
//     scores.push(Number(prompt(`enter test score ${i + 1}`)))
// }

// console.log(`here are the 5 test scores: ${scores}`);

// let sum = 0;

// for (let j = 0; j < scores.length; j++) {
//     sum += scores[j];
// }

// let avgScore = sum / 5;
// console.log(`avg score: ${avgScore}`);

// if(avgScore >= 90) {
//     alert('your test avg: A');
// } else if(avgScore >= 80) {
//     alert('your test avg: B');
// } else if(avgScore >= 70) {
//     alert('your test avg: C');
// } else if(avgScore >= 60) {
//     alert('your test avg: D');
// } else {
//     alert('your test avg: F');
// } 


// Function to calculate average from an array of scores
function calcAverage(score1, score2, score3, score4, score5) {
    return (score1 + score2 + score3 + score4 + score5) / 5;
  }
  
  // Function to determine letter grade based on score
  function determineGrade(score) {
    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  // Collect the scores
  let scores = [];
  for (let i = 0; i < 5; i++) {
    scores.push(Number(prompt(`enter test score ${i + 1}`)));
  }
  
  console.log(`here are the 5 test scores: ${scores}`);
  
  // Calculate average using the function
  let avgScore = calcAverage(scores[0], scores[1], scores[2], scores[3], scores[4]);
  console.log(`avg score: ${avgScore}`);
  
  // Display grade for each score
  for (let i = 0; i < scores.length; i++) {
    let grade = determineGrade(scores[i]);
    console.log(`Score ${i+1}: ${scores[i]} - Grade: ${grade}`);
  }
  
  // Display final average and grade
  let finalGrade = determineGrade(avgScore);
  alert(`your test avg: ${finalGrade}`);