// prob 0 Sales Prediction
console.log('problem 0');

let totalSales = Number(prompt('enter the total amount of sales'));

function calcProfit(totalSales) {
    let profit = (totalSales * 0.23).toFixed(2);
    console.log(profit);
}

calcProfit(totalSales);






// prob 1 Land Calculation
console.log('problem 1');

let totalSquareFeet = Number(prompt('enter the amount of square feet'));

function  calcAcres(totalSquareFeet) {
    let acres = (totalSquareFeet / 43560).toFixed(2);
    console.log(acres)
}

calcAcres(totalSquareFeet);






// prob 2 Total Purchase 
console.log('problem 2');

// I- the price of 5 items 
// P- prompt() what is the price of each item (need 5 items) & calculates all the totals and stuff
// O- subtotal, sales tax(7.2), total

// REMEMBER think functions first- what functions do i need
// function that intakes and stores the item prices

function collectPricesFromUser() {
    let prices = [];

    for(let i = 1; i <= 5; i++){
        let price = Number(prompt(`enter the price for ${i}`));
        prices.push(price);
    }
    
    return prices;
}


function calcReceipt(prices) {
    // Calculate subtotal by adding all prices
    let subtotal = 0;
    for(let i = 0; i < prices.length; i++) {
        subtotal += prices[i];
    }
    
    // Calculate tax (7.2%)
    let salesTax = subtotal * 0.072;
    
    // Calculate total
    let total = subtotal + salesTax;
    
    // Return all values
    return {
        subtotal: subtotal,
        salesTax: salesTax,
        total: total
    };
}

// Call functions and display results
let itemPrices = collectPricesFromUser();
let receipt = calcReceipt(itemPrices);

// Display results
console.log("Subtotal: $" + receipt.subtotal.toFixed(2));
console.log("Sales Tax (7.2%): $" + receipt.salesTax.toFixed(2));
console.log("Total: $" + receipt.total.toFixed(2));



// ABOVE we need to go through this an get clarity
