//Problem-1
var a = 1;

if(a > 0){
    if(a == 0){
        console.log("a == 0");
    }
    else{
        console.log("a != 0");
    }
}
else{
    console.log("a < 0");
}

var a = 1, b = 3, c = 5, d = 3, f = 2;
console.log((a + b + c + d + f) / 2);

var age = 11;
if(age < 18){
    console.log("You're a minor");
}
else{
    console.log("You're an adult");
}

var year = 2024;
if(year % 4 == 0){
    console.log("Leap Year");
}
else{
    console.log("Not a leap year");
}

//Problem-2
var gender = "male";
var age = 22;

if(gender === "male" && age >= 21){
    console.log("Male : You're eligible");
}
else if(gender === "female" && age >= 18){
    console.log("Female : You're eligible");
}
else{
    console.log("You're not eligible");
}

//Problem-3
var age = 18;
var isWrittenPassed = true;

if(age >= 16){
    if(isWrittenPassed){
        console.log("You're eligible");
    }
    else{
        console.log("You're not eligible");
    }
}
else{
    console.log("You're not eligible");
}

//Problem-4
var orderTotal = 40;
var loyaltyStatus = false;
var distance = 10;

if(orderTotal >= 50){
    console.log("You're eligible for free delivery");
}
else{
    if(loyaltyStatus){
        console.log("You're eligible for free delivery");
    }
    else{
        if(distance < 5){
            console.log("You're eligible for free delivery");
        }
        else{
                console.log("You're not eligible for free delivery");
        }
    }
}