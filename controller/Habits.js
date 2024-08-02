const habit= require( "../models/Habits");
const asyncHandler= require( "../util/wrapperfuc");
const Error= require( "../util/ApiErorr");

exports.createHabit=asyncHandler(async(req,res,next)=>{
    const data=req.body
    const user= new habit({
    name: data.name ,
    start_date :  data.start_date,
    user_id:req.confirmuser._id,
    description: data.description,
    frequency:data.frequency,
    intreval : data.intreval,
    Created_At : data.Created_At
    })
    await user.save();
    res.status(201).json({ message: "your habit registered successfully" });
    // res.status(200).json({data:user})

    })


exports.getallHabits=asyncHandler(async(req,res,next)=>{
       
        const user= await habit.find({})
        if(user.length===0){return  next( new Error("no habit  founded ",404) )}
        res.status(201).json({ message: "success",data:user });
    
        })


exports.getoneHabit=asyncHandler(async(req,res,next)=>{
       
        const user= await habit.findOne({user_id:req.confirmuser._id})
        console.log("the user is:" ,user)
        res.status(201).json({ message: "success",data:user });
    
        })
