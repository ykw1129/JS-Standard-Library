// 浅拷贝和深拷贝
// 浅拷贝b对象
let a = {}
let b ={
    one:function(){}
    ,two:13
}
Object.assign(a,b)
console.log(a)