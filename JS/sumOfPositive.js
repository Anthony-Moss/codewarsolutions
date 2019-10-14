// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    // sets array that will hold all pos numbers
    let resultArray = []
    // loops through arr to get all pos numbers
    for (i=0;i<=arr.length-1;i++){
        // if the number in the array is greater than or = 0
      if (arr[i] >= 0) {
        //   it gets pushed tothe results array holding our positive numbers
        resultArray.push(arr[i])
      }
    //   no need for an else bc neg numbers are disregarded
    }
    // if results array isnt empty
    if (resultArray.length) {
        // retrun the result of the reduce method on resultsArray with the get sum function, which takes a total and a number
      return (resultArray.reduce(function getSum(total, num) {
        //   getSum just take the current total and adds the number and returns it
        // this will happen until there is just one number left in array so its acting to add all numbers of our array together
        return total + num;
      }))
    //   if the results array is empty, so no pos numbers we retun 0
    } else {
      return 0
    }
  }

// alternate way without needing reduce
function positiveSum(arr) {
let total = 0;    
for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
    total += arr[i];                  // add arr[i] to total
    }
}
return total;                         // return total
}