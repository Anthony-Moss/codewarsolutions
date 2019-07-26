// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

// first working attempt
function persistence(num) {
    let result = 0
    let strArr = num.toString().split('')
    let multiplied = strArr.reduce((total,num) => {
      return total * num
    })
    while(multiplied >= 10) {
        let newStrArr = multiplied.toString().split('')
        multiplied = newStrArr.reduce((total,num) => total*num)
        result += 1
    }
    if (multiplied === '4') {
        return 0
    }
    return result + 1
}


