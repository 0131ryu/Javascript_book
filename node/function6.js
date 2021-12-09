const sum = (a, b) => a + b;

//콜백함수 : 특정 함수에 파라미터로 전달된 함수
//자바스크립트에서 함수는 일급객체, 변수에 담거나 전달하는 식으로 활용
//어떤 함수에 전달된 콜백함수는 해당 함수가 실행될 때 호출되는 방식
const printResult = (result) => {
  console.log(`결과는 ${result} 입니다.`);
};

const calculationAndPrint = (calculationResult, callback) => {
  callback(calculationResult);
};

calculationAndPrint(sum(10, 20), printResult);

const randomNumber = Math.random();
const zeroToNine = Math.floor(Math.random() * 10, 10);
const twentyToThirty = Math.floor(Math.random() * (30 - 20 + 1), 10) + 20;
const oneToTen = Math.floor(Math.random() * 10, 10) + 1;
const makeRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1), 10) + min;

console.log(randomNumber); //랜덤
console.log(zeroToNine); //0 ~ 10내외 랜덤
console.log(twentyToThirty); //20 ~ 30내외 랜덤
console.log(oneToTen); //1 ~ 10 내외 랜덤

for (let value = 1; value < 10; value += 1) {
  //10과 20 사이 숫자
  console.log(makeRandom(10, 20));
}
