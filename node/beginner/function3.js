//함수선언식
function printMessage(message) {
  console.log(message);
}

//함수표현식
const printWelcome = function () {
  console.log("welcome");
};

printMessage("bye");
printWelcome();

console.log(typeof printMessage); //함수
console.log(typeof printWelcome); //함수

const pm = printMessage; //괄호 안 씀
pm("good morning");
console.log(typeof pm); //함수
