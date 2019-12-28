class Father{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    add(){
        console.log(this.x+this.y)
    }
}
class Son extends Father{
    constructor(x,y){
        super(x,y)//调用父类中的构造函数
    }
}
let son1 = new Son(3,5)
son1.add()