age = "";

function whichSchool(age) {
  if (age < 13) {
    //Returns the string "Elementary School" if age is less than 13.
    return "Elementary School"
  } else if (age >= 13 && age <= 18) {
    //Returns the string "Secondary School" if age is between 13 and 18.
    return "Secondary School"
  } else {
    //Returns the string "Lighthouse Labs" if the age is over 18.
    return "Lighthouse Labs"
  }
}

//Each conditional statement will return the appropriate string, passing it on to last console.log

console.log(whichSchool(229))

