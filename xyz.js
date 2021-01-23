// var friends = ['Dicaprio', 'Tom', 'Deep', 'Brad', 'Smith', 'Hfdhdhdhqd', 'Hgdsahuruudhgs']
// var string = friends[0]
// function megaFriend(){
//     for(var i = 0; i <= friends.length; i++);
//     var element = friends[i];
//     if( String.length < friends[i].length ){
//         maxWord = element;
//         return maxWord;
//     }
// }
// var biggestName = megaFriend(friends);
//  console.log(biggestName);




// var friends = ['Dicaprio', 'Tom', 'Deep', 'Brad', 'Smith', 'Hfdhdhdhqd', 'Hgdsahuruudhgs', 'ghsjgdkdskghsdkj', 'aaajgdkdskghsdkj']
// var maxWord = friends[0]
// function megaFriend(friends){
//   for(var i = 0; i < friends.length; i++){
//     var element = friends[i];
//     if(element.length > maxWord.length){
//       maxWord = element ;
      
//     }
//   } 
//    return element;  
// } 
// var biggestName = megaFriend(friends);
//  console.log(biggestName);






// var friends = ['Dicaprio', 'Tom', 'Deep', 'Brad', 'Smith', 'Hfdhdhdhqd', 'Hgdsahuruudhgs']
// var maxWord = friends[0];

// function megaFriend(friends){
    

//             maxWord = element;
//             return maxWord;
//         }
//     } 
// }
// var biggestName = megaFriend(friends);
// console.log(biggestName);








//  var arr = [
//     'first item',
//     'second item is longer than the third one',
//     'third longish item',
//     'second item is longer than the third one and one'
//   ];
  
//   var lgth = 0;
//   var longest;
  
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].length > lgth) {
//       var lgth = arr[i].length;
//       longest = arr[i];
//     }
//   }
  
//   console.log(longest);



//   function findLongestWord(array) {
//     var longestWord = "";
  
//     array.forEach(function(word) {
//       if(word.length > longestWord.length) {
//         longestWord = word;
//       }
//     });
  
//     return longestWord;
//   }
  
//   var word = findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
//   console.log(word); // result is "jumped"







var arr = ['Dicaprio', 'Tom', 'Deep', 'RoberthdhdhDeNiro', 'Smith', 'MattDamon', 'GeorgeClooney'];



function megaFriend(){
  var lgth = 0;
  var longest;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
      var lgth = arr[i].length;
      longest = arr[i];
      
    }
  }return longest;
}

var result =megaFriend(arr);
console.log(result)
