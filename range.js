function range(start, end, step) {
  array = [];
  if (start > end) {
    return array = [];
  } else if (step === 0 || step < 0) {
    return array = [];
  } else if (start === undefined || end === undefined || step === undefined) {
    return array = [];
  } else {
     for (var i = start; i <= end; i += step) {   
      array.push(i);      
    }
    console.log(array);
  }
  return array;
 
  
}

console.log(range(1, 100, 1));