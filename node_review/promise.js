const promiseFirst = new Promise(resolve => resolve(1)) //핵심은 첫 번째는 resolve()를 쓴다는 것
    .then(result => `${result + 50}`);

const promiseSecond = new Promise(resolve => resolve(2))
    .then(result => `${result + 100}`);

const promiseThird = new Promise(resolve => resolve(3))
    .then(result => `${result + 200}`);

Promise.all([promiseFirst, promiseSecond, promiseThird]).then(result => {
    console.log(result);
    console.log(Number(result[0]) + Number(result[1]) + Number(result[2]))});

