const express = require("express")
const router = express.Router()
const Order = require("../models/order")


router.get("/", async(req,res,next)=>{
try{
// call the listOrdersForUser method

}catch(err){

 next(err)   
}



})



router.post("/", async(req,res,next)=>{
    try{
     //call the createOrder method.
    
    }catch(err){
        
     next(err)   
    }
    
    
    
    })