const sayHello = function (name) {
  console.log("Hello " +name);
}
sayHello("Jonathan");

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('Abbie');

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('Queenie');
console.log(greeting);