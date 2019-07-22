// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:


// JavaScript & TypeScript

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJun')]
// should return
// "found the needle at position 5"

function findNeedle(haystack) {
    let position = haystack.indexOf('needle')
    return `found the needle at position ${position}`
}