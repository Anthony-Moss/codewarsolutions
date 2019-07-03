// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// first attempt
function disemvowel(str) {
    let result = ''
    for (i=0;i<str.length;i++) {
      if (str[i] ==='a' || str[i] ==='e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ||
          str[i] ==='A' || str[i] ==='E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
      } else {
        result += str[i]
      }
    }
      return result
  }

  // redone/fefactored
  // uses replace instead of the long for loop
  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }