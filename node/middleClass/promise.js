//비동기처리 : 자원을 효율적으로 사용하고 속도를 높임 -> 리턴값이 없는 콜백함수 사용
//가독성이 떨어져서 실수할 수 있음 -> 해결책 : 프로미스(콜백 중첩을 좀 더 보기 쉽게 작성)

const promiseFirst = new Promise(resolve => resolve(1)) //핵심은 첫 번째는 resolve()를 쓴다는 것
    .then(result => `${result + 10}`);

const promiseSecond = new Promise(resolve => resolve(2))
    .then(result => `${result + 20}`);

Promise.all([promiseFirst, promiseSecond]).then(result => {
    console.log(result);
    console.log(Number(result[0]) + Number(result[1]))});

