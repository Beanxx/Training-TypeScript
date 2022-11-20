function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result); // Result is: 7.8 (숫자끼리의 계산은 result에서 한 후에 출력하는 것이므로 원하는대로 출력~!)
        console.log(phrase + n1 + n2); // Result is: 52.8  (문자열 + 숫자 + 숫자 => 문자열 계산)
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5; // 타입 추론에 의해 타입을 따로 지정하지 않아도 됨!
// 처음에 값을 할당하지 않고 나중에 할당해주는 경우엔 타입 지정해주는 것이 좋음~!
// let number11: number; 
// number1 = 5;
// 타스는 추론된 타입이더라도 추론된 타입에 어긋나면 에러 출력!!
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
