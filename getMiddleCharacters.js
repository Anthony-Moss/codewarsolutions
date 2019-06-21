function getMiddle(s)
{
  let word = s;
  let wordLength = s.length;
  let half = Math.round(wordLength / 2);
    if (wordLength % 2 !== 0) {
  return `${word[half - 1]}`
  }  else {
  let result = `${word[half - 1]}${word[half]}`
  return result
  }
}