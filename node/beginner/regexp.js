//정규 표현식 : 문자열에서 내가 필요한 부분만 골라낼 수 있음
// /로 시작해 /g로 끝남

const string = "<h1>:::특별가 - 99,000원:::</h1>";
const result1 = string.replace(/<h1>/g, "");
console.log(result1);

const result2 = string.replace(/<h1>/g, "").replace(/<\/h1>/g, "");
console.log(result2);

const result3 = string.replace(/<..>/g, ""); //<로 시작하고 .한글자 .두글자
const result4 = string.replace(/<..../g, "");

console.log(result3);
console.log(result4);

const string2 = "<h1>특별가 - </h1><h2>88,000원</h2>";
const stringDiv = "<div>특별가 - </div><h2>99,000원</h2>";
const replaceH1 = string2.replace(/<.{0,1}h1>/g, "");
const replaceTags = stringDiv.replace(/<.{0,4}>/g, "");

console.log(replaceH1);
console.log(replaceTags);

const string3 = "(<h1>:::특별가 - 77,000원:::</h1>)";

const replaceBracket = string3.replace(/[()]/g, "");
const replaceBracketOrSlashHyphenComma = string3.replace(/[()/\-,]/g, "");

console.log(string3);
console.log(replaceBracket);
console.log(replaceBracketOrSlashHyphenComma);

const text = "hello my name is conan";
const matched = text.match(/[a~l]{1,3}/g);

console.log(matched);

// setInterval(() => console.log('hello'), 1000); //1초마다 실행
//
// const printBye = () => console.log('bye');
// setInterval(printBye, 2000); //2초마다 실행
//
// setTimeout(() => console.log('javascript'), 3000); //3초 후에 실행(1번)

const playInterval = setInterval(() => console.log("hi!"), 1000);

setTimeout(() => {
  clearInterval(playInterval);
}, 5000); //5초 후 종료
