//에러가 발생하나 프로그램이 멈추지 않음
try {
  printMessage("hello");
} catch (e) {
  console.log("error:", e);
}

console.log("program finished");

const printHello = () => console.log("hello");

try {
  printHello();
} catch (e) {
  console.error(e);
} finally {
  console.log("finally1");
}

try {
  printBye();
} catch (e) {
  console.error(e);
} finally {
  console.log("finally2");
}
