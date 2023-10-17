function steamrollArray(value,flattenedArray=[]) {
 value.forEach(item=> {
   if(Array.isArray(item)){
     steamrollArray(item, flattenedArray);
   }
   else{
     flattenedArray.push(item);
   }
 })
 return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);