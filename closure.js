// JS에서 함수와 함수가 선언된 어휘적 환경의 조합.
// 이를 통해 JS에서 함수는 바깥 스코프에서 선언된 변수에 접근 가능.

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('outerVariable:', outerVariable);
    console.log('innerVariable:', innerVariable);
  }
}

const newFunction = outerFunction('outside');
newFunction('inside');  // logs: outerVariable: outside     // innerVariable: inside
