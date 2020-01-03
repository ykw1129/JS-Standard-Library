let reg = /^[a-z]$/
//26小写个英文字母任何一个字母返回true
let reg1 = /^[a-zA-z0-9_-]$/
//26大小写个英文字母任何一个字母返回true 加0-9数字  加下划线和短横线
// console.log(reg1.test(2))

let reg2 = /^a+$/
// *表示可以出现0次或者很多次
// +表示可以出现1次或者很多次
let reg3 = /^a{3}$/
// {}表示出现几次
let reg3 = /^a{3,}$/
// {3,}表示次数大于等于3
let reg3 = /^a{3,}$/
// 表示大于等于3并且小于等于16
console.log(reg3.test('aa'))