function largestOfFour(arr) {
  var currentSum = 0;
  var largestSum = 0;

  for(var num of arr){
    currentSum = Math.max(0, (currentSum+num));
    largestSum = Math.max(largestSum, currentSum);
  }

  return largestSum; 
}