// Write a JavaScript program to calculate the factorial of a given number

var sp = 5;
var fact = 1;

while(sp >= 2){
    fact = sp * fact;
    sp--;
}

console.log(fact);