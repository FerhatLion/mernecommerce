const ErrorHandler = require('../utils/errorhandler')

module.exports = (err, req, res, next)=>{
    err.statusCode = statusCode || 500;
    err.message = err.message || "Internal Server Error"

    //Wrong Mogodb Id error
    if(err.name==="CastError"){
        const message = `Resource not found. Invalid ${err.path}`;
        err = new ErrorHandler(message, 400)
    }    


    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    })
}