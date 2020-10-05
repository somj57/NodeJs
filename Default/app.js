//npm init
//npm install express
//nodemon app.js
// npm install body-parser
//app.use(express.static("static"));   it is used to serve static files
//npm install ejs

const express = require("express");
const app = express();
const https=require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("static"));
app.set('view engine','ejs');


app.get("/",function(req,res){
  res.render("blog",{day:"day"});
});





app.listen(process.env.PORT || 3000,function(){
	console.log("Server started at port 3000");
});
