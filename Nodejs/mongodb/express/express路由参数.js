const express = require('express')
const app = express()
const port = 3000
app.get('/find/:id',(req,res)=>{
    // console.log(req.params);
    const a = req.params
    res.send(a);
    res.end()
    // {id:123}
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))