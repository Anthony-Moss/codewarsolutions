// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.


// first attempt
function dontGiveMeFive(start, end)
{
console.log(start, end)
    let resultArr = []

    for (i=start; i<=end; i++) {
        resultArr.push(i)
    }

    let minusFive = resultArr.filter((num) => {
        let stringNum = num.toString().split("")
        let haveFive = false

        for (let j of stringNum) {
            return (j === '5' ? haveFive = true : null)
        }
        return (haveFive ? null : num)
    })
    return (resultArr.includes(0) ? minusFive.length + 1 : minusFive.length)
}







function dontGiveMeFive(start, end)
{
console.log(start, end)
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
//           console.log(`${j} this should be 5`)
          haveFive = true
        }
      }
      if (!haveFive) {
        return num
    }
  })
  return (resultArr.includes(0) ? minusFive.length + 1 : minusFive.length)
}