//JSON : 자바스크립트 오브젝트 표기법
const user = {};
user.name = "jihye";
user.age = 31;

console.log(user);

const user2 = { name: "jihye", age: 31 };
console.log(user2);

user.job = "developer";
user.nation = "korea";
console.log(user); //{ name: 'jihye', age: 31, job: 'developer', nation: 'korea' }

const memberName = "age";
console.log(user[memberName]); //31
