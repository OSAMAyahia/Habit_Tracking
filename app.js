const express =require("express")
const morgan =require("morgan")
const app=express()
const ApiErorr=require("./util/ApiErorr")
const Global_MiddlewareErorr=require("./util/Global_MiddlewareErorr")
require("dotenv").config()
const mongoose=require("mongoose")
const userRoute=require("./Routes/user")
const habitRoute=require("./Routes/Habits")
const Habit_TrackingRoute=require("./Routes/Habit_Tracking") 
console.log(process.env.NODE_ENVIRONMENT)
app.use(express.json())
app.use(morgan("dev"))
app.use("/user",userRoute)
app.use("/habit",habitRoute)
app.use("/Habit_Tracking",Habit_TrackingRoute)
//connected with mongo
mongoose.connect(process.env.URL).then(console.log("connected to DB ")).catch(err=>console.log(err))

//connected with docker
// mongoose.connect(`mongodb://${process.env.USERNAMEDOCKER}:${process.env.PASSDOCKER}@${process.env.hostDOCKER}:${process.env.mongoportDOCKER}/`).then(()=>console.log("connected to DB ")).catch(err=>console.log(err))
app.all("*",(req,res,next)=>{
    
    next( new ApiErorr(`u caanot acess this url: ${req.originalUrl}`,400))
})
 
app.use(Global_MiddlewareErorr.GlobalMErorr)
app.listen(process.env.PORT,()=>console.log("server is running"))