interface IFunc {
  getName: () => string
  getAge: () => number
}

class A implements IFunc {
  a1() {}
  a2() {}

  getName() {
    return 'AAA'
  }
  getAge() {
    return 18
  }
}

class B implements IFunc {
  b1() {}
  b2() {}

  getName() {
    return 'BBB'
  }
  getAge() {
    return 18
  }
}

class C implements IFunc {
  getName() {
    return 'CCC'
  }
  getAge() {
    return 18
  }
}

function init(obj: IFunc) {
  obj.getName()
  obj.getAge()
}
var objA = new A()
var objB = new B()
var objC = new C()

init(objA)
init(objB)
init(objC)

export default {}
