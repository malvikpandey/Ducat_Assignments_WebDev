// Write a JavaScript program to find the sum of digits of a positive integer.

var sp = 225;
var sum = 0;
var digit;

while(sp > 0){
    digit = sp % 10;
    sp = Math.floor(sp / 10);
    sum += digit;
    console.log(digit, sp, sum);
}

console.log(sum);