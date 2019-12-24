// 翻转一个数组
function Reversal(arr){
    let newArr = []
    for(let i=arr.length-1;i>=0;i--){
        newArr[newArr.length] = arr[i]
    }
    return newArr
}

const a = Reversal([1,2,3,4,5])
console.log(a)