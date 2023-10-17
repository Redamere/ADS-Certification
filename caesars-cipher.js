
function convert(char){
  let asciiCode = char.charCodeAt();
  //console.log(asciiCode);
  for (let i=0;i < 13; i++){
    if (asciiCode==90){
      asciiCode=64
    }
    asciiCode++;
  }
  //console.log(asciiCode);
  let asciiReturn = String.fromCharCode(asciiCode)
  //console.log(asciiReturn);
  return asciiReturn
}
function rot13(str) {
  let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let newStr="";
  for (let i =0; i < str.length; i++){
    if (alphabet.includes(str[i]))
    newStr += convert(str[i])
    else{ newStr+=str[i];}
  }


  console.log(newStr);
  return newStr;
}

//rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
convert("S");