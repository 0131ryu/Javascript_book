const scores = [10, 20, 30, 40, 50];

//reduce : 해당 배열의 가장 처음 인덱스부터 마지막 인덱스까지의 값에 대한 누적 계산을 통해 하나의 결과를 내보내는 함수
const sum = scores.reduce((a, b) => a + b);
const sumWithInitValue = scores.reduce((a, b) => a + b, 10);

console.log(sum);
console.log(sumWithInitValue);

const students = [
    {name: 'kim', age: 26, score: 85},
    {name: 'han', age: 30, score: 95},
    {name: 'lim', age: 35, score: 76}
]

const scores2 = students.map(student => student.score); 
//map함수 : map함수는 callbackFunction을 실행한 결과를 가지고 새로운 배열을 만들 때 사용한다.

const sum2 = scores2.reduce((a, b) => a + b, 0); //초기값은 0
console.log(sum2);