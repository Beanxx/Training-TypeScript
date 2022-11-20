// enum {NEW, OLD}: [열거형] 자스에선 존재하지 않으며 타스에만 존재하는 타입
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// 시작 숫자를 0으로 시작하지 않으려는 경우, 식별자에 등호를 추가하여 다른 숫자 입력도 가능!
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // => 5 6 7
// 숫자 말고도 문자 등도 할당 가능!
var person = {
    name: 'bean',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    // role: ADMIN // type: number => 이를 해결하는 방법이 바로 enum 타입 사용하기!
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
