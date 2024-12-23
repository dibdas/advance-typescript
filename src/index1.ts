import z from 'zod'
import express from "express";

const app = express();
app.use(express.json());


 const userprofile= z.object({
    name:z.string().min(1,{message:"name cant be empty"}),
    email:z.string().email({message:"email invalid"}),
    age:z.number().min(18,{message:"you must be at least 18"}).optional()
 })
//  type FinalSchema ={
//    name: string;
//    email: string;
//    age?: number
//  }
 // dont have to redifine the schema like the above 
 export type FinalSchema1= z.infer<typeof userprofile>

 app.put("/user",(req,res)=>{
    const {success} = userprofile.safeParse(req.body)
    // how to assign  a type to update body 
    const updateBody:FinalSchema= req.body
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