// 콜백이란, 함수의 인자로 전달되는 함수.
// 다른 함수 내에서 실행될 함수를 지정, 그 함수가 완료된 이후 실행될 로직을 정의 가능.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(number) {
  return number * 2;  // 콜백 함수
});
console.log(doubled); // [2, 4, 6, 8, 10]


// 파일을 읽는 작업을 비동기로 수행
const fs = require('fs');

fs.readFile('example.txt', 'utf8', function(err, data) {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('File contents:', data);
});


// 배열 메소드 콜백 예제
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]


// 비동기 콜백
setTimeout(function() {
  console.log('3초가 지났다 !!!');
}, 3000);
console.log('setTimeout has been called.');
