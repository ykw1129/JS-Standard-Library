let rg = /abc/
// 边界发 ^ $
// 正则表达式中不需要加引号,不管是数字型还是字符串型
let rg1 = /^abc/
//以abc为首
let rg2 = /abc$/
// 以abc为尾
let rg3 = /^abc$/
// 只允许abc
let a = rg1.test('abcddd')
// test检查是否符合正则表达式
console.log(a)

let rg4 = /[abc]/
// 只要含有a或b或c ,就返回true
let rg5 = /^[abc]$/
// 三选一 只能含有a或b或c ,不能含两个及两个以上