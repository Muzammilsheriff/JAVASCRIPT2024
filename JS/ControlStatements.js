// Control Statements
// Conditional Statements
// if 
var a = 15;
if (a > 10) {
    document.write("a is greater than 10");
} 

// if else
var a = 5;
if (a > 10) {
    document.write("a is greater than 10"); // true statements
} else {
    document.write("a is less than 10"); // false statements
}

// if else if
var a = 15;
if (a > 10) {
    document.write("a is greater than 10"); // true statements
} else if (a < 10) {
    document.write("a is less than 10"); // false statements
} else if (a == 10) {
    document.write("a is equal to 10"); // false statements
} else {
    document.write("a is not equal to 10"); // false statements
}

document.write("<br>");
// switch case
var a = 'Monday';
switch (a) {
    case 'Monday':
        document.write("a is 10");
        break;
    case 15:
        document.write("a is 15");
        break;
    default:
        document.write("a is not 10 or 15");
        break;
}
