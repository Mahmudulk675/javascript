// var name = [1, 3, 53, 2, 2, 3, 7, 23, 55, 1]
// var uniqueName=[];

// for(var i = 0; i < name.length; i++){
//     var element = name[i];
//     var index = uniqueName.indexOf(element);
//     if(index == -1){
//         uniqueName.push(element);
//     }
// }
// console.log(uniqueName);


// var number = [1, 3, 53, 2, 2, 3, 7, 23, 55, 1];
// var uniqueName=[];

// for(var i = 0; i < number.length; i++){
//     var element = number[i];
//     var index = uniqueName.indexOf(element);
//     if(element == -1){
//         uniqueName.push(element)
//     }
// }
// console.log(uniqueName);

// var number = [1, 3, 53, 2, 2, 3, 7, 23, 55, 1];
// var uniqueNumber= [];

// for(var i = 0; i < number.length; i++){
//     var element = number[i];
//     var index = uniqueNumber.indexOf(element);
//     if(index == -1){
//         uniqueNumber.push(element);
//     }
// }
// console.log(uniqueNumber)


var number = [1, 3, 53, 2, 2, 3, 7, 1, 3, 53, 2, 2, 3, 7,]
var uniNum = [];
for(var i = 0; i< number.length; i++){
    var element = number[i];
    var index = uniNum.indexOf(element);
    if(index == -1){
        uniNum.push(element);
    }
}
console.log(uniNum)


// Find String Word

// var space = 'I am a programmer by profession and photographer by passion';
// var count = 0;
// for(var i = 0; i < space.length; i++){
//     var character = space[i];
//     if(character == " "){
//         count++;
//     }
// }
// console.log(count);


//  count latter

var mySpeech= 'I am a programmer by profession and  photographer   by passion';
var count =0;
for(var i = 0; i< mySpeech.length; i++){
    var char = mySpeech[i];
    if(char != ' '){
        count++
    }
}
console.log(count)

















