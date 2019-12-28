function Father(name, age) {
    // this指向父构造函数的对象实例
    this.name = name
    this.age = age
}
Father.prototype.eat = function(){
    console.log('eat')
}
Son.prototype = new Father() //把__proto__指向了Father   Father的__proto__又指向 

function Son(name, age, score) {
    // this指向子构造函数的对象实例
    Father.call(this, name, age)
    this.score = score
}
console.log(Father.prototype.constructor,Son.prototype.constructor)