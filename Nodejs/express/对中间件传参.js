const express = require('express')
const app = express()
const port = 3000

app.use(fn({a:2}))
// TODO:这种方法可以向中间件中传参
function fn(obj){
    return (req,res,next)=>{
        if(obj.a==1){
            console.log(req.url)
        }else{
            console.log(req.method)
        }
        next()
    }
}
app.get('/', (req, res) => res.send('ok'))
app.listen(port, () => console.log(`Example app listening on port port!`))