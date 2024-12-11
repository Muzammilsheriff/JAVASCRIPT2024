
// Operators
// Arithmetic Operators
// + - * / % ** (exponent)
var a = 5;
var b = 3;
var c = a + b;

console.log(c);

var c = a - b;
console.log(c);

var c = a * b;
console.log(c);

var c = a / b;  // Remaider
console.log(c);

var c = a % b;  // Quotient
console.log(c);

var c = a ** b;
console.log(c);

// Logical Operators
// && -> AND , || -> OR , ! ->NOT

// Relational Operators
// < > <= >= == === != !==
var a = 5;
var b = '5';
var c = a < b;
console.log(c);

var c = a > b;
console.log(c);

var c = a <= b; // less than or equal to
console.log(c); 

var c = a >= b; // greater than or equal to     
console.log(c);    

var c = a == b; // equal to
console.log(c);

var c = a != b; // not equal to
console.log(c);

var c = a === b; // strictly equal to
console.log(c);

var c = a !== b; // strictly not equal to
console.log(c);


// Assignment Operators
// = += -= *= /= %= **=
var a = 5;
var b = 3;
var c = a + b;
a += b; // a = a + b
console.log(c);

var c = a - b;
a -= b; // a = a - b
console.log(c); 

var c = a * b;
a *= b; // a = a * b
console.log(c); 

var c = a / b;
a /= b; // a = a / b
console.log(c); 

var c = a % b;
a %= b; // a = a % b
console.log(c); 

var c = a ** b;
a **= b; // a = a ** b
console.log(c); 

// Ternary Operators
// condition ? true : false
var a = 5;
var b = 7;
var c = a > b ? "a is greater than b" : "a is less than b";
console.log(c);
