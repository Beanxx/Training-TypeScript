// void: 함수에 의도적으로 반환문이 없다는 것을 의미 => 값을 반환하지 않은 함수를 사용하는 경우
// undefined는 실제 값을 반환하지 않을 때 사용 가능

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void { // 반환문(return)이 없으므로 반환 타입이 void로 타입 추론됨
  console.log('Result: ' + num);
}

printResult(add(5, 12)); // Result: 17
console.log(printResult(add(5, 12))); // undefined (반환문이 없기 때문에)

// let combineValues: Function; // 함수 타입 지정. But, 잘못된 함수를 저장해도 error를 발생시키지 않고, undefined 출력,,
let combineValues: (a: number, b: number) => number; // 함수 인자 개수, 타입 & 반환 타입까지 지정

combineValues = add;
// combineValues = printResult; // => 잘못된 함수 지정시 error!!

console.log(combineValues(8, 8)); // 16


// 콜백함수 타입 지정
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result); // 30
  // return result;  // => 콜백함수 반환타입이 void이므로 return문 실행 X
})