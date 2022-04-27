var list1: string[] = ['1', '2', '3']
list1.push('aaa')
// list1.push(4)

var list2: number[] = [1, 2, 3, 4]
list2.push(5)

var list3: (number | string)[] = [1, 2, 3, "aa", "bb"]
list3.push(4)
list3.push('cc')

// -----------------------------------

var myList1: Array<string> = ['aa', 'bb', 'cc']
myList1.push('dd')

var myList2: Array<string | number> = [1, 2, 'aa']
myList2.push(3)

export default {}