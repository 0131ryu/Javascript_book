const students = [
    {name: 'kim', age: 31, score: 85},
    {name: 'lee', age: 31, score: 95},
    {name: 'park', age: 35, score: 76},
    {name: 'choi', age: 24, score: 84},
    {name: 'han', age: 26, score: 54},
    {name: 'ahn', age: 29, score: 34}
];

//21 이상 30미만 점수의 평균 
const between21to30StudentsAverage = students
    .filter(student => student.age >= 21 && student.age < 30)
    .map(student => student.score)
    .reduce((previous, current, index, array) => previous + (current / array.length), 0);
    //[84, 54, 34] => 0/3 -> 0/3 + 84/3  .... -> (0/3 + 84/3 + 54/3) + 34/3

console.log(between21to30StudentsAverage);