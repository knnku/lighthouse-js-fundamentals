const checkAir = function (samples, threshold) {
  // Code here!
  sense = 0;
  for (sample of samples) {
    if (sample === "dirty") {
      sense += 1;     
    } else {
      sense + 0;
    }      
  } 
    sense = sense * 0.1;
    // console.log(sense);
    if (sense >= threshold) {      
      return "polluted";
    } else {
      return "clean";
    }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'dirty', 'dirty', 'dirty', 'dirty', 'dirty'],
  0.9
))