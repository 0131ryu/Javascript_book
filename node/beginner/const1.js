const string10 = "10";
const string20 = "20";
const number10 = 10;
const number20 = 20;

console.log("string:%s", string10 + string20); //1020
console.log("number:%d", number10 + number20); //30
console.log("string + number:%s", string10 + number20); //1020

//isNaN = is Not a Number (숫자면 false, 숫자가 아니면 true)
const isNaN123 = isNaN(123); //false
const isNaNMinus123 = isNaN(-123); //false
const isNaN234 = isNaN("234"); //false
const isNaNHello = isNaN("hello"); //true

console.log(isNaN123);
console.log(isNaNMinus123);
console.log(isNaN234);
console.log(isNaNHello);
