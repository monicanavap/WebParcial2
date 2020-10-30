var express = require("express");

var app = express();

var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//rutas
app.get("/", function(req, res){
	res.send("Youre on homepage");
})

app.post("/post", function(req, res){
	res.send(`Welcome to ${req.body.user}`);
})

app.delete("/delete", function(req, res){
	res.json({
		delete: true
	})
})

app.put("/put/:id",(req,res)=>{
    var  id = req.params.id;
    res.send(`Task ${id} has been updated`);
})

//listening
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT); 
});