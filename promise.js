let promise = new Promise(function(resolve, reject) {
  // 비동기 작업을 수행하는 코드

  if (/* 비동기 작업 성공 */) {
    resolve(value); // 작업 성공 시 결과값으로 resolve 호출
  } else {
    reject(error); // 실패 시 에러로 reject 호출
  }
});
