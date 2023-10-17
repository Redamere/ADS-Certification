function convertHTML(str) {
  let returnString="";
  let repChars = [];
  let htmlEntities = {
  '<':"&lt;", 
  '>':"&gt;",
  '&':"&amp;",
  '"':"&quot;",
  "'":"&apos;"};
  let htmlKeys = Object.keys(htmlEntities)
  let htmlValues = Object.values(htmlEntities)
  //console.log(htmlKeys)
  //console.log(htmlValues)
  for (let i=0;i<str.length;i++){
    if (htmlKeys.includes(str[i])){
      repChars.push(str[i]);
    }
  }
  for (let i=0;i<str.length;i++){
    if (!(repChars.includes(str[i]))){
    returnString += str[i];}
    if (repChars.includes(str[i])){
      returnString += htmlEntities[str[i]];
    }
  }
  console.log(returnString);
  return returnString;
}

//convertHTML("Dolce & Gabbana");
//convertHTML('Stuff in "quotation marks"');
//convertHTML("<>");
convertHTML("Schindler's List")
//< = &lt;
//> = &gt;
//& = &amp;
//" = &quot;
//' = &apost;