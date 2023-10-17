function uniteUnique(arr) {
  let dupeArray=[];
  let returnArray=[];
  for (let i=0;i<arguments.length;i++){
    for (let j=0;j<arguments[i].length;j++){
      dupeArray.push(arguments[i][j])
    }
  }
  for (let i=0; i<dupeArray.length; i++){
    if (!(returnArray.includes(dupeArray[i]))){
      returnArray.push(dupeArray[i]);
    }
  }
  //console.log(dupeArray)
  console.log(returnArray)
  return returnArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
uniteUnique([1, 3, 2], [5, 4], [5, 6]);
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);