const students = [
  { name: "Harry", age: 7, score: 85 },
  { name: "Ron", age: 8, score: 95 },
  { name: "Hermione", age: 7, score: 76 },
];

function getDegree(scroe) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 60) {
    return "C";
  }
  return "F";
}

students.forEach((student) => {
  const result = `name : ${student.name}, score : ${student.score}`;
  console.log(result);
});
