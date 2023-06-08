// JS에서 함수와 함수가 선언된 어휘적 환경의 조합.
// 어휘적 환경이란? -> 함수는 자신이 어떤 변수에 접근할 수 있는지, 이 변수들이 어떤 값을 가지는지 알 수 있음.

// 이를 통해 JS에서 함수는 바깥 스코프에서 선언된 변수에 접근 가능.
// 데이터 은닉 및 캡슐화, 상태 유지, 팩토리 함수에 용이.
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('outerVariable:', outerVariable);
    console.log('innerVariable:', innerVariable);
  }
}

const newFunction = outerFunction('outside');
newFunction('inside');  // logs: outerVariable: outside     // innerVariable: inside


// 1. 데이터 은닉
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getCurrentCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCurrentCount());  // 1
console.log(counter.count);  // undefined
