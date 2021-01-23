var fibo= [0, 1]
function fibonacce(n){
    
    for(var i= 2; i <= n; i++){
        fibo[i]= fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var fiboResult = fibonacce(12);
console.log(fiboResult);

