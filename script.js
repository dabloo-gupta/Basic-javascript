// alert("hello world!");
alert("only two minutes left to complete the test. Hurry up");

//prompt(msg,  [default])
// It has OK/Cancel button
var age= parseInt(prompt("what's your age?",18))
console.log( typeof age)
// document.write(age)

if(age >= 18){
    console.log("user is eligible");
} else{
    console.log("user not eligible");
}
var radius = prompt("radius:")
console.log(radius);
var area = 3.14 * radius*radius;
console.log("area of the circle is:", area);
//confirm : returns a true or false
//cancel => false
//OK => true
var isClassTomorrow = confirm("Is there any class tomarrow");
console.log(isClassTomorrow);