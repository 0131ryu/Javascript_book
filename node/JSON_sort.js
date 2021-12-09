const studentList = [
  { name: "Dokja", age: 31, math: 85, english: 87 },
  { name: "Jung-hyuk", age: 31, math: 95, english: 97 },
  { name: "Soo-young", age: 35, math: 76, english: 84 },
  { name: "Sang-ah", age: 24, math: 84, english: 73 },
  { name: "Hyunseong", age: 26, math: 54, english: 67 },
  { name: "Hee-won", age: 29, math: 34, english: 100 },
];

studentList.sort((now, next) => now.math - next.math);
console.log(studentList); //수학기준 오름차순

const compare = (now, next) => {
  console.log("------------------------");
  console.log(now);
  console.log(next);
};

studentList.sort(compare); //console.log 안 해도 결과가 나옴
