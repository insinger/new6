var exp=require("express")
var app=exp()
app.use(express.static(__dirname+"/public")
app.use(express.static(__dirname+"/bower_components")
app.listen(3000,()=>console.log("ready"))
