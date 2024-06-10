//--------use of express.urlencoded------------
// const express=require("express");
// const app=express();
// const port=2300;
// app.use(express.urlencoded())
// app.get("/login",(req,res)=>{
//   res.send("<form method='POST'><input name='username' type='text'><button>Login</button></form>");
// });
// app.post('/login',(req,res)=>{
//   console.log(req.body);
//   res.send("yes....")
// })
// app.listen(port,()=>{
//   console.log(`server is running ${port}`)
// })
//-------------error handling -----------------
// const express=require('express');
// const app=express();
// const port=2300;
// app.use(function (req,res,next){
//   console.log("mid 1");
//   next();
// })
// app.use(function (req,res,next){
//  if(2===1){
//   next();
//  }
//  else{
//   throw new Error("error")
//   //  next(100)
//  }
 
// })
// app.use(function (req,res,next){
//   console.log("mid 3");
//   next();
// })
// app.get('/',(req,res,next)=>{
//   console.log("/4")
//   res.send("/get 4")
//   next();
// });
// app.use(function (req,res,next){
//   console.log("mid 5");
//   next();
// })
// app.use(function(err,req,res,next){
//   res.status(404).send("Custome error handler");
// });

// app.listen(port,()=>console.log(`server started ${port}`))
//-----------------EVENTS AND EVENT EMITTER-----------------------
// const express=require('express')
// const EventEmitter=require('events')
// const app=express();
// const event =new EventEmitter();
// const port=2300;
// event.on("countAPI",()=>{
//   console.log("event called");
// })
// app.get("/",(req,res)=>{
//   res.send("api called")
//   event.emit("countAPI")
// })
// app.get("/search",(req,res)=>{
//   res.send("search api called")
// })
// app.get("/update",(req,res)=>{
//   res.send("update api called")
// })
// app.listen(port,()=>console.log("connected",`${port}`))


