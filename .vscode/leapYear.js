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


//                  factorial

// function factorial(num){
//     let factorial = 1;
//     for(var i = 1; i <= num; i++ ){
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// let factorialResult = factorial(12);
// console.log(factorialResult);


function factorial(n){
    var factorial = 1;
    for(var i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result = factorial(14);
console.log(result)


function whileFact(n){
    var fact = 1;
    var i = 1;
    while (i <= n) {
        fact = fact * i;
        i++
    }
    return fact;
}
var factRslt = whileFact(13);
console.log(factRslt)



// recursive Function 

function getRecFun(n){
    if(n == 0){
        return 1;
    }else{
        return n * getRecFun(n-1);
    }
}
var recResult = getRecFun(13);
console.log(recResult);

function factorial(n){
    if(n== 0){
        return 1;
    }else{
        return n* factorial(n-1);
    }
}
var result2 = factorial(45);
console.log(result2)


// Recursive 

function recFebo(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return recFebo(n-1) + recFebo(n-2);
    }
}
var result3 = recFebo(13);
console.log(result3)



                    // Find Prime Number


function getPrime(n){
    for(var i = 2; i < n; i++){
        if(n%i == 0){
            return n + ' ' +'is not a prime number'
        }
        return n + " " + 'is a prime number'
    }
}

var primeResult = getPrime(12);
console.log(primeResult);




