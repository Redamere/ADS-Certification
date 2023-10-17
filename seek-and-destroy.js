function destroyer(arr,...vals) {
  let results = arr.filter(items => !vals.includes(items))
  return results;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);