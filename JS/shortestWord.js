// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let results = []
    let wordsArray = s.split(" ").map((word) =>  {
      return results.push(word)
    });
    let wordCount = results[0].length
    for (i=0;i<results.length;i++) {
      if (results[i].length <= wordCount) {
        wordCount = results[i].length
      }
    }
    return wordCount
  }