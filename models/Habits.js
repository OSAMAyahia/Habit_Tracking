const mongoose=require("mongoose")

const Habitss=new mongoose.Schema({
    name: {type:String ,required:true},
    user_id: {type: mongoose.Schema.Types.ObjectId,ref:"Users" ,required:true},
    start_date : String,
    description: String,
    frequency:{type:String ,required:true},
    intreval : {type:String ,required:true},
    Created_At : {type: String , default :Date.now()}

})

const Habit=mongoose.model("Habits",Habitss)

module.exports=Habit