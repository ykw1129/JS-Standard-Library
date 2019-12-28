class Father{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    sum(){
        console.log(this.x+this.y)
    }
}
class Son extends Father{
    constructor(x,y){
        // 利用super 调用父类的构造函数
        // super必须在子类this之前调用
        super(x,y)
        this.x = x
        this.y = y
    }
    subtract(){
        console.log(this.x - this.y)
    }
}
let son1 = new Son(5,3)
//先有类才能实例化，类不能写到实例化的下面
son1.sum()
son1.subtract()