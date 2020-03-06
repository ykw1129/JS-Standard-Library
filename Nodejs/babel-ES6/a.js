let [a,b,c] = [10,20,30]

function show(){
    console.log(123)
}

export default{
    // 每个模块只允许一次 default 默认导出
    a,b,show
}
export let d = 40
export let e = 50
// 每个模块可以有无数次 按需导出