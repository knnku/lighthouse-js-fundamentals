function buildTriangle(scale) {
  var line = "";
  for (line = "*"; line <= scale; line+ "*") {
      console.log(line)
  }
  
}

console.log(buildTriangle(10))