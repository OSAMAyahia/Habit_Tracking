const mongoose =require("mongoose")

const userSchema=new mongoose.Schema({
    First_name: { type :String, 
        required : true} ,
        role: {type:String , default : "user",enum:["admin","user"]},
    Last_name: { type :String, 
        required : true} ,

    email : { type :String, 
        required : true ,
        unique: true} ,
    
    password : { type :String, 
        required : true  }   ,
        
    createdAt : { type :Date
        ,default :Date.now()
    }    
})

const user = mongoose.model("Users",userSchema )

module.exports=user;