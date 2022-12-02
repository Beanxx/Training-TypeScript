class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  // 매개변수에 private과 type을 함께 설정해줄 수 있다. 그러면 위에서 따로 타입지정 안 해줘도 됨!
  // readonly: 초기화 후에 변경되면 안 되는 특정 필드에 설정
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
    // this.name가 아닌 name 작성시 클래스 내의 변수가 아닌 외부의 전역 변수를 불러오게 됨
    // this: 생성된 클래스의 구체적인 인스턴스 참조
  }

  addEmployee(employee: string) {
    // this.id = 'd2' // => error because of read-only property
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// 생성자를 포함하여 기본 Department class가 가진 모든 것을 자동으로 가져오게 됨
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // 다른 클래스로부터 상속받는 클래스에 고유 생성자를 추가할 때마다 상속하는 클래스로 super를 추가해야 함
    // => super: 기본 클래스의 생성자를 호출함
    super(id, 'IT'); // 상속받는 기존 class 값들
    this.admins = admins; // 새롭게 추가한 값
  }

}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports)
  }
}



const it = new ITDepartment('d1', ['Max'])

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = "Anna"; employees를 private으로 설정하면 외부에서 참조할 수 없음!

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong...');
accounting.printReports();

// const itCopy = { name: 'DUMMY', describe: it.describe }
// // 위에서 name 속성이 없는 경우 undefined 출력
// itCopy.describe(); // Department: undefined ->  DUMMY