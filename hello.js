/*
const sayHello  = function (name) {
  console.log("Hello, world! " + name);
}

sayHello("Ken");
*/

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);