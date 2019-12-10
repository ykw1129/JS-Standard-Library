let a = {}
let temp = 124
Object.defineProperty(a,'love',{
    get:function(){
        return temp
    },
    set:function(val){
        temp = val
    }
    // get:()=>console.log(123)
/*      configrable 描述属性是否配置，以及可否删除
            {
                configurable: false 时，不能删除当前属性，且不能重新配置当前属性的描述符
            (有一个小小的意外：可以把writable的状态由true改为false,但是无法由false改为true)
            ,但是在writable: true的情况下，可以改变value的值
            configurable: true时，可以删除当前属性，可以配置当前属性所有描述符。
            }
            value 属性值
        writable 当且仅当该属性的writable为true时，value才能被赋值运算符改变
        enumerable 描述属性是否会出现在for in 或者 Object.keys()的遍历中 
        *使用访问器和设置器(getter/setter) 的时候就不能使用 value/writable 属性。
        get 默认undefind  当属性被访问时触发的方法 
        set 默认undefind  当属性被修改时触发的方法 */
})
a.love = 666
console.log(a.love)