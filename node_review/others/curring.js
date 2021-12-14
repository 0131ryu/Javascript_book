//커링 :f(a, b, c)처럼 단일 호출로 처리하는 함수를 f(a)(b)(c)와 같이
//각각의 인수가 호출가능한 프로세스로 호출된 후 병합하도록 변환
//커링은 함수르 호출 x, 변환만 할 뿐

//예제1
function curry1(f) {//커링 변환을 하는 curry(f) 함수
    return function(a) {
        return function(b) {
            return f(a, b);
        }
    }
}

//usage
function sum(a, b) {
    return a + b;
}

let curriedSum1 = curry1(sum);

console.log(curriedSum1(1)(2)); //3


//예제2
function curry(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  }

  function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  
  console.log( curriedSum(1, 2, 3) ); // 6, 보통때 처럼 단일 callable 형식으로 호출하기
  console.log( curriedSum(1)(2,3) ); // 6, 첫 번째 인수를 커링하기
  console.log( curriedSum(1)(2)(3) ); // 6, 모두 커링하기