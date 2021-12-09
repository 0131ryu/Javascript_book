const number10 = 10;
const number20 = 20;

const plusResult = number10 + number20;
const minusResult = number10 - number20;
const multipleResult = number10 * number20;
const divideResult = number10 / number20;

console.log(plusResult);
console.log(minusResult);
console.log(multipleResult);
console.log(divideResult);

console.log("5 % 2 : ", 5 % 2); //1

const numbers = [5, 6, 7, 8];

console.log(numbers[0], "is even number: ", numbers[0] % 2 === 0); //false
console.log(numbers[1], "is even number: ", numbers[1] % 2 === 0); //true
console.log(numbers[2], "is even number: ", numbers[2] % 2 === 0); //false
console.log(numbers[3], "is even number: ", numbers[3] % 2 === 0); //true

const string1 = "hello";
const string2 =
  "The method then selects elements from the start argument, and up to (but not including) the end argument.";

console.log("string1: ", string1.length);
console.log("string2: ", string2.length);
console.log("string1[0]: ", string1[0]);
console.log("string2[104]: ", string2[104]);

const string3 = "helhelhelhelhelhel";

console.log(string1.indexOf("hel")); //0번째 위치
console.log(string1.indexOf("el")); //1
console.log(string3.indexOf("el")); //1
console.log(string2.indexOf("method")); //4
console.log(string2.indexOf("bye")); //-1(없음)

const numbers2 = [1, 2, 3];
const strings2 = ["hello", "bye", "welcome"];

const numbers3 = new Array(1, 2, 3);
const strings3 = new Array("hello", "bye", "welcome");

console.log(numbers2); //[1, 2, 3]
console.log(strings2); //[ 'hello', 'bye', 'welcome' ]
console.log(numbers3); //[1, 2, 3]
console.log(strings3); //[ 'hello', 'bye', 'welcome' ]

let ar = [];
let numbers4 = new Array(1, 2, 3);

console.log(ar); //[]
console.log(numbers4); //[1, 2, 3]

const arNumbers = [];
arNumbers.push(4);
arNumbers.push(5);
arNumbers.push(6);

const arTexts = [];
arTexts.push("hi", "안녕", "こんにちは");

console.log(arNumbers); //[4, 5, 6]
console.log(arTexts); //[ 'hi', '안녕', 'こんにちは' ]

const arCoffee = [];
console.log(arCoffee[0]); //undefined
console.log(arCoffee.length); //0

arCoffee.push("아메리카노", "라떼", "카푸치노");
console.log(arCoffee.length); //3
console.log(arCoffee[0]); //아메리카노

const pi = 3.14;
const name = "jihye";

console.log(typeof "hello"); //string
console.log(typeof "20"); //string
console.log(typeof pi); //number
console.log(typeof name); //string
console.log(typeof 30); //number
console.log(typeof []); //object
console.log(typeof {}); //object

console.log(10 > 20); //false
console.log(30 > 20); //true

const isTrue = true;
const isFalse = false;

console.log(isTrue); //true
console.log(isFalse); //false

console.log(typeof true); //boolean
console.log(typeof false); //boolean

const number5 = !1;
console.log(number5); //false
