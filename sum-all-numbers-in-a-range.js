function sumAll(arr) {
let pos1 = 0;
let pos2 = arr.length - 1;
let sum = 0;
let addCount = Math.ceil(Math.abs((arr[arr.length - 1] - arr[0])/2));
//console.log(addCount);
while (addCount > 0){
sum += arr[pos1] + arr[pos2];
addCount--;
}
 console.log(sum); 
 return sum;
}

sumAll([5,10]);

//[1 2 3 4] -> add count = 2

//[5 4 7 8 9 10] -> add count = 3

