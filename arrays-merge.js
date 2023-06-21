function merge(array1, array2) {
  let array = array1.concat(array2);

  return array.sort();
}

console.log(merge([1,2,3], [1,2,3]));