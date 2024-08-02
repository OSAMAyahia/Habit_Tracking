const User=require("../models/users")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken")
const asyncHandler= require( "../util/wrapperfuc");
const Error= require( "../util/ApiErorr");

const reply=(user,res,statuss)=>{
   const JWT= jwt.sign({id:user._id},process.env.jwtpass,{expiresIn:process.env.ex})
    return res.status(statuss).json({jwt:JWT,data: user})
}
exports.signup=asyncHandler(async(req,res,next)=>{
        const data=req.body
        const pass =data.password
        const hashpass=await bcrypt.hash(pass,12)
        const user= new User({
            First_name: data.First_name,
            Last_name: data.Last_name,
            email : data.email,
            password :  hashpass ,
            createdAt : data.createdAt,
            role:data.role
        })
        await user.save();
        reply(user,res,200)

        
})


exports.login=asyncHandler(async(req,res,next)=>{
        const data=req.body
        const user= await User.findOne({
            email : data.email
        })

        if(!user){return  next( new Error("email or password is not correct",404) ) }

        const match=await bcrypt.compare(data.password,user.password)
// console.log(match)
        if(match) {
     
            reply(user,res,200)
        }

        else {return next( new Error("email or password is not correct",404))}
        

})



exports.protect=asyncHandler(async(req,res,next)=>{
if (!req.headers.authorization){
        return res.status(401).json({err:"please login"})
        }
        
        const JWT =req.headers.authorization.split(' ')[1]
        
        // console.log(JWT)
        const ID=jwt.verify(JWT,process.env.jwtpass)
        // console.log(ID)
        const user =await User.findById(ID.id)
        if (!user){return res.status(401).json({err:"your token is not true please login"})}
        // console.log(user)

        req.confirmuser=user
    next()
})

exports.RestricedTo=((...roles)=>{
    return restrected=(req,res,next)=>{
        if(roles.includes(req.confirmuser.role)){
        next()}else{return res.status(401).json({err:"u have not acess to this"} )}
    }
})