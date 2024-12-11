// Control Statements
/*************  ✨ Codeium Command ⭐  *************/
// if-else Statements
var a = 5;
if (a > 10) {
    console.log("a is greater than 10");
} else {
    console.log("a is less than or equal to 10");
}

// Switch Statements
var day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Today is not Monday or Tuesday");
        break;
}

// Loops
// for loop
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do-while loop
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

// Functions
// Function Declaration
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

// Function Expression
var add = function (a, b) {
    return a + b;
}
console.log(add(5, 3));
/******  a3f86366-466f-44f1-970f-c4afaaa9c3e1  *******/