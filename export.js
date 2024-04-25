// User.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// index.js -> 기본 내보내기를 'data'라는 새로운 이름으로 재명명.
export { default as UserClass } from './User';

// App.js
import { UserClass } from './index';

const user = new UserClass('John');
