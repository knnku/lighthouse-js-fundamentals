const urlEncode = function(text) {
  temp = [];
  for (i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      temp.push('%20');
    } else {
      temp.push(text[i]);
    }
    
  }
  return temp.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));