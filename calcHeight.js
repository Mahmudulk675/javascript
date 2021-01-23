// function calcHeight(inch){
//     var heightInFeet = inch/12;
//     return heightInFeet;
// }
// var myHeight = calcHeight(80)
// console.log(Math.floor(myHeight))


// function calcTips(bill){
//     var tips = bill*.2;
//     return tips;
// }
// var totalTips= calcTips(250)
// console.log(totalTips);


// var age= 34;
// age = 45;
// console.log(age)

// let age2 = 65;
// age2 = 34;

// console.log(age2)

// const cname = 'usa';
// cname = russia;
// console.log(cname)


 function calcLeapYear(year){
     let reminder = year % 4;
     let isLy = 'is a leap year';
     let notLy = 'is not a leap year';
     if(reminder == 0){
         return isLy;
     }else{
         return notLy;
     } 
 }
 var checkYear = calcLeapYear(2018);
 console.log(checkYear);
 