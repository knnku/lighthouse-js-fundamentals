const sumLargestNumbers = function(data) {
  // Put your solution here'
  console.log(data.sort((a, b) => b-a));
  return data[0] + data [1];

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([101, 24, 334, 56, 692, 32]));