let aa = [1,2,333,43123,21]
function mysort(arr){
    arr.sort(function(a,b){
        return a - b
    })
}
mysort(aa)
console.log(aa)