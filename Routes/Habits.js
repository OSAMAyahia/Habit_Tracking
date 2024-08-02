const express=require("express")
const route=express.Router()
const habit=require("../controller/Habits")
const user=require("../controller/users")
const validator=require('../util/route_validation_roles/Habit_Role')
route.post("/create",validator.createValidator,user.protect,user.RestricedTo("admin","user"),habit.createHabit)
route.get("/all",user.protect,user.RestricedTo("admin"),habit.getallHabits)
route.get("/one",user.protect,user.RestricedTo("admin","user"),habit.getoneHabit)

module.exports=route;