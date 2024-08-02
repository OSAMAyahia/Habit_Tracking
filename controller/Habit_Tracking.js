const Habit_Tracking= require( "../models/Habit_Tracking");
const asyncHandler= require( "../util/wrapperfuc");
const Error= require( "../util/ApiErorr");
exports.createHabit_Tracking=asyncHandler(async(req,res,next)=>{
    const data=req.body
    const habit= new Habit_Tracking({
        habit_id:data.habit_id,
        notes: data.notes,
        status : data.status,
    Created_At : data.Created_At
    })
    await habit.save();
    res.status(201).json({ message: "your Habit_Tracking registered successfully" });
 

    })


    exports.getallHabits=asyncHandler(async(req,res,next)=>{
       
        const habit= await Habit_Tracking.find({})
        res.status(200).json({ message: "success",data:habit });
    
        })


exports.getoneHabit=asyncHandler(async(req,res,next)=>{
       
        const habit= await Habit_Tracking.findOne({habit_id:req.params.ID})
        if (!habit){return  next( new Error("no habit to this user",404) )}
        res.status(200).json({ message: "success",data:habit });
    
        }
    
    )


    
