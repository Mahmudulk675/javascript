// var statement = 'Hello there I am Mahmudul Hasan Khan. What about you?'
// var reverse='';

// function revStr(str){
//     for( var i = 0; i< str.length; i++ ){
//         var char = str[i];
//         reverse= char + reverse;
//     }
//     return reverse;
// }
// var result= revStr(statement);
// console.log(result);

var statement = 'Hello there I am Mahmudul Hasan Khan. What about you?'
var rev = "";
function getRev(string){
    for(var i = 0; i< string.length; i++){
        var latter = string[i];
        rev = latter + rev;
    }
    return rev;
}
var revResult = getRev(statement);
console.log(revResult);