
const errorHandler=(err,req,res,next)=>{
    let statusCode=res.statusCode|500;
    let message=err.message;
    if(err.name==='CastError' && err.kind==='objectId')
    {
        statusCode=404;
        message='Resource not found';
    }
    res.status(statusCode).json({
        message,
        stack:process.env.NODE_ENV==='production'? null:err.stack
    });
}
module.exports= errorHandler ;