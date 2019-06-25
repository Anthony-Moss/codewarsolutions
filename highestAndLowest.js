// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    let largest = 0;
    let lowest = 0;
    let numsArray = numbers.split(" ")
    console.log(numsArray)
    for (i=0;i<numsArray.length;i++) {
      console.log(numsArray[i])
      console.log(`${largest} is largest`)
      if (numsArray[i] <= lowest) {
        lowest = numsArray[i]
      } else if (numsArray[i] > largest) {
        largest = numsArray[i]
      } else {}
    }
    return `${largest} ${lowest}`
  }