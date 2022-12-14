// unknown: any와 비슷하지만 다른 타입으로, 사용자가 무엇을 입력할지 알 수 없을 때 사용
// any보다 unknown 타입 지정이 나은 이유는 타입 검사를 수행할 수 있기 때문!
var userInput;
var userName;
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
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
