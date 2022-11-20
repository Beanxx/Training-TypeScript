// enum {NEW, OLD}: [열거형] 자스에선 존재하지 않으며 타스에만 존재하는 타입

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };
// 시작 숫자를 0으로 시작하지 않으려는 경우, 식별자에 등호를 추가하여 다른 숫자 입력도 가능!
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR = 'AUTHOR' }; // => 5 6 AUTHOR
// 숫자 말고도 문자 등도 할당 가능!

const person = {
  name: 'bean',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  // role: ADMIN // type: number => 이를 해결하는 방법이 바로 enum 타입 사용하기!
  role: Role.ADMIN
}

// any: 가장 유연한 타입으로, 모든 종류의 값 저장 가능
let anyArr: any[]; // 뭔가를 포함한 배열
anyArr = ['hi', 10]; // 어떠한 타입의 원소가 와도 error를 발생시키지 않음
// But, any 타입 사용시 타스의 장점이 사라져 자스를 쓰는 것과 다를게 없어지는 단점쓰.. 

if (person.role === Role.ADMIN) {
  console.log('is admin');
}