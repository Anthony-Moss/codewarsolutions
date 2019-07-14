// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// first attempt
function longest(s1, s2) {
    let s1Arr = s1.split("")
    let s2Arr = s2.split("")
    let alreadyIn = []
    for (let i of s1Arr) {
        if (alreadyIn.includes(i) === false) {
        alreadyIn.push(i);
        }
    }
    for (let j of s2Arr) {
        if (alreadyIn.includes(j) === false) {
        alreadyIn.push(j)
        }
    }
    console.log(alreadyIn.sort())
    return alreadyIn.sort().toString().replace(/,/g,  '')
}