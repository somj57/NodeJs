//npm install express
//sudo npm install -g nodemon
//nodemon server.js
//this will on developer mode


const express = require("express");

const app = express();

app.get("/",function(req , res){
	res.send("<h1>HELLOwwwww</h1>");
});

app.get("/contact",function(req , res){
	res.send("<h1>Contact me:- som.jaiswal.sj@gmail.com</h1>");
});

app.get("/about",function(req , res){
	res.send("<h1>I am Somya Jaiswal</h1>");
});

app.listen(3000,function(){
	console.log("Server started at port 3000");
});