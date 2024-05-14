// Write a JavaScript program to determine if a given number is prime or not.

var num = 4
var count = 0
var sp = 1

while(sp <= num){

    if(num%sp==0){
        count++
    }
    sp++
}

if(count==2){
    console.log("It is prime number")
}else{
    console.log("It is not a prime number")
}