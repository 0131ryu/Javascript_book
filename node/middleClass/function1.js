const returnFunction = () => (a, b) => a + b;

const plus = returnFunction();

console.log(plus(10, 20));

const countdown = (value) => {
  console.log("value:", value);
  if (value === 0) return value;
  return countdown(value - 1);
};

console.log(countdown(20));
console.log(countdown(0));

const sumNumber = (start, end, accumulator) => {
  if (start > end) return accumulator;
  return sumNumber(start + 1, end, accumulator + start);
};

console.log(sumNumber(1, 10, 0));

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(4)); //n * (n-1) * (n-2) **** 1

const fibonacci = (num) => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

for (let i = 1; i < 10; i += 1) {
  console.log(fibonacci(i));
}
