const ages = [11, 12, 14, 16, 21, 31];

const upper16 = ages.filter(age => age > 16);
const under13 = ages.filter(age => age < 13);
const between12And21 = ages.filter(age => age > 12 && age < 21);

console.log(upper16);
console.log(under13);
console.log(between12And21);

const students = [
    {name : 'Dokja', age: 31, math: 85, english: 87},
    {name : 'Jung-hyuk', age: 31, math: 95, english: 97},
    {name : 'Soo-young', age: 35, math: 76, english: 84},
    { name: 'Sang-ah', age: 24, math: 84, english: 73},
    { name: 'Hyunseong', age: 26, math: 54, english: 67},
    { name: 'Hee-won', age: 29, math: 34, english: 100}
]

const mathUpper80 = students.filter(stuednt => stuednt.math > 80);
const mathUpper90AndEnglishUpper70 = students.filter(student => student.math > 90 && student.english > 70);

console.log(mathUpper80);
console.log(mathUpper90AndEnglishUpper70);