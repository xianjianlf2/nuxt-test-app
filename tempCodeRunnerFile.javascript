class Person {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
  commonMethods() {
    console.log("共享方法");
  }
}

class Student extends Person {
  constructor(name, score) {
    super(name);
    this.score = score;
  }
  printScore() {
    console.log("print score");
  }
}
let stu = new Student("小红");
let person = new Person("小紫");
console.log(stu.commonMethods === person.commonMethods);
