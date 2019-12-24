// 冒泡排序简单算法
function maopao(arr){
    let newArr = []
    let temp = 0
    for(let i=0;i<=arr.length-1;i++){
        for(let j = 0;j<=arr.length-i-1;j++){
            if(arr[j]<arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
let b = maopao([1,5,7])
console.log(b)