//npm init
//npm install express
//nodemon app.js
//http://api.openweathermap.org/data/2.5/weather?q=Landon&APPID=9baad7319453a30f09013ea95d44fbd3
// npm install body-parser
const express = require("express");
const app = express();
const https=require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
	res.sendFile(__dirname +"/index.html")	
});

app.post("/",function(req,res){
	console.log(req.body.cityName);
	const city =req.body.cityName;
	const apiKey = "api key goes here";
	const units = "metric";
	const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID="+ apiKey +"&units="+ units;
	https.get(url,function(response){
		//console.log(response.statusCode);
		response.on("data",function(data){
			const weatherData=JSON.parse(data)
			const temp = weatherData.main.temp
			const description = weatherData.weather[0].description
			console.log(temp,description)
			const icon = weatherData.weather[0].icon
			const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
			res.write("<p>Weather Description :- " + description + "<p >");
			res.write("<h1>The Temperature in " + weatherData.name + " is " + temp + " Degree Celcius</h1>");
			res.write("<img src =" + imgUrl + " width=300px>");
			res.send()
		})
	});

});



// const city = "Jabalpur";
// 	const apiKey = "9baad7319453a30f09013ea95d44fbd3";
// 	const units = "metric";
// 	const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID="+ apiKey +"&units="+ units;
// 	https.get(url,function(response){
// 		//console.log(response.statusCode);
// 		response.on("data",function(data){
// 			const weatherData=JSON.parse(data)
// 			const temp = weatherData.main.temp
// 			const description = weatherData.weather[0].description
// 			console.log(temp,description)
// 			const icon = weatherData.weather[0].icon
// 			const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
// 			res.write("<p>Weather Description :- " + description + "<p >");
// 			res.write("<h1>The Temperature in " + weatherData.name + " is " + temp + " Degree Celcius</h1>");
// 			res.write("<img src =" + imgUrl + ">");
// 			res.send()
// 		})
// 	});



app.listen(3000,function(){
	console.log("Server started at port 3000");
});
