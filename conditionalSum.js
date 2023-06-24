

const conditionalSum = function(values, condition) {
    // Your code here
  count = 0;
  for (value of values) {
    if (condition === "even" && value % 2 === 0) {
      count = count + value;    
    } else if (condition === "odd" && value % 2 !== 0) {
      count = count + value;    
    }
    
  }

  return count;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));

console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
