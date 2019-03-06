var express= require("express");
var app = express();
var sql=require("mysql");
var body=require("body-parser");
app.use(body.urlencoded({extended:true}));
app.use(body.json());

var connection={
    host:"localhost",user:"root",password:"",database:"billing"
    }


app.use(function(req,res,next)
    {
        res.header("Access-Control-Allow-Origin","*")
        res.header("Access-Control-Allow-Methods","*")
        res.header("Access-Control-Allow-Headers","*")
        next();
    }
    )

app.get("/customer",function(req,res)
    {
        var conn=sql.createConnection(connection)
       
       conn.connect(function(error)
       {
        if(error)
        {
            throw error;        
        }
        else
        {
            console.log("MySQL Connected")
            conn.query("select * from customers",function(error,data)
            {
              res.json(data)
            })
        }
       })       
    })  
    
    app.get("/items",function(req,res)
    {
        var conn=sql.createConnection(connection)
       
       conn.connect(function(error)
       {
        if(error)
        {
            throw error;        
        }
        else
        {
            console.log("MySQL Connected")
            conn.query("select * from items",function(error,data)
            {
              res.json(data)
            })
        }
       })       
    })
    
app.get("/BillDetails",function(req,res)
    {
        var conn=sql.createConnection(connection)
       
       conn.connect(function(error)
       {
        if(error)
        {
            throw error;        
        }
        else
        {
            console.log("MySQL Connected")
            conn.query("select * from BillDetails",function(error,data)
            {
              res.json(data)
            })
        }
       })       
    })
    

app.get("/BillItems",function(req,res)
    {
        var conn=sql.createConnection(connection)
       
       conn.connect(function(error)
       {
        if(error)
        {
            throw error;        
        }
        else
        {
            console.log("MySQL Connected")
            conn.query("select * from BillItems",function(error,data)
            {
              res.json(data)
            })
        }
       })       
    })    

app.get("/BillPayment",function(req,res)
    {
        var conn=sql.createConnection(connection)
       
       conn.connect(function(error)
       {
        if(error)
        {
            throw error;        
        }
        else
        {
            console.log("MySQL Connected")
            conn.query("select * from BillItems",function(error,data)
            {
              res.json(data)
            })
        }
       })       
    }) 
        

    app.post("/generatebill",function(req,res){
var d=req.body;
        console.log(req.body)

        var conn=sql.createConnection(connection)
       
        conn.connect(function(error)
        {
         if(error)
         {
             throw error;        
         }
         else
         {
             console.log("MySQL Connected")
             conn.query("insert into  billdetails (BillDate,CustId,TotalAmount,Tax,Status) values('"+d.BillDate+"',"+d.CustId+","+d.TotalAmount+","+d.Tax+",'"+d.status+"')",function(error,data)
             {
                conn.query("select max(BillId) as maxid from billdetails",function(error,data)
                {
                    var bid=data[0].maxid
                    console.log(data[0].maxid)
                var itemdata=d.items;
                for(var i=0;i<itemdata.length;i++){
                    conn.query("insert into   billitems (BillId,ItemId,Quantity) values("+bid+","+itemdata[i].ItemId+","+itemdata[i].Quantity+")",function(error,data)
                    {
                console.log("Inserted for item ")
                    })

                }
                res.send("Success")
                })
             })
         }
        })       
    })
app.listen(8088)