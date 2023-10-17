function findLongestWordLength(str) {
  let counter = 0;
  let currentWord = "";
  let largest = "";
  let startPoint = 0;
  //console.log(str.length)
  while (counter < str.length){
    counter++;
    if (str[counter] == " " || counter == str.length) {
      //console.log(counter);
      currentWord = counter - startPoint;
      startPoint = counter;
      //console.log(currentWord);
      if (currentWord > largest) { 
      largest = currentWord;
      }
    }
    

  //console.log(largest);
  }
  largest--;
  return largest;

}
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
//findLongestWordLength("The quick brown fox jumped over the lazy dog");