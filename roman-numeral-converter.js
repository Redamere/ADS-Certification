function convertToRoman(num) {
  let rn ="";
  while (num > 0){
   if (num >= 1000){
      num = num - 1000;
      rn+="M"
      continue;
    }
   if (num >= 900){
      num = num - 900;
      rn+="CM"
      continue;
    }
   if (num >= 500){
      num = num - 500;
      rn+="D"
      continue;
    }
   if (num >= 400){
      num = num - 400;
      rn+="CD"
      continue;
    }
   if (num >= 100){
      num = num - 100;
      rn+="C"
      continue;
    }
  if (num >= 90){ 
      num = num - 90;
      rn+="XC"
      continue;
    }
   if (num >= 50){
      num = num - 50;
      rn+="L"
      continue;
    }
   if (num >= 40){
      num = num - 40;
      rn+="XL"
      continue;
    }
   if (num >= 10){
      num = num - 10;
      rn+="X"
      continue;
    }
   if (num >= 9){
      num = num - 9;
      rn+="IX"
      continue;
   }
   if (num >= 5){
      num = num - 5;
      rn+="V"
      continue;
    }
   if (num >= 4){
      num = num - 4;
      rn+="IV"
      continue;
    }
   if (num >= 1){
      num = num - 1;
      rn+="I"
      continue;
    }
  }

  console.log(rn)
 return rn;

}

convertToRoman(83);


/*     case num >= 900:
    num - 900;
    rn+="CM";

    case num >= 500:
    num - 500;
    rn+="D";

    case num >= 400:
    num - 400;
    rn+="CD"

    case num >= 100:
    num - 100;
    rn+="C";

    case num >= 90:
    num-90; */