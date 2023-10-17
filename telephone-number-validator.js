const formats = ["xxx-xxx-xxxx","(xxx)xxx-xxxx","(xxx) xxx-xxxx","xxx xxx xxxx", "xxxxxxxxxx", "1 xxx xxx xxxx","1 xxx-xxx-xxxx","1 (xxx) xxx-xxxx", "1(xxx)xxx-xxxx"]

function telephoneCheck(str) {
  let numbers="0123456789";
  let accepted="1 ()-";
  let newStr="";
  for(let i=0;i<str.length;i++){
    if (accepted.includes(str[i])){
      newStr += str[i];
      continue;
    }
    if (numbers.includes(str[i])){
      newStr+="x"
    }
  }
     console.log(newStr)
    if (formats.includes(newStr)){
      return true;
      }
    else { 
      return false;
      }
}
//telephoneCheck("555-555-5555");
console.log(telephoneCheck("1(555)555-5555"));