

// first attempt, it works BUT
// js math changes numbers to e^X when too high
// this problem is requiring full written number 
// will need to create new function that does math manually 
// even current force only goes to like e^23 which doesnt cover test case
function sumStrings(a,b) {
    if ((parseInt(a)) && (parseInt(b))) {
      let sumBoth = parseInt(a) + parseInt(b)
      return sumBoth.toString()
      } else if (parseInt(a)) {
        let sumA = parseInt(a)
        return sumA.toString()
      } else if(parseInt(b)) {
        let sumB = parseInt(b)
        return sumB.toString()
      }
  }

// the long way
function sumStrings(a,b) {
    let arrA = a.split("");
    let arrB = b.split("");
    while (arrA[0] === '0') {
      arrA.shift()
    }
    while (arrB[0] === '0') {
      arrB.shift()
    }
    let shortest = arrA
    let longest = arrB
    console.log(longest)
    console.log(shortest)
    let result = []
    if (shortest.length > longest.length) {
        shortest = arrB
        longest = arrA
    }
    let counter = 1
    console.log(longest.length)
    console.log(shortest.length)
    let firstNum = 0;
    shortest.reverse().map(number => {
        number = parseInt(number)
        console.log(`this is the number in loop ${number} `)
        console.log(`this is the counterpart in longest ${longest[longest.length-counter]}`)
        let addTo = parseInt(longest[longest.length-counter])
        let sum = number + addTo
        console.log(`this is sum of the two values trying to add ${sum}`)
        console.log(`this is current longest ${longest}`)
//         first path - remainder or not
//       if sum is less than 10 no remainder - so sum can become number in longest
        if (sum < 10) {
            longest[longest.length-counter] = sum
            counter +=1    
//      if sum is over 10 there is a remainder
//       we need to find out where the remainder can go
        } else {
//           first we need to handle the first longest value
//         it will be equal to the sum - 10 because its the remainder value
          longest[longest.length-counter] = (sum - 10)
//         Next fork - can remainder go there?
//         if the next number in longest array(going in reverse) isnt 9
//         the remainder can just go there
            if (longest[longest.length-counter-1] !== 9) {
              longest[longest.length-counter-1] = parseInt(longest[longest.length-counter-1])
              longest[longest.length-counter-1] += 1
              counter += 1
//         if the next number in array is 9 we have to check the next number
            } else {
            // check the chain for 9's so 1 gets carried
            for (i=longest.length-counter-2; i>=0; i--) {
                  console.log(`am I running ${longest}`)
//             if the value of the next number in line in longest is 9
//             we have to set the number to 0
//             then we just move on 
                if (longest[i] === 9) {
//                     longest[i] = 0
//                     longest[i-1] = parseInt(longest[i-1])
//                     longest[i-1] += 1
//                     counter +=1
                    } 
                }
            }
        }
    console.log(`sum is ${sum}`)
    firstNum = sum
    })
    console.log(`this is the firstNum ${firstNum}`)
//     }
//     console.log(longest[0])

let stringNum = longest.toString().replace(/,/g, "")
    
    if (firstNum > 10 && longest.length == shortest.length){
        return "1".concat("", stringNum)
        }
// console.log(stringNum)
    return stringNum
}

// first try long way
// not working 
// function sumStrings(a,b) {
//     let arrA = a.split("");
//     let arrB = b.split("");
//     let shortest = arrB
//     let longest = arrA
//     let result = []
//     if (arrA < arrB) {
//         shortest = arrA
//         longest = arrB
//     }
//     let counter = 1
//     let carryTracker = 0
//     console.log(shortest)
//     console.log(longest)
//     shortest.reverse().map(number => {
//         number = parseInt(number)
//         console.log(`this is the number in loop ${number} `)
//         console.log(`this is the counterpart in longest ${longest[longest.length-counter]}`)
//         let addTo = parseInt(longest[longest.length-counter])
//         let sum = number + addTo
//         console.log(sum)
//         if (sum < 10) {
//             longest[longest.length-counter] = sum
//             counter +=1
//         } else {
//             for (i=longest.length-counter; i>=0; i--) {
//                 if (longest[i] === 9) {
//                     longest[i] = (sum - 10)
//                     if (longest[i-1] < 9) {
//                         longest[i - 1] += 1
//                         counter += 1
//                     } else {
                    
//                     }
//                 }
//             }
//         }
//     })
//     let stringNum = longest.toString().replace(/,/g, "")
//     console.log(parseInt(stringNum))
//     return stringNum
// }