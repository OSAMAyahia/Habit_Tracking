const express=require("express")
// const {signup,login}=require("../controller/users")
const user=require("../controller/users")
const route=express.Router()

route.post("/signup",user.signup)
route.post("/login",user.login)
// route.post("/signup",signup)
// route.post("/login",login)

module.exports=route