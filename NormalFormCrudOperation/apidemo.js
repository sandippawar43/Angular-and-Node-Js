var express=require("express")
var app=express();
var sql=require("mysql")
var body=require("body-parser");
app.use(body.urlencoded({extended:true}))
app.use(body.json())

 
app.use(function(req,res,next){
res.header("Access-Control-Allow-Origin","*"),
res.header("Access-Control-Allow-Methods","*"),
res.header("Access-Control-Allow-Headers","*"),
next()
})
app.post("/demo",function(req,res)
{
    var s=req.body;
    console.log(s)
    var con=sql.createConnection
    ({
    host:'localhost',
    user:'root',
    password:"",
    database:"employee"
    })
   con.connect (function(error)
   {
    if(error)
    {
        throw error
    }
    else
    {
     var q="insert into  employee(name,address,mobile,salary) values('"+s.name+"','"+s.address+"','"+s.mobile+"',"+s.salary+")"
     con.query(q,function(err,result){
         if(err)
         {
             throw err
         }
         else
         {
            con.query("select * from employee",function(error,result)
            {
               res.json(result)
            })
         }
     })
    }
})
})
app.post("/update",function(req,res){
    var s=req.body;
    console.log(s)
    var con=sql.createConnection
       ({
        host:'localhost',
        user:'root',
        password:"",
        database:"employee"
        })

        con.connect(function(error){
            if(error)
            {
                throw error
            }
            else
            {
                var q="update employee set name='"+s.name+"',address='"+s.address+"',mobile="+s.mobile+",salary="+s.salary+" where srno="+s.srno
            }
            con.query(q,function(err,result)
            {
                if(err)
                {
                    throw err
                }
                else
                {
                   con.query("select * from employee",function(error,result)
                   {
                      res.json(result)
                   })
                }

            })
        })

})

app.delete("/delete",function(req,res){
    var s=req.query;
    console.log(s)
 
    var con=sql.createConnection
       ({
        host:'localhost',
        user:'root',
        password:"",
        database:"employee"
        })

        con.connect(function(error){
            if(error)
            {
                throw error
            }
             var q="delete from employee where srno="+s.id
            
            con.query(q,function(err,result)
            {
                if(err)
                {
                    throw err
                }
               
                   con.query("select * from employee",function(error,result)
                   {
                      res.json(result)
                   })
              

            })
        })

})


app.get("/",function(req,res)
{
    var con=sql.createConnection({
        host:'localhost',
        user:'root',
        password:"",
        database:"employee"
    })
con.connect(function(error)
{

    if(error)
    {
        throw error
    }
    else
    {
     con.query("select * from employee",function(error,result)
     {

        // console.log(result)
        res.json(result)
     })
    }

})


})

app.listen(8083)