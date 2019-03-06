import {NgModule, Component} from "@angular/core"
import {FormsModule} from "@angular/forms"
import {HttpClient} from "@angular/common/http"
import {BillList} from "./BillList"

@Component({
    selector:"app-root",
    templateUrl:"billing.html"
})

export class BillingClass
{
    customers:any;
    items:any;
    selectedCustomer:any;
    selectedItem:any;
    SelectBill = new BillList(null,null,null,null,null);
    billList: BillList[] = [];


    constructor(private http:HttpClient)
    {
    this.http.get("http://localhost:8088/customer").subscribe(e=>this.customers=e);
    this.http.get("http://localhost:8088/items").subscribe(e=>this.items=e);
   
    }

    ItemSelection=function(setectedItem)
    {
        this.selectedItem= setectedItem;
       
    }

    CustomerSelection=function(cust)
    {
        this.selectedCustomer = cust;

    }
}