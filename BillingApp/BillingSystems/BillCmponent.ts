import {Component} from "@angular/core"
import {HttpClient} from "@angular/common/http"

@Component({
selector:'app-root',
templateUrl:'Index.html'

})

export class BillClass{
    customers:any=[];
    items:any=[];
    itemdata=[]
    item="";
    rate=0;
    item_name="";
    qty=0
    msg:any;
    total=0;
    finaltotal:number=0;
    constructor(private http:HttpClient){
    }
    ngOnInit(){
        this.http.get("http://localhost:8088/customer").subscribe(e=>this.customers=e)
        this.http.get("http://localhost:8088/items").subscribe(e=>this.items=e)
  
    }

    fetchRate=function(itm){
    
for(var i=0;i<this.items.length;i++){
if(this.items[i].ItemId==itm){
this.rate=this.items[i].Rate
this.item_name=this.items[i].ItemName
//    alert(this.items[i].Rate)
}
}
}

Add=function(item,rate,qty){

var total=rate*qty;
this.finaltotal+=Number(total)
this.itemdata.push({"ItemId":item,"ItemName":this.item_name,"Rate":rate,"Quantity":qty,"Total":total})
}

Submit=function(customer,billdate,tax)
{
    var data={
        "BillDate":billdate,
        "CustId":customer,
        "TotalAmount":this.finaltotal,
        "Tax":tax,
        "status":"Un Paid",
        "items":this.itemdata

    }

    this.http.post("http://localhost:8088/generatebill",data).subscribe(e=>this.msg=e)
}
}
 