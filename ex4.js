//int number
var num1 = 10;
console.log("This number is " + num1);
//string
var str1 = "Hello World";
console.log(str1);
//boolean
var b1 = true;
console.log("True or False: " + b1);
//num array
var numAr1 = [1, 3, 5];
for (var i = 0; i < numAr1.length; i++) {
    console.log("Num" + (i + 1) + ": " + numAr1[i] + ", ");
}
//tuple
var x;
x = ["Hello", 10];
console.log("Tuple Example: " + x[0].substring(1));
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
var c = Color.Green;
console.log(c);
console.log(colorName);
