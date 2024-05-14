// Write a JavaScript program to determine if a given string is a palindrome

var a = 12221;
var rev = 0;
var b = a;

while((a / 10) > 0){
    var digit = a % 10;
    rev = rev * 10 + digit;
    a = Math.floor(a / 10);
}

if(b == rev){
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}