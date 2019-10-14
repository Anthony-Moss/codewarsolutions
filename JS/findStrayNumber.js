// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


// first attempt, messey
function stray(numbers) {
    let res = 0
    let same = 0
        for (i=0; i<numbers.length; i++) {
            if (numbers[i] === numbers[i+1]) {
                same = numbers[i]
            }
        }
        for (let j of numbers) {
            if (j !== same) {
                console.log(j)
                res = parseInt(j)
            } 
        }
    return res
}

// second try
// much cleaner kinda refactored but really just different approach
function stray(numbers) {
    let numArr = numbers.sort();
    if (numArr[0] !== numArr[1]) {
        return numArr[0]
    } 
    return numArr[numArr.length-1]
}