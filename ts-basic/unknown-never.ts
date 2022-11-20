// unknown: any와 비슷하지만 다른 타입으로, 사용자가 무엇을 입력할지 알 수 없을 때 사용
// any보다 unknown 타입 지정이 나은 이유는 타입 검사를 수행할 수 있기 때문!

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Bean';

// unknown을 사용하는 경우, userInput에 현재 저장된 타입을 확인해야 원하는 변수에 할당 가능
// userName = userInput; // string !== unknown =>  error!!

if (typeof userInput === 'string') {
  userName = userInput;
}

// 에러 객체를 생성하여 넘기는 utility function
// => never를 반환하며, 반환값을 생성하지 않음
// 이 함수의 반환 타입으론 void, never 모두 가능 
// 이 함수는 아무것도 반환하지 않고, 기본적으로 스크립트 일부를 충돌시키기 위한 것임을 개발자가 알게 할 수 있음
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occured!', 500);  // Uncaught {message: 'An error occured!', errorCode: 500}
