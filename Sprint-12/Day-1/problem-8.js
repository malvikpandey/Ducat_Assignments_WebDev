//Write a JavaScript program to find the sum of all prime numbers less than 100.


var count = 0;
var sp = 1;
var c = 1;

while(c < 100){
    while(sp <= c){

        if(c%sp==0){
            count++;
        }
        sp++;
    }

    if(count == 2){
        console.log(c);
    }

    c++;
    count = 0;
    sp = 1;
}