interface IObj {
  name: string,
  age: number,
  location?: string, // 可選屬性
  [propName: string]: any 
}

var obj1:IObj = {
  name: 'sheep',
  age: 18,
  location: '台北',
  grade: 4.5,
  isSale: true
}

console.log(obj1.name)


export default {}