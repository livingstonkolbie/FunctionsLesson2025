
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

calcReceipt();