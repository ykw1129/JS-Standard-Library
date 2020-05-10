var reg = /(?!^)(?=(\d{3})+$)/
let result ="123456789".replace(reg,",")
console.log(result)