var x = 3;
var y = 6;

var temporary = x;

var x = y;
var y = temporary;

console.log(x , y);

//  Swap without temporary variable

var a = 5;
var b = 7;

a = a + b;

b= a - b;
a = a - b;
console.log(a , b);

// javascript special

var p = 12;
var q = 13;
 
[p, q]=[q, p];
console.log(p, q)

// var marks =[98, 45, 35, 75, 54]
// var max = marks[0]
// for(var i = 0; i < marks.length; i++){
//     var element = marks[i];
//     if(element > max){
//         max = element;
//     }

// } console.log(max)




var marks =[ 23, 34, 76, 76, 97]
var max = marks[0]
for(var i = 0 ; i < marks.length ; i++){
    var element = marks[i];
    if( element < max ){
        max = element;
    }
}
console.log(max + ' is Smallest')


//   get Sum 

var numbers =[23, 34, 76, 76, 97]
function getSum(numbers){
    var sum = 0;
    for( var i = 0; i < numbers.length ; i++){
        var element = numbers[i];
        var sum = sum + element;
    }
    return sum
}
var result = getSum(numbers);
console.log(result);

var numbers2 = [23, 34, 76, 76, 97];
function getSubtraction(numbers2){
    var subtraction = 0;
    for(var i = 0 ; i < numbers2.length; i++){
        var element = numbers2[i];
        var subtraction = subtraction - element;
    }
    return subtraction;
}
var result2 = getSubtraction(numbers2);
console.log(result2);




var friends = [ 'ali', 'kodu', 'mula', 'kocu', 'dim'];
var allFriends= '';
for(var i = 0; i< friends.length ; i++){
    var name1 = friends[i];
    allFriends= allFriends + name1;
}
console.log(allFriends);













