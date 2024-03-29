// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.


// first attempt
function solution(number){
    let multiples = []
    for (i=1; i<number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiples.push(i)
        }
    }
    if (multiples.length === 0) {
        return 0
    } else {
        let sum = multiples.reduce((total, num) => {
        return total += num
    })
    return sum
    }
}

// quick refactor
function solution(number){
    let multiples = []
    for (i=1; i<number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiples.push(i)
        }
    }
    if (multiples.length) {
        return multiples.reduce((total, num) => {
            return total += num
        });
    } else {
        return 0
    }
}

function solutionEasy(number) {
    let total = 0;
    for (i=1; i<number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i
        }
    }
    return total
}