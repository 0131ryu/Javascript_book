function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

let p = plus;

console.log(typeof plus); //function
console.log(typeof minus); //function
console.log(typeof p); //function
console.log(p(10, 20)); //30

//함수를 파라미터로 받는 함수
function calculate(a, b, func) {
  return func(a, b); //func를 붙여줘야 파라미터로 적용됨
}

console.log(calculate(10, 20, plus)); //30
console.log(calculate(10, 20, minus)); //-10
