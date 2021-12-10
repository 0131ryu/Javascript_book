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
