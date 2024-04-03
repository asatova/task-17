// 1 task

let colorOne = "red",
    colorTwo = "blue";
colorOne = colorTwo + ((colorTwo = colorOne), "");

console.log(colorOne);
console.log(colorTwo);

// konsolga blue , red chiqdi

// 2 task

let a = 7;
let b = 19;

a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);

// konsolga 19 , 7 chiqdi

// 3- task

var c = 10;
var d = 20;
c = c + d;
d = c - d;
c = c - d;
document.write("c = " + c + "</br> d = " + d);
