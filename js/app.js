

// function greetUser() {
//     console.log("Hi Kolbie!");
// }

function greetUser(name) {
    console.log("Hi, " + name);
}

// Running a function
greetUser("Kolbie");
greetUser("Kolton");


// Function with a Return statement

function giveFood(food) {
    let foo = `${food} and ${food}`


    return foo

    //no code under the return statement will run

    let bar = 0;
}

let totalFood = giveFood("apple");
console.log(totalFood);



//loop with a function call inside it
let listofnames = ["zach", "john", "kolbie"];

for (let i = 0; i < listofnames.length; i++) {

    greetUser(listofnames[i])
}


// Function Expression
const calculateArea = function(length, width) {
    return length * width;
}

let area = calculateArea(5, 10);
console.log("Area: ", area);
