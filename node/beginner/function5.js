const printHello = () => console.log("hello"); //()가 function을 의미
const printHello2 = () => "hello2"; //hello2를 리턴함
const printMessage = (message) => console.log(message);
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;

printHello();
console.log(printHello2());
printMessage("message");
console.log(plus(10, 20));
console.log(minus(10, 20));

const sumAndPrint = (a, b) => {
  const result = a + b;
  return `결과는 ${result}입니다.`;
};

const result = sumAndPrint(50, 60);
console.log(result); //110

const studentList = [
  { name: "Sherlcok", age: 31, math: 85, science: 75 },
  { name: "John", age: 31, math: 95, science: 83 },
  { name: "Moriarty", age: 35, math: 76, science: 98 },
];

const plus2 = (a, b) => a + b;

studentList.forEach((student) =>
  console.log(`${student.name} total : ${plus(student.math, student.science)}`)
);

console.log("----------------------------------------------------");

studentList.forEach((student) => {
  console.log(`${student.name} total :${plus(student.math, student.science)} `);
});
