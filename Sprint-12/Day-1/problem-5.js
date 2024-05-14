// Write a JavaScript program to find the sum of odd numbers from 1 to 50.

var sp = 50;
var sumOdd = 0;

while(sp > 0){
    if(sp % 2 !=0){
        sumOdd += sp;
    }
    sp--;
}

console.log(sumOdd);