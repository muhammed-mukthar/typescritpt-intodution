import express,{NextFunction, Request,Response} from 'express'
const app=express()


app.use(express.json())

app.use(express.urlencoded())

const middleware=({name}:{name:string})=>(req:Request,res:Response,next:NextFunction)=>{
 res.locals.name=name

next()
}




app.use(middleware({name:"mukthar"}))


app.get('/api/books/:bookId/:authId',
(req:Request<{bookId:'string',authId:string},{},{name:string},{}>,res:Response,next:NextFunction)=>{

req.body.name

    console.log(res.locals.name);

     res.send(res.locals.name);

    
});

async function throwsError(){
 throw new Error('Boom')
}

app.get('/error',async(req,res)=>{
    try{
 await throwsError()
 res.sendStatus(300)
  
    
    }catch(e){
  res.status(400).send('spmething bad happened')
    }
  
   
})

app.listen(3000,()=>{console.log('running on 3000');
})

