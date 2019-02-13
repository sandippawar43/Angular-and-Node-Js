var exp = require("express")
var sql = require("mysql")
var app = exp();

app.use (function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    
    res.header("Access-Control-Allow-Methods","*")
    res.header("Access-Control-Allow-Headers","*")
    next();
    })

var conn = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodedatabase"

})

conn.connect(function(err){

    if(err)
    throw err;
});


app.get("/demo",function(req, resp){
  //  data=[{"id":1, "name":"John"},{"id":2,"name":"Ram"}]
  var data;
    conn.query("select * from Employee",function(err,data){
        console.log(data);
        resp.json(data);
    })
})


app.listen(8084)