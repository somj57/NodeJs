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
//for requiring date module
const date = require(__dirname + "/date.js");

app.set('view engine','ejs');
let items = ["Brush Teets"];
let workList = ["Check Work Mails"];

app.get("/",function(req,res){
	//running the getDate function by running date()
	var day = date.getDate();
	res.render("list",{listTitle:day, item:items});
});

app.post("/",function(req,res){
	let item = req.body.newItem;
	if(req.body.list === "Work List"){
		workList.push(item)
		res.redirect("/work");
	}else{
		items.push(item);
		res.redirect("/");
	}

});

app.get("/work",function(req,res){
	res.render("list",{listTitle:"Work List", item:workList});
});




// app.listen(3000,function(){
// 	console.log("Server started at port 3000");
// });
app.listen(process.env.PORT || 3000,function(){
	console.log("Server started at port 3000");
});




//Alternative method
// var today = new Date();
// var curDay = today.getDay();
// var time = today.getTime();
// var day = "";
// switch(curDay){
// 	case 1: day = "Monday";break;
// 	case 2: day = "Tuesday";break;
// 	case 3: day = "Wednesday";break;
// 	case 4: day = "Thrusday";break;
// 	case 5: day = "Friday";break;
// 	case 6: day = "Saturday";break;
// 	case 0: day = "Sunday";break;
// 	default:console.log(day);
// }
