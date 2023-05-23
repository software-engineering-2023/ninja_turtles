const express=require("express");
const app=express();


const path= require('path');



app.use(express.json());

//app.use(express.static('/public'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(express.static(path.join(__dirname, 'css')));
//app.use(express.static("public"));

app.use('/css', express.static(__dirname + "/css"));



app.get("/", function(req,res){
    res.sendFile(__dirname + "/home.html");
})

app.get("/login", function(req,res){
    res.sendFile(__dirname + "/login.html");
})

app.get("/about", function(req,res){
    res.sendFile(__dirname + "/about.html");
})

app.get("/services", function(req,res){
    res.sendFile(__dirname + "/services.html");
})

app.get("/signup", function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.get("/registerhasaccount", function(req,res){
    res.sendFile(__dirname + "/registerhasaccount.html");
})

app.get("/registernoaccount", function(req,res){
    res.sendFile(__dirname + "/registernoaccount.html");
})

app.get("/otp", function(req,res){
    res.sendFile(__dirname + "/otp.html");
})

app.get("/otpnoaccount", function(req,res){
    res.sendFile(__dirname + "/otpnoaccount.html");
})

app.get("/client", function(req,res){
    res.sendFile(__dirname + "/client.html");
})













app.listen(3000, function() {

    console.log("Server is running on localhost3000");
}) 