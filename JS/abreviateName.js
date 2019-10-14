// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

// first attempt
function abbrevName(name){
    let initials = [];
    let nameArr = name.toUpperCase().split(" ");
    nameArr.forEach((name) => initials.push(name[0]))
    return `${initials[0]}.${initials[1]}`
}


// refactored - forEach is completely unneeded

function abbrevName(name){
    let nameArr = name.toUpperCase().split(" ");
    return `${nameArr[0][0]}.${nameArr[1][0]}`
}
