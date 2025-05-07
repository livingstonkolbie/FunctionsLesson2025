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
    
    console.log(prices)
}

collectPricesFromUser();




// i have a prompt that i want to repeat 5 times and take those 5 inputs and put them into an empty array
