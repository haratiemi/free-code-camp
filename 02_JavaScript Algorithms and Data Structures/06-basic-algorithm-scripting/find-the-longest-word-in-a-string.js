function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLen = 0;
  for (let i = 0 ; i < words.length; i++){
    if (words[i].length > maxLen){
      maxLen = words[i].length;
    }
  }
  return maxLen;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");