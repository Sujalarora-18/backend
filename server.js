// const express = require('express')
// const authRoute = require('./routes/authRoutes')
// const app = express()

// app.use(express.static(__dirname + "/public"))  
// app.use(express.urlencoded())

// app.use('/', authRoute)

// app.listen(3000, ()=>{
//     console.log('Server Started...')
// })











const express=require("express");
const authRoute=require('./routes/authRoutes.js');
const app=express();

app.use(express.urlencoded());
app.use(express.static(__dirname+'/public'));
app.use('/',authRoute);


app.listen(3000,()=>{
    console.log("server Started");
})