function getCount(str) {
    var vowelsCount = 0;
    let result = 0
    console.log(str)
    for (i=0; i<= str.length; i++) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        result += 1
        }
      }
    return result;
  }