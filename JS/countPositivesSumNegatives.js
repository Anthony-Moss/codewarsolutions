// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// 

// first attempt 
function countPositivesSumNegatives(input) {
    let result = []
    if (input === null || input.length === 0) {
        return result;
    } else {
        result = [0, 0]
        input.map(number => {
            if (number > 0) {
                result[0] +=1
            } else if (number < 0) {
                result[1] += number
            }
        })
        return result
    }
}


// quick refactor 
function countPositivesSumNegatives(input) {
    let result = []
    if ((!input) || input.length === 0) {
        return result;
    } else {
        result = [0, 0]
        input.map(number => {
            return (number <= 0 ? result[1] += number : result[0] += 1) 
        })
        return result
    }
}
