import express from 'express'
const app=express()

app.get('/',(req,res)=>{
    return res.send('hallo')
})

app.use(express.json())

app.use(express.urlencoded())

app.post('/api/data',(req,res)=>{
    console.log(req.body);
    return res.sendStatus(200)
})

app.listen(3000,()=>{console.log('running on 3000');
})