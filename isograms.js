// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str) {
    let letters = '';
    let result = true
    let lowered = str.toLowerCase().split("")
    lowered.map( (letter) => {
  // console.log(`the letter is ${letter}, the current string is ${letters), the index is ${letters.indexOf(letter)}` 
        if (letters.indexOf(letter) >= 0) {
            result = false
        } else {
            letters += letter
        } 
    });
    return result
}