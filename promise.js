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

// Promise를 사용하여 작업이 완료된 후 실행할 코드를 체인으로 연결 가능.
// fulfilled 상태가 되었을 때 then 메소드를 이용해 코드 실행,
// rejected 상태가 되었을 때 catch 메소드를 이용해 코드 실행

promise
  .then(result => {
    console.log(result); // "Stuff worked!"
  })
  .catch(error => {
    console.error(error); // Error: "It broke"
  });

// async, await 문법도 함께 사용 가능.
