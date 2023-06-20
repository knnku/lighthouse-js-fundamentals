
function lastIndexOf(numbers, index) {
  for (var i = numbers.length-1; i >= 0; i--) {
    if (numbers[i] === index) {
      return i;
    } 
    
  }
  return -1;
}

console.log(lastIndexOf([8,2,3,4,5,8], 7));

