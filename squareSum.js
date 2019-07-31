// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// first attempt
function squareSum(numbers){
    let newArr = numbers.map(number => Math.pow(number, 2));
    return (newArr.length > 1 ? newArr.reduce((total, next) => total + next) : 0)
}