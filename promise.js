// 비동기 작업이 성공하면 'resolve'가 호출되어 promise가 'fulfilled' 상태가 되며, 실패하면 'reject'가 호출되어 'rejected'상태가 됨.
// 이후 promise의 결과에 따라 이후 처리를 연결하기 위해 .then() .catch .finally 메소드를 사용.
let promise = new Promise(function(resolve, reject) {
  // 비동기 작업을 수행하는 코드

  if (/* 비동기 작업 성공 */) {
    resolve(value); // 작업 성공 시 결과값으로 resolve 호출
  } else {
    reject(error); // 실패 시 에러로 reject 호출
  }
});

fetch('https://api.example.com/data')
  .then(response => response.json()) // 응답을 JSON으로 파싱
  .then(data => console.log(data)) // 성공적으로 데이터를 가져온 경우
  .catch(error => console.error('Error:', error)); // 에러 처리
