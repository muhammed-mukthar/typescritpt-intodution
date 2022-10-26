import {Express,Request,Response,NextFunction} from 'express'
import {getBookHandler} from './books/controllers/books.controller'
function routes(app:Express){
    app.get('/api/books/:bookId/:authId',
  getBookHandler);
    
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


}


export default routes;