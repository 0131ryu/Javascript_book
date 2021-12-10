//map : 배열에 있는 모든 item에 .map의 파라미터로 받은 함수를 적용시킨 배열 리턴함
const list = [1, 2, 3];

const multipledList = list.map(item => item * 10);
multipledList.forEach(item => console.log(item));

const listEmployee = [
    {name : 'Dokja', age: 31, salary: 4000},
    {name : 'Jung-hyuk', age: 31, salary: 5000},
    {name : 'Soo-young', age: 35, salary: 6000}
];

const raiseSalaryList = listEmployee.map(employee => (employee.salary * 1.1));
raiseSalaryList.forEach(salary => console.log(salary));