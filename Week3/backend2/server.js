import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './API/UserAPI.js';
import {productApp} from './API/ProductAPI.js';
import cookieParser from 'cookie-parser';  
import {config} from 'dotenv';
const app=exp()

//Add body parser
app.use(exp.json())
//add cookie parser
app.use(cookieParser())

//Forward request to UserApp if path starts with /user-api
app.use("/user-api",userApp) 
app.use("/product-api",productApp)

const port=process.env.PORT //url and port in env file this are calleed environmental variable.

//Connect to DB Server
async  function connectDB(){
    try{
        await connect("process.env.DB_URL");
        console.log("DB Connection success")
        //Start server
        app.listen(4000,()=>console.log("Server listening on port 4000"))
    }catch(err){
        console.log("err in DB connection: ",err)
    }
}
connectDB();
// a medium to communicate between client anad server.
//tcpip and http relationship 
//eventloop have no purpose when a synchronus.continuesly monitoring the elements and sending elements to stack.
//javaxscript engine cannot deal with asynchronus operations.
// what modules are present in package.json.........object document mapping(odm) mongoose.

//error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.name)
    console.log(err.callStack)
    console.log(err.message)
    if(err.name==='ValidationError'){
        return res.status(400).json({message:'error occured',error:"Client side error"})
    }
    //castError
    if(err.name==="CastError"){
        return res.status(400).json({message:'error occured',error:"Client side error"})
    }
    res.status(500).json({message:"error occured", error:"server side error"})
})





















// import exp from 'express'
// import { connect } from 'mongoose'
// import { productApp } from './API/ProductAPI.js'
// const app=exp()
// //Add body parser
// app.use(exp.json())

// //Forward request to UserApp if path starts with /user-api
// app.use("/Product-api",productApp) 

// //Connect to DB Server
// async  function connectDB(){
//     try{
//         await connect("mongodb://localhost:27017/Database_two");
//         console.log("DB Connection success")
//         //Start server
//         app.listen(3000,()=>console.log("Server listening on port 3000"))
//     }catch(err){
//         console.log("err in DB connection: ",err)
//     }
// }
// connectDB();
// // a medium to communicate between client anad server.
// //tcpip and http relationship 
// //eventloop have no purpose when a synchronus.continuesly monitoring the elements and sending elements to stack.
// //javaxscript engine cannot deal with asynchronus operations.
// // what modules are present in package.json.........object document mapping(odm) mongoose.

// //error handling middleware
// app.use((err,req,res,next)=>{
//     console.log(err.name)
//     console.log(err.callStack)
//     console.log(err.message)
//     if(err.name==='ValidationError'){
//         return res.status(400).json({message:'error occured',error:"Client side error"})
//     }
//     //castError
//     if(err.name==="CastError"){
//         return res.status(400).json({message:'error occured',error:"Client side error"})
//     }
//     res.status(500).json({message:"error occured", error:"server side error"})
// }