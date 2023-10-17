function titleCase(str) {
  let newString = "";
  let rChar = '';
  newString += str[0].toUpperCase();
  for (let i = 1; i < str.length; i++){
    rChar = str[i].toLowerCase();
    if (str[i-1] == " "){
      rChar = str[i].toUpperCase();
    } 
    newString += rChar;
  }
  

  //console.log(newString)

  return newString;
}

//titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"))