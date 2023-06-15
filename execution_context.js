// 어떤 함수가 실행될 때 이에 대한 정보를 담고 있는 환경을 의미.
// 변수, 함수 선언, this, 외부 환경에 대한 정보 등을 포함.

let x = 'global';

function outer() {
    let x = 'outer'; // let은 블록 스코프를 가짐. 선언된 블록 내에서만 존재.
    
    function inner() {
        let x = 'inner';
        console.log(x);  // 'inner' 출력
    }
    
    inner();
    console.log(x);  // 'outer' 출력
}

outer();
console.log(x);  // 'global' 출력
