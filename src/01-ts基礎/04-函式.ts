function test1(a: string, b: string, c?: number): string {
  return a.substring(0, 1) + b.substring(0, 1)
}

var myText: string = test1('aaa', 'bbb', 100)
console.log(myText)

// ------------------------------------

interface IFunc {
  (a: string, b: string, c?: number): string
}

var myFunc: IFunc = function test1(a: string, b: string, c?: number): string {
  return a.substring(0, 1) + b.substring(0, 1)
}

interface IObj {
  name: string
  age: number
  getName: (name: string) => string
}

var myObj: IObj = {
  name: 'sheep',
  age: 18,
  getName: (name: string) => {
    return name
  }
}

var name: string = myObj.getName('hitsuji')

export default {}
