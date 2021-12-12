const students = [
    {name: 'kim', age: 26, score: 85},
    {name: 'han', age: 30, score: 95},
    {name: 'lim', age: 35, score: 76}
];

//점수가 80이상인 학생들의 점수 합
const upper80StudentsSum = students
    .filter(student => student.score > 80)
    .map(student => student.score)
    .reduce((a, b) => (a + b));

//이름
const upper80Students = students
    .filter(student => student.score > 80)
    .map(student => student.name);

console.log(upper80StudentsSum);
console.log(upper80Students);

const employeeList = [
    {name: 'lee', age: 31, department: 'development'},
    {name: 'park', age: 31, department: 'design'},
    {name: 'ahn', age: 35, department: 'development'}
];

const developerAgeList = employeeList
    .filter(employee => employee.department === 'development')
    .map(employee => employee.age)
    .reduce((a, b) => (a + b));

//개발팀의 나이
console.log(developerAgeList);