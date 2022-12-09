class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];
  // 만약 접근할 수 있도록 하면서도 외부에서 변경 불가능한 속성으로 만들고자 한다면 protected로!
  // protected는 해당 클래스 외에도 이 클래스를 확장하는 모든 클래스에서도 사용 가능함!

  // 매개변수에 private과 type을 함께 설정해줄 수 있다. 그러면 위에서 따로 타입지정 안 해줘도 됨!
  // readonly: 초기화 후에 변경되면 안 되는 특정 필드에 설정 (초기화 중에 한번만 설정 가능!)
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;

    // console.log(this.fiscalYear); // error => static 속성은 인스턴스에서 유효하지 않음 (static 속성과 메소드는 인스턴스와 분리되어 있기 때문!)
    console.log(Department.fiscalYear)
  }

  // 아래 클래스를 인스턴스화하지 않고 접근할 수 있는 정적 메소드로 만들기 위해서 static 키워드 사용~!
  // static: 새 키워드 없이 직접 클래스에서 호출하는 것
  static createEmployee(name: string) {
    return { name: name }
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
  // 다른 클래스를 상속받는 클래스의 경우 비어 있어도 사용 가능 (why? 생성자를 포함하여 모든 것ㅇ르 자동으로 가져오기 때문)
  // 즉, 하위 클래스를 인스턴스화할 때 생성자가 자동으로 사용되는 것!
  private lastReport: string;


  // Getter & Setter는 로직을 캡슐화하고 속성을 읽거나 설정하려고 할 때 실행되어야 하는 추가적인 로직을 추가하는데 유용함

  // Getter: 값을 가지고 올 때 함수나 메소드를 실행하는 속성
  get mostRecentReport() {
    // 게터 메소드는 꼭 무엇가를 반환해야 함
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No report found.')
  }

  //Setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    // 꼭 super를 먼저 호출한 다음에 this 키워드를 사용하여 작업을 수행해야 한다!
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
    // 위에서 employees를 private으로 설정했을 경우엔 error 발생
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text; // lastReport가 private으로 설정되어 있어서 요렇게 접근할 수 없음 => 개터 get 사용하면 사용 가능함!
  }

  printReports() {
    console.log(this.reports)
  }
}
// * 클래스 추가시 static이 아닌 부분들엔 접근할 수 없음

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear) // {name: 'Max'} 2020

const it = new ITDepartment('d1', ['Max']);



it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = "Anna"; employees를 private으로 설정하면 외부에서 참조할 수 없음!

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports(); // ['Something went wrong...']
accounting.printEmployeeInformation(); // 1 ['Manu']


// const itCopy = { name: 'DUMMY', describe: it.describe }
// // 위에서 name 속성이 없는 경우 undefined 출력
// itCopy.describe(); // Department: undefined ->  DUMMY