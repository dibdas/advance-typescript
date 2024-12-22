import z from 'zod'
import express from "express"

const app = express()
 const userprofile= z.object({
    name:z.string().min(1,{message:"name cant be empty"}),
    email:z.string().email({message:"email invalid"}),
    age:z.number().min(18,{message:"you must be at least 18"}).optional()
 })

 app.put("/user",(req,res)=>{
    const {success} = userprofile.safeParse(req.body)
    // how to assign  a type to update body 
    const updateBody:{
         name:string,email:string,age?:number
    }= req.body
    if(!success){
        res.status(411).json({})
        return
    }
    res.json({
        message:"user updated",updateBody
    })
 })

 app.listen(3000,()=>{
    "listening to port 3000"
 })