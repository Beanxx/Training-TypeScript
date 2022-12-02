class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name)
    // this.name가 아닌 name 작성시 클래스 내의 변수가 아닌 외부의 전역 변수를 불러오게 됨
    // this: 생성도니 클래스의 구체적인 인스턴스 참조
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting')

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation();

const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
// 위에서 name 속성이 없는 경우 undefined 출력
accountingCopy.describe(); // Department: undefined ->  DUMMY