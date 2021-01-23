// factorial

function factorial(num){
    var fact = 1;
    for(var i = 1 ; i<= num; i++){
        var fact = fact * i;
        
    }
    return fact;
}
var result = factorial(7);
console.log(result);

// Factorial in recursion way 

function recFact(n){
    if(n == 1){
        return 1;
    }else{
        return n * recFact(n-1);
    }
}
var recResult = recFact(5);
console.log(recResult)