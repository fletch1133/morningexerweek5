//var numbers = [2,4,6,8,10,12,14,16,17,18,20];

//function findOutlier(arr) {
   // var odds = arr.filter(function (number) {
  //  return !!(number % 2)
//  });

 // var evens = arr.filter(function (number) {
    //return !(number % 2)
//  });

//  var result = (odds.length < evens.length) ? odds.pop() : evens.pop();

//  return result;
//}

//console.log(findOutlier(numbers));

const findTheOutlier = arr => {
    let evens = arr.filter(num => num % 2 === 0)
    let odds = arr.filter(num => num % 2 !== 0)

    if(evens.length > odds.length) {
        return odds[0]
    } else {
        return evens[0]
    }
}