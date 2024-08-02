exports.GlobalMErorr=(err,req,res,next)=>{
    err.statuscode=err.statuscode ||500
    err.status=err.status ||"erorr"

    if (process.env.NODE_ENVIRONMENT==="Development"){
        development(res,err)
    }
    else { production(res,err)}
    
}


const development=(res,err)=>{
   return res.status(err.statuscode).json({erorr:err,
    message:err.message,
    stack:err.stack
})}

const production=(res,err)=>{
    return res.status(err.statuscode).json({
    message:err.message,
})}