import express,{NextFunction, Request,Response} from 'express'
import helmet from 'helmet'
import routes from './routes'
const app=express()


app.use(express.json())

app.use(helmet())
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.sendStatus(200)
})

const middleware=({name}:{name:string})=>(req:Request,res:Response,next:NextFunction)=>{
 res.locals.name=name

next()
}




app.use(middleware({name:"mukthar"}))

routes(app)


app.listen(3000,()=>{console.log('running on 3000');
})

