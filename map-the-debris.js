function orbitalPeriod(arr) {
  let returnArray=[]
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  for (let item in arr){
  let T = Math.round(2 * (Math.PI) * (Math.sqrt(Math.pow(earthRadius + arr[item].avgAlt, 3)/GM)))
  //console.log(T)
  let temp = {name: arr[item].name, orbitalPeriod: T}
  returnArray.push(temp);
  }

  
  console.log(returnArray);
 
  return returnArray;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
//[{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) /* 

[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]  */
