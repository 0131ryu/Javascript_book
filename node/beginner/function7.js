//전역변수 : 함수 외부에 선언
let resultSubtraction;
function subraction(a, b) {
  resultSubtraction = a - b;
}

subraction(100, 50);
console.log(resultSubtraction);

//변수에 익명함수 형태로 함수를 정의할 수 없음
function multiple(a, b) {
  const result = a * b;
  return result;
}

const r = multiple(10, 20);
console.log(r);

//지역변수 : 함수 내부에 선언
function sum(a, b) {
  const resultSum = a + b;
}

sum(20, 30);
//console.log(resultSum); -> 지역변수이기 때문에 오류 발생
