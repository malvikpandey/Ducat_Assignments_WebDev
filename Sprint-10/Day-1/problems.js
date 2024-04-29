//Problem-1

var name = "Malvik Pandey";
console.log(name + " Greetings!");

//Problem-2
var a = 10;
var b = 15;

if(a > b){
    console.log("A is greater than B");
}
else if(a < b){
    console.log("A is smaller than B");
}
else{
    console.log("A is equals to B");
}

//Problem-3
var age = 18;

if(age >= 18){
    console.log("Candidate is eligible for voting");
}
else{
    console.log("Candidate is not eligible for voting");
}

//Problem-4
var product1 = 500;
var product1Quantity = 6;

var product2 = 900;
var product2Quantity = 7;

var product3 = 600;
var product3Quantity = 5;

var totalBill = product1 * product1Quantity + product2 * product2Quantity + product3 * product3Quantity;

var finalPrice = totalBill - totalBill * 30/100;

var result = (finalPrice <= 10000);

if(result){
    console.log("Budget Verified");
}
else{
    console.log("Out of budget");
}

//Problem-5
var x = 5;
var y = 7;

var z = (x > y);
console.log(z);

//Problem-6
var a = 15;
var b = 25;

var aLastDigit = a % 10;
var bLastDigit = b % 10;

console.log(aLastDigit == bLastDigit);

//Problem-7
var a = "A";
var b = "B";

console.log(a == b);

//Problem-8
var a = 10;
var b = 20;

console.log((a + b) % 2 == 0);

//Problem-9
var a = 11;
console.log(a % 2 == 0);