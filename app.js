// const express = require("express");
// const path = require("path");
// const app = express();
// const fs=require('fs');
// const mongoose = require("mongoose");
// const bodyparser = require("body-parser", { UserNewUrlparser: true });

// const multer  = require('multer');
// const { url } = require("inspector");
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const host='127.0.0.1';
// const port = 800;

// // var MONGODB_CONNECT_URI="mongodb+srv://harshith:harshith1520@cluster.jl03mrs.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect("mongodb+srv://harshith:harshith1520@cluster.jl03mrs.mongodb.net/harley?retryWrites=true&w=majority");

// app.use(express.urlencoded({ extended: true }));
// var contactdetails = new mongoose.Schema({
//   fname: String,
//   lname: String,
//   pass: String,
//   mail: String,
//   adress: String,
//   remarks: String
// });

// var signdetails = new mongoose.Schema({
//     username: String,
//     password: String,
//     mail: String,
//     // file: {
//     //     data: Buffer,
//     //     contentType: String,
//     //   },
// });

// // var logindetails = new mongoose.Schema({
// //     username: String,
// //     password: String,
// // });

// var cd = mongoose.model("cd", contactdetails);
// var sd = mongoose.model("sd", signdetails);
// // var ld = mongoose.model("ld", logindetails);

// app.use('/static', express.static('static'));
// app.use('/views', express.static('views'));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../Emotors','views','main.html'));
// })
// app.get('/home',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../Emotors','views','home.html'));
// })
// app.get('/log',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../Emotors','views','log.html'));
// })
// app.get('/sign',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../webdevelopment','Emotors','views','sign.html'));
// })



// app.post("/home", (req, res) => {
//   var out = new cd(req.body);
//   out.save().then(() => {
//         res.redirect('/home')
//     }).catch(() => {
//       res.status(400).send("Failed");
//     });
// });

// // app.post("/sign",(req, res) => {
// //     var out = new sd(req.body);
// //     out.save().then(() => {
// //         // res.sendFile(path.join(__dirname,'../Emotors','views','log.html'));
// //         res.send('success')
// //     }).catch(() => {
// //     res.status(400).send("Failed");
// //     });
// //   });

// // app.post("/log",async (req,res)=>{
// //     const check=await sd.findOne({username:req.body.username})
// //     if(check.password===req.body.password)
// //     {
// //         // window.location.href = '../views/homelog.html';
// //         res.send('success')
// //     }
// //     else
// //     {
// //         res.send("incorrect credentials")
// //     }
// // })

// app.listen(port, () => {
//   console.log(`success http://${host}:${port}`);
// });


const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyparser = require("body-parser", { UserNewUrlparser: true });
const fs=require('fs');
const path = require("path");

const host='127.0.0.1';
const port = 800;

mongoose.connect("mongodb+srv://harshith:harshith1520@cluster.jl03mrs.mongodb.net/harley?retryWrites=true&w=majority");

app.use(express.urlencoded({ extended: true }));

var contactdetails = new mongoose.Schema({
  fname: String,
  lname: String,
  pass: String,
  mail: String,
  adress: String,
  remarks: String
});

var signdetails = new mongoose.Schema({
      username: String,
      password: String,
      mail: String
});

var cd = mongoose.model("cd", contactdetails);
var sd = mongoose.model("sd", signdetails);

app.use('/static', express.static('static'));
app.use('/views', express.static('views'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Emotors','views','main.html'));
})
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Emotors','views','home.html'));
})
app.get('/log',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Emotors','views','log.html'));
})
app.get('/sign',(req,res)=>{
    res.sendFile(path.join(__dirname,'../webdevelopment','Emotors','views','sign.html'));
})



app.listen(port, () => {
    console.log(`success http://${host}:${port}`);
});