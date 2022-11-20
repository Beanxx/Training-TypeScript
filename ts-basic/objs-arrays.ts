const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // [Tuple] 첫번째 원소 타입은 number, 두번째 원소 타입은 string으로 고정
} = {
  name: 'bean',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'] // [Tuple] role은 항상 2개의 요소만 지닐 수 있음
}

// 배열에 정확히 x개의 값이 필요하고, 각 값의 타입을 미리 알고 있는 상황에선 배열보단 튜플 사용이 적합!

// person.role.push('admin'); // => push는 예외적으로 튜플에서 허용되서 타스가 에러를 잡지 못함,, But, 적어도 잘못된 값을 할당하진 않음!
// person.role[1] = 10; // => index 1 자리의 타입은 string으로 지정되어 있으므로 숫자 타입 값이 오면 error!!
// person.role = [0, 'admin', 'user']; // => role은 2개의 원소만 지닐 수 있도록 지정했는데 원소 개수가 3개라서 error!!


let favoriteActivities: string[]; // 문자열 원소를 갖는 배열 타입
favoriteActivities = ['Sports']; // 원소 타입이 문자열이 아닐 경우 error!!

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // hobby는 문자열이므로 문자열에 사용 가능한 toUpperCase() 메소드 사용 가능!
  // console.log(hobby.map()); // hobby는 문자열로 인식하므로 배열에 사용 가능한 메소드인 map()를 썼을 때 error!!
}
