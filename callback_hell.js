// 콜백 지옥이란, 여러 개의 비동기 작업을 순차적으로 처리하거나, 서로 의존성을 가지는 경우에
// 콜백 함수를 계속 중첩해야 하는 상황. (복잡성 +, 가독성 -)


// 세 개의 파일을 순차적으로 읽음
// 각 파일을 읽는 작업은 이전 파일의 작업이 완료되어야 시작.
const fs = require('fs');

fs.readFile('file1.txt', 'utf8', function(err, data) {
  if (err) {
    console.error('Error reading file1:', err);
  } else {
    console.log('File1 contents:', data);
    fs.readFile('file2.txt', 'utf8', function(err, data) {
      if (err) {
        console.error('Error reading file2:', err);
      } else {
        console.log('File2 contents:', data);
        fs.readFile('file3.txt', 'utf8', function(err, data) {
          if (err) {
            console.error('Error reading file3:', err);
          } else {
            console.log('File3 contents:', data);
            // And so on...
          }
        });
      }
    });
  }
});


// 아래는 콜백 지옥의 개선책
// fs.readFile 파일을 Promise로 감싸는 함수.
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

// await 키워드로 Promise가 완료될 때까지 실행을 일시 중단.
// readFile 호출이 완료되어 결과를 반환할 때까지 기다림.
// try, catch를 사용하여 readFile 호출에서 발생하는 예외를 처리.
async function readFiles() {
    try {
        const data1 = await readFile('file1.txt', 'utf8');
        console.log('File1 contents:', data1);

        const data2 = await readFile('file2.txt', 'utf8');
        console.log('File2 contents:', data2);

        const data3 = await readFile('file3.txt', 'utf8');
        console.log('File3 contents:', data3);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFiles();
