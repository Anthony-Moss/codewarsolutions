// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.


// first attempt refactored 
function dontGiveMeFive(start, end) {
    // sets arr we will use to hold numbers as we find the 5's
    let resultArr = []

    // create loop from start num to end num inputs
    for (i=start; i<=end; i++) {
        // pushs all numbers from start to end to resultArr
        resultArr.push(i)
    }

    // use filter to remove numbers containing 5, returns array without the 5 nums
    let minusFive = resultArr.filter((num) => {
        // turn num to array for iteration
        let stringNum = num.toString().split("")
        // sets variable for recognizing 5's
        let haveFive = false

        // loop through num to see if any 5's
        for (let j of stringNum) {
            // if any digit is 5 haveFive is set to true so we know that number contains a 5 and shouldnt be counted for answer
            // note its a string bc  of what stringNum was
            j === '5' ? haveFive = true : null
        }
        // if haveFive true dont want to include in arr
        // if haveFive isn't true we want it in arr
        return (haveFive ? null : num)
    })
//     we cannot get 0's in our mapped array
//     so if our numArray would contain 0 we add one to our response
//     else we just return the minusFive length as it has all numbers needed
    return ((resultArr.includes(0)) ? minusFive.length + 1 : minusFive.length)
}








// first attempt no refactor, for referece
function dontGiveMeFive(start, end) {
let resultArr = []
    for (i=start; i<=end; i++) {
        resultArr.push(i)
    }
    let minusFive = resultArr.filter((num) => {
    let newResult = []
    let stringNum = num.toString().split("")
    let haveFive = false
    for (let j of stringNum) {
        console.log(j)
        if (j === '5') {
            haveFive = true
        }
    }
    if (!haveFive) {
        return num
    }
    })
    return (resultArr.includes(0) ? minusFive.length + 1 : minusFive.length)
}