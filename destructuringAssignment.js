const person = {
    name: 'John Doe',
    age: 30,
    location: 'New York'
};

const { name, age } = person; // 'name'과 'age'속성이 'person'객체에서 추출되어 각각의 변수로 선언됨. 이 변수들은 객체의 해당 키와 동일한 이름을 가짐.
console.log(name); // 출력: John Doe
console.log(age); // 출력: 30
