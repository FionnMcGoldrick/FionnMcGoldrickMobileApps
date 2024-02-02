//int number
let num1: number = 10;
console.log("This number is " + num1);

//string
let str1: string = "Hello World";
console.log(str1);

//boolean
let b1: boolean = true;
console.log("True or False: " + b1);

//num array
let numAr1: number[] = [1,3,5];
for(let i = 0; i <numAr1.length; i++){
    console.log("Num" + (i+1) + ": " + numAr1[i] + ", ");
}

//tuple
let x: [string, number]
x = ["Hello" , 10];
console.log("Tuple Example: " + x[0].substring(1));

//enum
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
let c: Color = Color.Green;
console.log(c);
console.log(colorName);

