const express=require("express")
const route=express.Router()
const validator=require('../util/route_validation_roles/HabitTracking_role')
const user=require('../controller/users')
const habit=require("../controller/Habit_Tracking")
route.post("/create",validator.createValidator,user.protect,user.RestricedTo("admin","user"),habit.createHabit_Tracking)
route.get("/allhabit",user.protect,user.RestricedTo("admin"),habit.getallHabits)
route.get("/onehabit/:ID",validator.getCategoryValidator
,user.protect,user.RestricedTo("admin","user"),habit.getoneHabit)

module.exports=route;