const studentList = [
  { name: "Dokja", age: 31, score: 85 },
  { name: "Jung-hyuk", age: 31, score: 95 },
  { name: "Soo-young", age: 35, score: 76 },
];

console.log(studentList[0]);

const student1 = { name: "Sang-ah", age: 26, score: 85 };
studentList.push(student1); //리스트 넣기

console.log(studentList);

studentList.pop(); //리스트 제거

console.log(studentList);
