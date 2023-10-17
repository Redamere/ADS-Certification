function mutation(arr) {
  let word1 = arr[0].toLowerCase(); 
  let word2 = arr[1].toLowerCase(); 
  let maxLength = arr[0].length + arr[1].length;
  let match = true;

  for (let i = 0; i < word2.length; i++){
    if (!(word1.includes(word2[i]))){
      match = false;
    }
  }
 
return match
  
}

mutation(["hello", "hey"]);

//console.log(mutation(["hello", "hey"]));