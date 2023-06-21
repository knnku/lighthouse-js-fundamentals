function concat(array1, array2) {
  let array = array1.concat(array2);

  return array.sort();
}

console.log(concat([1,2,3], [1,2,3]));