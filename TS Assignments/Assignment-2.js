"use strict";
// Asignment and Exercises Week-2
// Program that calculates the area of a rectangle
var length, width, area;
length = 4;
width = 6;
area = length * width;
console.log("The area of rectangle is=", area);
// Program that calculates the volume of a cube
var length, volume;
length = 7;
volume = length ** 3;
console.log("The volume of the given cube is=", volume);
// Program that checkc if the given number is negattive, positive or zero
var a;
a = 5;
if (a == 0) {
    console.log("The given number is negative");
}
else if (a > 0) {
    console.log("The given number is positive");
}
else {
    console.log("The given number is negative");
}
// Program that checks if the given number is even or odd
var a;
a = -9;
if (a % 2 == 0) {
    console.log("The given number is even");
}
else {
    console.log("The given number is odd");
}
//Program that checks if the person is eligible to vote or not
var age;
age = 24;
if (age >= 18) {
    console.log("The person is eligible for vote");
}
else {
    console.log("The person is not eligible for vote");
}
//Program that caculates the result of mathematical expresion
var result;
result = ((10 + 5) * 3 - 2 / (4 % 3) - 7);
console.log(result);
//Program that tell class timing depends on the section
var section;
section = "Night";
switch (section) {
    case "Morning": {
        console.log("Your class time is 9am to 1pm.");
        break;
    }
    case "Evening": {
        console.log("Your class time is 2pm to 4pm.");
        break;
    }
    default: {
        console.log("Your class time is 6pm to 9pm.");
    }
}
//Program that use function to add two values
function Sum(n1, n2) {
    console.log("sum of the two given numbers is", n1 + n2);
}
Sum(2, 5);
//Program that converts the celsius to farenheit
function ctof(temp1) {
    //temp1 is temperature is temperature in celcius
    var temp2; //temp2 is temperature in farhenheit
    temp2 = (9 / 5) * temp1 + 32; //formula to covert celcius to farhenheit (9/5)*c+32
    console.log("The given tepmerature in farhenheit is=", temp2);
}
ctof(38);
//Program that calculates the percentage of obtained marks in class 10 out of 1100 total marks
function percentage(marksobtained) {
    var percentageobtained;
    percentageobtained = (marksobtained / 1100) * 100;
    console.log("Your obtained percentage is=", percentageobtained);
}
percentage(786);
//program that converts number of days into weeks and days
var totaldays, weeks, days;
totaldays = 25;
weeks = totaldays / 7;
days = totaldays % 7;
console.log(`${totaldays} days = ${weeks | 0} weeks and ${days} days`);
//program that converts number of days into weeks and remaining days using function
function daystoweeks(day) {
    var weeks, days;
    weeks = day / 7;
    days = day % 7;
    console.log(`${days} days = ${weeks | 0} weeks and ${days} days`);
}
daystoweeks(25);
//program that check discount if price less than 100$ apply 5% discount otherwise 10% discount
var price;
var discount;
price = 115;
if (price < 100) {
    discount = (price * 5) / 100;
    console.log(`The discount on the product is= ${discount}$`);
}
else {
    discount = (price * 10) / 100;
    console.log(`The discount on the product is= ${discount}$`);
}
//program that check discount if price less than 100$ apply 5% discount otherwise 10% discount using function
function Discount(price) {
    var discount;
    if (price > 100) {
        discount = (price * 10) / 100;
        console.log(`The discount on the product is= ${discount}$`);
    }
    else {
        discount = (price * 5) / 100;
        console.log(`The discount on the product is= ${discount}$`);
    }
}
Discount(120);
//Program that catogries a user a chil, teenager or adult according to their age
function usercatagory(age) {
    if (age <= 12) {
        console.log(`The user is a Child`);
    }
    else if (age > 12 && age <= 19) {
        console.log(`The use is a Teenager`);
    }
    else {
        console.log(`The use is an Adult`);
    }
    return age;
}
usercatagory(13);
//Program that checks temperture and suggest clothes according to the weather
function weather(temperature) {
    if (temperature <= 10) {
        console.log(`It's cold, wear warm clothes like warm coats and layered clothing etc.`);
    }
    else if (temperature > 10 && temperature <= 18) {
        console.log(`It's cool, wear light warm clothes like light coats and jackets etc.`);
    }
    else if (temperature > 18 && temperature <= 24) {
        console.log(`It's mild, wear light clothes like t-shirt and shorts etc.`);
    }
    else if (temperature > 24 && temperature <= 29) {
        console.log(`It's warm, wear light weight and breathable clothes.`);
    }
    else {
        console.log(`It's hot, wear loose fitted, light weight, breathable clothes like tank-tops and sun dresses etc.`);
    }
    return temperature;
}
weather(44);
//write a program tha checks if a number is divisible by  or 5 or both
function divisible(givenNumber) {
    var a, b;
    a = givenNumber % 3;
    b = givenNumber % 5;
    if (a == 0 && b == 0) {
        console.log(`the given number is divisible by both 3 and 5.`);
    }
    else if (a == 0) {
        console.log(`the given number is divisible by 3 only.`);
    }
    else if (b == 0) {
        console.log(`the given number is divisible by 5 only.`);
    }
    else {
        console.log(`The given number is not divisible by either 3 or 5.`);
    }
    return givenNumber;
}
divisible(15);
//Program that determines the day of week like 1 for monday 2 for tuesday and so on
function weekday(a) {
    if (a == 1) {
        console.log(`It's Monday.`);
    }
    else if (a == 2) {
        console.log(`It's Tuesday.`);
    }
    else if (a == 3) {
        console.log(`It's Wednesday.`);
    }
    else if (a == 4) {
        console.log(`It's Thursday.`);
    }
    else if (a == 5) {
        console.log(`It's Friday.`);
    }
    else if (a == 6) {
        console.log(`It's Saturday.`);
    }
    else if (a == 7) {
        console.log(`It's Sunday.`);
    }
    else {
        console.log(`You have entered the invalid number. Please enter between 1-7.`);
    }
    return a;
}
weekday(4);
//Program that add tax to the electricity bill method 1
/*
for  101 to 200 units 10% tax,
for 201 to 500 units 15% tax
for greater than 500 units 25% tax
*/
var units;
var priceOfUnit = 27; //price of 1 unit is 27 
console.log(`Price of 1 unit= ${priceOfUnit}`);
var totalcost;
var tax;
function Bill(units) {
    totalcost = units * priceOfUnit;
    console.log(`Total cost of units (units*price) = ${totalcost}`);
    if (units > 100 && units <= 200) {
        var tax;
        tax = (totalcost * 10) / 100;
        console.log(`the tax amount is 10% = ${tax}`);
    }
    else if (units > 200 && units <= 500) {
        tax = (totalcost * 15) / 100;
        console.log(`the tax amount is 15% = ${tax}`);
    }
    else {
        tax = (totalcost * 25) / 100;
        console.log(`the tax amount is 25% = ${tax}`);
    }
    return tax;
}
units = 312;
console.log(`Total units consumed = ${units}`);
tax = Bill(units);
totalcost = units * priceOfUnit;
var billIncludingTax = totalcost + tax;
console.log(`Your total bill is (TotalCost+tax) = ${billIncludingTax}`);
//  - Write a program that checks if the given year is leap year or not.
var year = 2019;
if (year % 4 == 0 || year % 400 == 0) {
    console.log(`${year} is a leap year.`);
}
else {
    console.log(`${year} is not a leap year.`);
}
