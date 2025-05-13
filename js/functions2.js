
//problem 0

//I - user enters amount of total sales
//P - profit is 23% of total sales
//O - display the profit that will be made


function calcProfit() {
    let userInput = Number(prompt('enter the total amount of sales'));
    let profit = userInput * 0.23;
    console.log(`total amount of sales: ${userInput}`);
    console.log(`profit: ${profit}`);
}

// calcProfit();


// problem 1

//I - user enters number of square feet
//P - calc the number of acres - sq ft / 43560
//O - dispay the number of acres

function calcAcres() {
    let sqFeet = Number(prompt('Enter the number of square feet to be converted to acres'));
    let acres = (sqFeet / 43560).toFixed(2);
    console.log(`${sqFeet} square feet is ${acres} acres`);
}

// calcAcres();


// problem 2

//I - prompts user to enter 5 items amount
//P - calc the subtotal, tax, and total (receipt)
//O - displays the receipt

//i need a blank array so that i can create a for loop to run 5 times to ask the user how much each of the 5 items cost
// once i have that, i need to add those numbers in the array and thats the subtotal which i'll call sum
// i'll just display the tax... 7.2%
// then i'll take the subtotal, * .072, then add that to the subtotal to get the total
//console.log the receipt information

let subtotal = [];
let sum = 0;

function calcReceipt() {
    for(let i = 0; i < 5; i++) {
        let userInput = Number(prompt(`enter the price for item ${i + 1}`));
        subtotal.push(userInput);
    }
    console.log(subtotal);

    for(let j = 0; j < subtotal.length; j++){
        sum += subtotal[j];
    }
    // console.log(sum);
    
    let plusTax = Number((sum * 0.072).toFixed(2));
    // console.log(plusTax);

    let total = sum + plusTax;
    // console.log(total);

    console.log(`subtotal: ${sum}, tax: ${plusTax}, total: ${total}`);
}

// calcReceipt();




// Problem 3

// I - the car is traveling 60mph
// P - distance = speed * time
// O - display distance for 5hrs, 8hrs, 12hrs


function distanceTraveled(time) {
    let speed = 60;
    let distance = speed * time
    console.log(`distance: ${distance} miles in ${time} hrs`);
}

// distanceTraveled(5);
// distanceTraveled(8);
// distanceTraveled(12);




// Problem 4

//I - ask user to enter amount of a purchase 
//P - compute the state tax (4%) and county sales tax (2%)
//O - display the amount of the purchase, state tax, county tax, total sales tax, total of the sale (amount of purchase + total sales tax)


function computeSalesTax() {
    let userInput = Number(prompt('enter the amount of your purchase'));
    let stateTax = Number((userInput * 0.04).toFixed(2));
    let countyTax = Number((userInput * 0.02).toFixed(2));
    let totalOfTheSale = Number((userInput + stateTax + countyTax));


    console.log(`amount of purchase: $${userInput}, state tax: $${stateTax}, county tax: $${countyTax}, total of the sale: $${totalOfTheSale}`);
}

// computeSalesTax();



// Problem 5 

//I - asks user for number of miles driven and the gallons of gas used
//P - mpg = miles driven / gallons
//O - display the car's miles per gallon


function carsMPG() {
    let userMiles = Number(prompt('How many miles did you drive?'));
    let userGallons = Number(prompt('How many gallons did you use?'));
    let mpg = Number((userMiles / userGallons).toFixed(2));
    console.log(`miles driven: ${userMiles}, gallons used: ${userGallons}, mpg: ${mpg}`);
}

// carsMPG();



// Problem 6

//I - ask the user to enter the charge for the food and a tip percentage
//P - calculate the amount of tip and 7% sales tax
//O - display charge for food, tip percentage they want to pay, what the tip amount will be, the 7% sales tax, and the total


function calcDinnerCharge() {
    let mealAmount = Number(prompt('How much did the meal cost?'));
    let tipPercentage = Number(prompt('What tip percentage do you want to leave?'));
    let tipCalculation = Number((mealAmount * (tipPercentage * 0.01)).toFixed(2));
    let total = Number((mealAmount + tipCalculation).toFixed(2));
    let salesTax = Number((total + (total * 0.07)).toFixed(2));
    
    console.log(`charge for food: $${mealAmount}, tip percentage: ${tipPercentage}% which will come out to $${tipCalculation}, total (including 7% sales tax): $${salesTax}`);
}

calcDinnerCharge();