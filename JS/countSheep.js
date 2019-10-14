// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// first attempt just getting answer
function countSheeps(arrayOfSheep) {
  let sheepCount = 0
  arrayOfSheep.map((value) => {
    if (value === true) {
      sheepCount += 1
    }
  })
  return sheepCount
}


// quick refactor using ternary 
function countSheeps(arrayOfSheep) {
  let sheepCount = 0
  arrayOfSheep.map((value) => {
    (value ? sheepCount += 1 : null)
  })
  return sheepCount
}