module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) return 0;
  if (array.length == 1) return 1;

  array.sort(function (a, b) {return a - b});

  let count = 1;
  let longestLength = 1;
  
  for (let i = 0; array.length-1 > i; i++) {
    if (array[i+1]-array[i] != 0 ) {  
      if(array[i+1]-array[i] == 1) count++;
      else {   
        if (longestLength < count) longestLength = count;

        count = 1;
      }
    }
  }
   return longestLength;
}
