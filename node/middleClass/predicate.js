const isApple = (fruit) => {
    if(fruit === 'apple') return true;
    return false;
}

console.log(isApple('apple'));
console.log(isApple('orange'));

const numbers = [1, 2, 19, 38, 4, 98, 25];

const isFirstBiggerThenSecond = (first, second) => {
    if(first > second) return true;
    return false;
}

const sortedNumbers = numbers.sort(isFirstBiggerThenSecond);
console.log(sortedNumbers);