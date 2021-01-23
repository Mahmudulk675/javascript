


//                      Kilometer to Meter

function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        var meter = kilometer * 1000;       // 1 kilometer = 1000 meter.
        return meter;
    } else {
        return 'This distance is not valid'
    }
}
var distanceResult = kilometerToMeter(12);
// console.log(distanceResult);








//                     Hotel Cost

function hotelCost(days) {
    var cost = 0;

    if (days <= 10) {
        cost = days * 100;          // 100$ per day for first 10 days.
        cost = days * 100;          
        cost = days * 100;          
    } else if (days <= 20) {
        var firstCost = 10 * 100;
        var remainingDay = days - 10;
        var secondCost = remainingDay * 80      // 80$ per day after first 10 days to 20 days.
        cost = firstCost + secondCost;
    } else {
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var remainingDay = days - 20;
        var thirdCost = remainingDay * 50;      // 50$ per day after first 20 days.
        cost = firstCost + secondCost + thirdCost;
    }
    return cost;
}

var totalCost = hotelCost(65);
// console.log(totalCost);






//                          Budget Calculator


function budgetCalculator(watch, mobile, laptop) {

    var watchCost = watch * 50;                  // 1 watch costs 50$
    var mobileCost = mobile * 100;                    // 1 mobile costs 100$
    var laptopCost = laptop * 500;                        //1 laptop costs 500$
    var totalCost = watchCost + mobileCost + laptopCost;
    return totalCost;
}
var totalBudget = budgetCalculator(2, 6, 1);
// console.log(totalBudget);







//                                  Mega friend


var friends = ['Dicaprio', 'Tom', 'Deep', 'RoberthdhdhDeNiro', 'Smith', 'MattDamon', 'GeorgeClooney']
var maxWord = '';
function megaFriend(friends){
  for(var i = 0; i < friends.length; i++){
    if(friends[i].length > maxWord.length){
      maxWord = friends[i] ;        
    }
  } 
   return maxWord;  
} 
var biggestName = megaFriend(friends);
// console.log(biggestName);
