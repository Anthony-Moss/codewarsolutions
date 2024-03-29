// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications


// first attempt
function minValue(values){
    let result = []
    for (let i of values) {
  //   console.log(result)
        if (result.includes(i)) {
  //       console.log(i)      
        } else {
            result.push(i)
        }
    }
    let resultStr = result.sort().toString().replace(/,/g, "")
    console.log(resultStr)
    return parseInt(resultStr)
}


// refactored/cleaned up solution
function minValue(values){
    const result = []
    for (let i of values) 
        result.includes(i) ? null : result.push(i)
    const resultStr = result.sort().toString().replace(/,/g, "")
    return parseInt(resultStr)
}