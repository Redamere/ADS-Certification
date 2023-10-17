function primeCheck(singleNumber){
  if (singleNumber === 1){return false;}
  let counter=2;
  while (counter<singleNumber){
    if (singleNumber % counter === 0){
      return false;
    }
    counter++;
  }
  return true;
}

function sumPrimes(num) {
  let result=0;
  for (let i=num; i>0; i--){
    if (primeCheck(i)){
      result += i;
      }
  }
  console.log(result)
  return result;
}

//console.log(primeCheck());
sumPrimes(10);
sumPrimes(977);