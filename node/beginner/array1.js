const strings = [
  "Abyssal Black Flame Dragon",
  "Demonic Judge of Fire",
  "covert plotter",
  "Prisoner of Gingoa",
  "god of alcohol and ecstasy",
  "the darkest queen of spring",
  "rich night father",
];

const sliced = strings.slice(0, 4);
console.log(sliced);

const studentList = [
  { name: "Dokja", age: 31, math: 85, english: 87 },
  { name: "Jung-hyuk", age: 31, math: 95, english: 97 },
  { name: "Soo-young", age: 35, math: 76, english: 84 },
  { name: "Sang-ah", age: 24, math: 84, english: 73 },
  { name: "Hyunseong", age: 26, math: 54, english: 67 },
  { name: "Hee-won", age: 29, math: 34, english: 100 },
];

const sorted = studentList.sort((now, next) => now.math - now.math); //수학기준 내림차순
console.log(sorted);
const reversed = sorted.reverse(); //수학기준 오름차순
console.log(reversed);
const sliced2 = reversed.slice(0, 3);
console.log(sliced2);
