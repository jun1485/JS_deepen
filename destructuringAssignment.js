// 구조분해할당은, 배열이나 객체의 속성을 해체해서 그 값을 개별 변수에 담을 수 있도록 함.
const person = {
    name: 'John Doe',
    age: 30,
    location: 'New York'
};

const { name, age } = person; // 'name'과 'age'속성이 'person'객체에서 추출되어 각각의 변수로 선언됨. 이 변수들은 객체의 해당 키와 동일한 이름을 가짐.
console.log(name); // 출력: John Doe
console.log(age); // 출력: 30


function useData() {
    return {
        data: [1, 2, 3],
        loading: true,
        error: null
    };
}

const { data } = useData();  // useData()에서 반환된 객체의 'data' 속성을 추출
console.log(data);  // 출력: [1, 2, 3]


// 주의점) 구조분해할당을 사용할 때는 반환되는 객체에 해당 키가 반드시 존재해야 함. 그렇지 않으면, undefined 값을 얻게 됨.
// 반환 객체에서 사용하지 않는 속성들은 무시됨. 이는 때로 의도치 않은 버그를 초래할 수 있음.
