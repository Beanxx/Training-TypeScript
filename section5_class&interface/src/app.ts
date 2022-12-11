// [interface & type 차이점]
// interface: 객체의 구조를 설명하기 위해서만 사용하며, 서로 다른 클래스 간의 기능을 공유하기 위해 사용

// interface: 객체 구조 설명 (객체 형태 설명)
// interface 이름은 대문자로 작성하는 것을 지양!

// 함수 타입으로서의 interface
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string; // optional!
}

// extends로 여러 인터페이스를 병합 가능!
interface Greetable extends Named {
  // (인수 이름: 타입): 메소드  반환 타입 
  greet(phrase: string): void;
}

// 상속은 한 클래스로부터만 상속할 수 있지만
// 인터페이스는 쉼표로 여러 개 구현 가능 (여러 인터페이스로부터 상속받을 수 있음)
class Person implements Greetable {
  name?: string; // interface 때문에 입력해야 하는 name 속성이 읽기 전용임을 자동으로 추론하므로 아래서 error 발생
  age = 24;

  constructor(n?: string) {
    if (n) this.name = n;
  }

  greet(phrase: string): void {
    if (this.name) console.log(phrase + ' ' + this.name);
    else console.log('Hi!')
  }
}

let user1: Greetable;

user1 = new Person(); // ?:를 통해 n을 선택적 매개변수로 설정했으므로 매개변수 값이 없더라도 생성자 호출 가능! => Hi!
// user1.name = 'Bin'; -> error

user1.greet('Hi there - I am');
console.log(user1);