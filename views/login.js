const express=require('express');
const app=express();
const mongoose=require('mongoose');
function login()
        {
            document.getElementById('sign').innerHTML="Log In";
            document.getElementById('us').value="";
            document.getElementById('pwd').value="";
            document.getElementById('mail').style.display="none";
            document.getElementById('upload').style.display="none";
            document.getElementById('image').style.display="none";
            document.getElementById('signin').style.display="none";
            document.getElementById('or').style.display="none";
            document.getElementById('tro').style.display="none";
            document.getElementById('log').style.display="none";
            document.getElementById('submit').id='login';
            document.getElementById('submit').id="login";
            document.getElementById('login').onclick="window.location.href='home.html'";
            document.getElementById("login").onclick = function() {myFunction()};
            function myFunction() {
                // express.response.redirect('/login');
                express.post('/login',async(req,res)=>{
                    const check=await detail.findOne({username:req.body.username})
                    if(check.password===req.body.password)
                    {
                        window.location.href = '../views/homelog.html';
                    }
                    else
                    {
                        res.send("incorrect credentials")
                    }
                })
            }
        }