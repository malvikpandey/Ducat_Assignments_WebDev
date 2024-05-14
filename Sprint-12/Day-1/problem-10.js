// Write a JavaScript program to find the greatest common divisor (GCD) of two positive integers.

var a = 24;
var b = 18;
var i = 1;
var gcd;

while(i <= a && i <= b){
    if(a % i == 0 && b % i == 0){
        gcd = i;
    }
    i++;
}

console.log(gcd);