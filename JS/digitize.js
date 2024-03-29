// Convert number to reversed array of digits
// Given a random number:
// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
    let result = n.toString().split("").reverse()
    for (let i in result) {
        result[i] = parseInt(result[i])
    }
    return result
}