//use of variables
let name = 'Shankar';

// using + as concatenation operator
console.log('displaying the name from variable' + name);

// multiple variable declaration in a single line , not recommended for standard coding practice
let lastname = 'Neupane', age = 25, address = 'butwal';
console.log('my last name is ' + lastname + ' age is ' + age + ' address is ' + address + ' ');

//multi line variable declaration
let interest = 'coding'
hobby = 'football'
role = 'test engineer'

// var vs let
// var keyword declares the variable globally while let is limited to the current method,file or loop only
// let declares the variable to current scope, method or loop only
// if var is declared inside a method, it becomes function level only
function sayHi() {
  if (true) {
    var phrase = "Let and var variables";
  }
  alert(phrase); // var lives even out of the if method
}
sayHi();
//if var is used with loop, it becomes global level
for (var i = 0; i < 10; i++) {
  console.log(i)
  var num = 'one'
}
console.log(i); //displays 10
console.log(num) //displays one

//var allows redeclaration 
var a = 'value1';
var a = 'redeclaredvalue';
console.log(a); // displayes the redeclared value of a 

//Hard coded const values displayed in uppercase as their values are already known prior to execution
const COLOR_RED = "#F00"
const BIRTHDAY = "10.08.1997" //Birthday is already known to the user
alert(COLOR_RED); //F00
const age = calculateAge(BIRTHDAY);
function calculateAge() {

}