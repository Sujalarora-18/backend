// const express = require('express')
// const path = require('path')
// const router = express.Router()

// router.get("/", (req,res)=>{
//     res.sendFile(path.join(__dirname, "../view", "signup.html"))
// })

// router.get("/login", (req,res)=>{
//     res.sendFile(path.join(__dirname, "../view", "login.html"))
// })

// router.post("/signup", (req,res)=>{
//     console.log(req.body)
// })

// module.exports = router







const express=require('express');
const router=express.Router();
const path=require('path');

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../view","signup.html"));
})

router.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"../view","login.html"));
})

router.post("/signup",(req,res)=>{
    console.log(req.body);
})

module.exports=router;