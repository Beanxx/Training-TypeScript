// type alias(별칭) => 재사용 가능
// Union Type과 함께 쓰면 굳~! (+ 복잡한 객체 타입에도 별칭을 붙일 수 있음!)
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

// Union Type: 여러 타입 지정하고 싶을 때 사용
function combine(input1: Combinable, input2: number | string, resultConversion: ConversionDescriptor) {
  let result;
  // result = input1 + input2;
  // => Operator '+' cannot be applied to types 'string | number ~ 요런 에러가 발생하므로 아래와 같이 처리

  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(24, 29, 'as-number'); // 56
console.log(combinedAges);

const combinedStringAges = combine('24', '29', 'as-number'); // 56
console.log(combinedStringAges);

const combinedNames = combine('Choi', 'Bean', 'as-text'); // ChoiBean
console.log(combinedNames);


// Literal Type: 숫자나 문자열이 아닌 정확한 값을 가지는 타입
const num = 5;