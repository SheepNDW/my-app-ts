class Bus {
  public name = 'sheep' // 公有屬性
  private _list: any = [] // 私有變數
  protected age = 100 // 受保護的 (只有孩子能訪問)

  subscribe(cb: any) {
    this._list.push(cb)
  }

  dispatch() {
    this._list.forEach((cb: any) => {
      cb && cb()
    })
  }
}

class Child extends Bus {
  aaa() {
    console.log(this.age)
  }
}

var obj = new Bus()

console.log(obj.name)

// console.log(obj._list)

export default {}
