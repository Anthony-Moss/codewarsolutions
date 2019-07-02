// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let numX= 0
    let numO = 0
    let strCount = 0
    let strArray = str.split("");
    if (strArray.length <=0) {
      return true
    }
    for (i=0; i<str.length; i++) {
      if (strArray[i] === 'O' || strArray[i] === 'o') {
        numO += 1
        strCount += 1
      } else if (strArray[i] === 'X' || strArray[i] === 'x') {
        numX += 1
        strCount += 1
      } else {
        strCount += 1    
      }
    if (numX === numO && strCount === str.length) {
        return true
    } else if(numX != numO && strCount === str.length) {
      return false
      }
    }
  }