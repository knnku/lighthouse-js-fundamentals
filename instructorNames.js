const instructorWithLongestName = function(instructors) {
  // Put your solution here
  
  let select = "";

  for (let instructor of instructors) {
    if (instructor.name.length > select.length) {
      select = instructor.name;
    }
  }

  return select;

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));


