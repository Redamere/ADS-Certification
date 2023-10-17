function fearNotLetter(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz"
  let string=str;
  let charArray=[];
  let missingChar = undefined;
  for (let i=0;i<string.length;i++){
    charArray=[];
  // console.log(string.charCodeAt(i+1))
  // console.log(string.charCodeAt(i)+2)
    if (i < string.length+1 && string.charCodeAt(i+1) != string.charCodeAt(i)+1){
      charArray.push((string.charCodeAt(i))+1);
      break;
    }
  }
  missingChar=String.fromCharCode(charArray[0]);
  if (!alpha.includes(missingChar)){missingChar = undefined;}
  console.log(missingChar)
  
  //console.log(missingChar);
  return missingChar;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno")
fearNotLetter("stvwx")
fearNotLetter("bcdf")
fearNotLetter("abcdefghijklmnopqrstuvwxyz")

//d ascii code = 100
//i ascii code = 105
//u ascii code = 117
//e ascii code = 101