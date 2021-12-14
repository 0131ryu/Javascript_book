const employeeList = [
    {name: 'lee', age: 31, department: 'development'},
    {name: 'park', age: 31, department: 'design'},
    {name: 'ahn', age: 35, department: 'development'},
    {name: 'choi', age: 24, department: 'design'},
    {name: 'kim', age: 33, department: 'design'},
    {name: 'han', age: 22, department: 'design'}
];

//디자인팀 나이 합
const designAgeList = employeeList
    .filter(employee => employee.department === 'design')
    .map(employee => employee.age)
    .reduce((a, b) => (a + b));


console.log(designAgeList);

//디자인팀 이름
const designNameList = employeeList
    .filter(employee => employee.department === 'design')
    .map(employee => employee.name);

console.log(designNameList);

//디자인팀 나이 평균
const designAgeAverageList = employeeList
    .filter(employee => employee.department === 'design')
    .map(employee => employee.age)
    .reduce((previous, current, index, array) => previous + (current / array.length), 0);
    //[31, 24, 33, 22]  =>  0/4 -> 0/4 + 31/4  .... -> (0/4 + 31/4 + 24/4 + 33/4) + 22/4


console.log(designAgeAverageList);