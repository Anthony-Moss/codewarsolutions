// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// first sucessful attempt
function findOdd(A) {
    let numberObj = {}
    let numArray = A.sort()
    let result = 0;
    for (i=0;i<numArray.length;i++) {
      if (numberObj[numArray[i]] === 1){
        numberObj[numArray[i]] += 1
      } else {
      numberObj[numArray[i]] = 1 
      }
    }
     for (j=0;j<numArray.length;j++){
       if (numberObj[numArray[j]] % 2 !== 0){
         result = numArray[j]
       }
      }
      return result;
  }

// refactored
function findOdd(A) {
    let numObj = {};
    A.forEach((i) => {
        numObj[i] ? numObj[i]++ : numObj[i] = 1;
    });
    for (j in numObj) {
        if(numObj[j] % 2 !== 0) {
            return Number(j);
        }
    }
}
