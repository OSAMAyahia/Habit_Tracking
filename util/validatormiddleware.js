const {validationResult} =require("express-validator")

const validatorMiddleware =(req,res,next)=>{
    const erorrs =validationResult(req)
if (!erorrs.isEmpty()){
    return (res.status(400).json({ errors_validatorMiddleware: erorrs.array() }));
}
next()

}
module.exports = validatorMiddleware;