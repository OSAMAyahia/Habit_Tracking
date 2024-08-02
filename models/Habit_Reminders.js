const mongoose=require("mongoose")

const reminder_time=new mongoose.Schema({
    habit_id:{type:mongoose.Schema.Types.ObjectId,ref:"Habits", required:true},
    reminder_time:Dare,
    created_at : {type:Date,default:Date.now()}
})

const reminder=mongoose.model("reminder_time",reminder_time)
module.exports=reminder;