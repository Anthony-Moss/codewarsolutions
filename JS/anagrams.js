function anagrams(word, words) {

    let myWords = words.filter(eaWord => eaWord.length === word.length)
    let results = []
  
    myWords.forEach(eaWord =>{
      let histogram1 = {}
      let histogram2 = {}
      
      for(let i = 0; i < eaWord.length; i++){
        if(histogram1[word[i]]){
          histogram1[word[i]] += 1
        }else{
          histogram1[word[i]] = 1
        }
        if(histogram2[eaWord[i]]){
          histogram2[eaWord[i]]+= 1
        }else{
          histogram2[eaWord[i]] = 1
        }
      }
  
      let keys = Object.keys(histogram1)
      let myResult = true
  
      keys.forEach(key=>{
        if( !(histogram1[key] === histogram2[key]) ){
          myResult = false
        }
      })
      if(myResult){
        results.push(eaWord)
      }
  
    })
    return results
  }
  
  
  console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
  
  
  // should equal ['aabb', 'bbaa']