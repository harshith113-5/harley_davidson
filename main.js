const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyparser = require("body-parser", { UserNewUrlparser: true });
const fs=require('fs');
const path = require("path");

const host='127.0.0.1';
const port = 8000;

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
app.use(express.json());

app.set('view engine','pug')
app.set('/views',__dirname,'views')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','main.html'));
})
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','home.html'));
})
app.get('/homelog',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','homelog.html'));
})
app.get('/log',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','log.html'));
})
app.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','signin.html'));
})

app.post("/home", (req, res) => {
    var out = new cd(req.body);
    out.save().then(() => {
        res.redirect('/home')
    }).catch(() => {
        res.status(400).send("Failed");
    });
});

app.post("/homelog", (req, res) => {
    var out = new cd(req.body);
    out.save().then(() => {
        res.redirect('/homelog')
    }).catch(() => {
        res.status(400).send("Failed");
    });
});

app.post("/log",async (req,res)=>{
    const check=await sd.findOne({username:req.body.username})
    if(check.password===req.body.password)
    {
        res.redirect('/homelog');
    }
    else
    {
        res.send("incorrect credentials")
    }
})

app.post("/signin",(req, res) => {
    var out = new sd(req.body);
    out.save().then(() => {
        res.redirect('/log')
    }).catch(() => {
    res.status(400).send("Failed");
    });
});

app.listen(port, () => {
    console.log(`success http://${host}:${port}`);
});
