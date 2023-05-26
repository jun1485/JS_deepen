// promise는 비동기 작업을 수행할 때 사용하는 객체.
// 비동기 작업이 완료되지 않았을 때에도 결과를 표현 방법 제공
// 비동기적으로 처리되는 데이터를 동기적으로 보는 데 유리.

const promise = new Promise((resolve, reject) => {
  // some asynchronous operation
  setTimeout(() => {
    if (/* everything turned out fine */) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  }, 1000);
});
