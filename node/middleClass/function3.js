const multiple5 = (x) => x * 5;
const add10 = (x) => x + 10;

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;

//(20 + 10) * 5;
console.log(multiple5(add10(20)));

//(10 + 20) - 40
console.log(minus(plus(10, 20), 40));

//커링(curring) : 여러 개의 파라미터를 갖는 함수가 존재 시 그 중 일부의 파라미터만 필요로 하는 함수
const add = (x) => (y) => x + y;
const add20 = add(20);

console.log(add20(20)); // 20 + 20
console.log(add(20)(30)); //20 + 30

const coffeeMachine = (liquid) => (espresso) => `${espresso}+${liquid}`;

const americanoMachine = coffeeMachine("water");
const latteMachine = coffeeMachine("milk");

const americano = americanoMachine("coffee bean");
const latte = latteMachine("coffee bean");

console.log(americano);
console.log(latte);
