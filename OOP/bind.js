// bind函数不会调用函数，但能改变函数指向
// 返回由指定的this值和初始化参数改造的原函数拷贝
let arr = [222,111,4444]
let getmax = Math.max.bind(null,...arr)
console.log(getmax())