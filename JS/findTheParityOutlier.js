// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// first attempt to just get answer, not refactored
function findOutlier(integers) {
    let oddOrEven = 0
    let res = 0
    let arrTest = integers[0] % 2 === integers[1] % 2 
        ? integers[0] 
        : integers[0] % 2 === integers[2] % 2 
            ? integers[0] 
            : integers[2]
    if (arrTest%2 === 0) {
        oddOrEven = 1
    }
    for (let i of integers) {
        (Math.abs(i) % 2 === oddOrEven ? res = i : null)
    }
    return res
}

// Second attempt trying to make a cleaner solution

function findOutlier(integers) {
    const even = integers.filter((num) => {
        return num % 2 === 0
    })

    const odd = integers.filter((num) => {
        return num % 2 !== 0
    })

    return even.length < odd.length 
        ? even[0] 
        : odd[0]
}