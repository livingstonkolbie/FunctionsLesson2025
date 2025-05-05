// Day 11
// Problem 1
console.log("day 11, prob 1");

function greetUser(name) {
    console.log("Hey, " + name)
}

greetUser("kolbie");


// Problem 2
console.log("day 11, prob 2");

function calculateArea(length, width) {
    let area = length * width;

    console.log(`area: ${area}`)
}

calculateArea(2, 5);
calculateArea(20, 3);

// Problem 3
console.log("day 11, prob 3");

function addNumbers(num1, num2) {
    console.log(num1 + num2);
}

addNumbers(5, 6);


// Day 12
// Problem 1
console.log("day 12, prob 1");

function convertKilometersToMiles(kilometers) {
// 1 kilometer = 0.621371 miles

    let mile = kilometers * 0.621371;

    return mile

}

let miles = convertKilometersToMiles(5);
miles = convertKilometersToMiles (2);

console.log(miles);


// Problem 2
// Objective: Create a function that takes an array of numbers and returns their sum.
console.log("Day 12, prob 2");

let numbers = [2, 4, 6, 8, 10];

function sumArray(numbers) {

    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    return sum;
}

console.log(sumArray(numbers));


// Problem 3
console.log("day 12, prob 3");

// Write a function that calculates the area of a circle given its radius.
// Use the formula Area = π * radius * radius to calculate the area.


function calculatedCircleArea(radius) {
    area = 3.141592653 * radius * radius;

    return area
}

console.log(calculatedCircleArea(5));