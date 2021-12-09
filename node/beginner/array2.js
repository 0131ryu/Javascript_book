const studentList = [
  { name: "Dokja", age: 31, math: 85, english: 87 },
  { name: "Jung-hyuk", age: 31, math: 95, english: 97 },
  { name: "Soo-young", age: 35, math: 76, english: 84 },
  { name: "Sang-ah", age: 24, math: 84, english: 73 },
  { name: "Hyunseong", age: 26, math: 54, english: 67 },
  { name: "Hee-won", age: 29, math: 34, english: 100 },
];

const part1 = ["Dokja", "Jung-hyuk"];
const part2 = ["Soo-young", "Sang-ah"];
const part3 = ["Hyunseong", "Hee-won"];

const team = part1.concat(part2);
const team2 = part1.concat(part2, part3);

console.log(team);
console.log(team2);

const destination = ["seoul", "underworld", "devildom"];

console.log(destination.shift()); //배열의 첫 번째 값 뽑기
destination.unshift("martial arts"); //첫 번째 배열에 추가
console.log(destination);

console.log(destination.pop()); //배열의 마지막 값 뽑기
console.log(destination);

//배열 조회
const destinationName = ["인천", "양양", "제주", "경주"];

const searchDestination = "제주";

for (let i = 0; i < destinationName.length; i++) {
  if (searchDestination === destinationName[i]) {
    console.log(searchDestination, "입니다.");
    break;
  }
}
