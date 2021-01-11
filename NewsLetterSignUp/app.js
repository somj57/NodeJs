//npm init
//npm install express
//nodemon app.js
// npm install body-parser
//app.use(express.static("static"));   it is used to serve static files 

const express = require("express");
const app = express();
const https=require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("static"));


app.get("/",function(req,res){
	res.sendFile(__dirname +"/signup.html")	
});

app.post("/",function(req,res){
	const fristName = req.body.fName;
	const lastName = req.body.lName;
	const email = req.body.email;

	const data = {
		members:[
		{
			email_address : email,
			status : "subscribed",
			merge_fields:{
				FNAME: fristName,
				LNAME: lastName
			}

		}]
	};
	const jsonData = JSON.stringify(data);
	const url = "https://us2.api.mailchimp.com/3.0/lists/155e71929e";
	const options={
		method: "POST",
		auth: "somj57:authKeyHere"
	};
	const request = https.request(url,options,function(response){
		if(response.statusCode===200){
			res.sendFile(__dirname+ "/success.html");
		}else{
			res.sendFile(__dirname+ "/failure.html");
		}
		response.on("data",function(data){
			//console.log(JSON.parse(data));
		})
	})
	request.write(jsonData);
	request.end();
	
});

app.post("/failure", function(req,res){
	res.redirect("/");
});






// app.listen(3000,function(){
// 	console.log("Server started at port 3000");
// });

//for heroku
app.listen(process.env.PORT || 3000,function(){
	console.log("Server started at port 3000");
});

//03c66521174e9cf2f7a3bc3cdd97e7d0-us2
//155e71929e