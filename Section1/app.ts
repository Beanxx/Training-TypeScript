function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result); // Result is: 7.8 (숫자끼리의 계산은 result에서 한 후에 출력하는 것이므로 원하는대로 출력~!)
    console.log(phrase + n1 + n2); // Result is: 52.8  (문자열 + 숫자 + 숫자 => 문자열 계산)
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
