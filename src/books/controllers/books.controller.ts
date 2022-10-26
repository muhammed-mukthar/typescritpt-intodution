function getBookHandler(req:Request,res:Response,next:NextFunction){
 
    
        //@ts-ignore
            console.log(res.locals.name);
            //@ts-ignore
             res.send(res.locals.name);
        
            

}

module.exports={getBookHandler}