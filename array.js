var age = [23 , 35 , 65, 56];
var myAge= age[3];
age[3]= 46;
console.log(myAge);
age.push(54)

console.log(age.length)
age.pop()
console.log(age)

// while loop
var number = 2;
while(number < 13 ){
    console.log(number);
    number++
}
// for loop

var friends = [20,30,40,12,34,23,5];
for( var i = 0; i < friends.length; i++ ){
    var element = friends[i];
    console.log(element);
}

// function 
function add(num1, num2){
    var result= num1+ num2;
    return result;
}
var sum = add(23 , 34)
console.log(sum);


function largestNumber(numbers){
    larger = numbers[0];
    for(var i = 0; i < numbers.length; i++ ){
        var element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
var numbers = [ 12, 34, 45, 66, 45, 78]
var output = largestNumber(numbers);
console.log(output)


// function youTube(a){
//     var channel = 'my channel name is '+ a;
//     return channel;
// }
// console.log(youTube('joomX'));



function greet(firstName, lasteName){
    console.log('hello '+ firstName + ' ' + lasteName)
}

greet('mahmudul', 'hasan')