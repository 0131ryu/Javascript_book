function printHello() {
  console.log("hello");
}

printHello();

const printBye = () => {
  //= () => : function()과 동일
  console.log("bye");
};

printBye();

function sum(a, b) {
  const r = a + b;
  return r;
}

const result = sum(100, 200);
console.log(result);
