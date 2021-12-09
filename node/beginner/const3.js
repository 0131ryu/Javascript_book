const a = 5;
const b = 6;

if (a == 5) {
  console.log(a == 5); //true
  console.log(a == b); //false
  console.log(a == "5"); //true
}

if (a === 5) {
  console.log(a === 5); //true
  console.log(a === b); //false
  console.log(a === "5"); //false
}

if (a > b) {
  console.log(a > b); //false
}

if (a < b) {
  console.log(a < b); //true
}

if (a >= 5) {
  console.log(a >= 5); //true
  console.log(a >= b); //false
}

if (a <= 5) {
  console.log(a <= 5); //true
  console.log(a <= b); //true
}

const value30 = 30;
const value50 = 50;

const andTrueTrue = value30 >= 30 && value50 >= 30;
const andTrueFalse = value30 >= 30 && value50 >= 100;
const andFalseFalse = value30 >= 40 && value50 >= 100;

const orTrueTrue = value30 >= 30 || value50 >= 30;
const orTrueFalse = value30 >= 30 || value50 >= 100;
const orFalseFalse = value30 >= 40 || value50 >= 100;

console.log(andTrueTrue); //true
console.log(andTrueFalse); //false
console.log(andFalseFalse); //false

console.log(orTrueTrue); //true
console.log(orTrueFalse); //true
console.log(orFalseFalse); //false

const num1 = 1;
const num2 = 2;
const list = [1, 2, 3, 4];
const emptyList = [];

const result = num1 > num2 ? "num1" : "num2";
console.log(result, "이(가) 더 큽니다."); //num2가 더 큽니다.

list.length > 0 ? console.log(list) : console.log("list가 비었습니다."); //[1, 2, 3, 4]
emptyList.length > 0
  ? console.log(emptyList)
  : console.log("list가 비었습니다."); //list가 비었습니다.
