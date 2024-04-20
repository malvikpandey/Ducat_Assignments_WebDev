// Problem-1

var a = 10;
console.log("Problem-1");
console.log(a**2);

// Problem-2

var a = 10;
var b = 15;
var c = 20;
var d = 25;
var e = 30;

var result = (a + b) * c / d -e;
console.log("Problem-2");
console.log(result);

// Problem-3
var a = 10;
var b = 20;
console.log("Problem-3");
console.log(`Before swapping :- a = ${a}, b = ${b}`);

a = a + b;
b = a - b;
a = a - b;
console.log(`After swapping :- a = ${a}, b = ${b}`);

// Problem-4
var fahrenheit = 25;
var celcius = (fahrenheit - 32) * 5 / 9;
console.log("Problem-4");
console.log("Fahrenheit To Celsius : " + celcius);

// Problem-5
var length = 8;
var width = 8;
var area = length * width;
console.log("Problem-5");
console.log(area);

// Problem-6
console.log("Problem-6");
var num = 25;
if(num % 5 == 0){
    console.log("Multiple of 5");
} 
else {
    console.log(" Not a Multiple of 5");
}