 function tail(arr) {
   let resultArr;
   if (arr.length > 1 ) {
     resultArr = arr.slice(1);
   } else {
     resultArr = arr;
   }
  return resultArr;
 }

