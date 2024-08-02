const mongoose=require("mongoose")

const tracking=new mongoose.Schema({
    habit_id:{type:mongoose.Schema.Types.ObjectId,ref:"Habits", required:true},
    status :String ,
    notes:String,
    created_at : {type:Date,default:Date.now()}
})

const track=mongoose.model("tracking",tracking)
module.exports=track;