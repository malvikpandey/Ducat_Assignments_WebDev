// Write a JavaScript program to check if a given year is a leap year or not. Implement the solution using a while loop.

var year = 2012;

while(year < 2025){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        console.log(year);
    }

    year++;
}