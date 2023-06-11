// JS는 코드를 위에서 아래 방향으로 실행.

// setTimeout은 콜백 함수를 매크로 테스크 큐에 추가.
// 그 콜백이 시작되려면 현재 실행중인 코드가 종료된 후 이벤트 루프가 매크로 테스크 큐를 처리할 때까지 대기.

console.log('1: Start script');

setTimeout(() => {
  console.log('2: In the timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('3: In the Promise');
});

console.log('4: End script');

// 아래는 콘솔 결과
// 1: Start script
// 4: End script
// 3: In the Promise
// 2: In the timeout
