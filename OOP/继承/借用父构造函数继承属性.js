    // 借用父构造函数继承属性
function Father(name,age){
        // this指向父构造函数的对象实例
    this.name = name
    this.age = age
}
function Son(name,age){
    // this指向子构造函数的对象实例
    Father.call(this,name,age)
}
var son = new Son('张三',18)
console.log(son)