// Write a JavaScript program to reverse a given number

var a = 125689;
var rev = 0;

while((a / 10) > 0){
    var digit = a % 10;
    rev = rev * 10 + digit;
    a = Math.floor(a / 10);
}

console.log(rev);