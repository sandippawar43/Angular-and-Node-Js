import {Component} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Employee} from "./Employee"
@Component({
    selector:'app-root',
    templateUrl:"apicrud.html"
    })

export class apicomponent
{
    msg:any
    e=new Employee(null,null,null,null,null);
    constructor(private http: HttpClient)
     {
     this.http.get("http://localhost:8083").subscribe(e=>this.msg=e)
     }

     add=function(emp)
     {
  
     this.http.post("http://localhost:8083/demo",emp).subscribe(e=>this.msg=e)
    
    this.e=new Employee(null,null,null,null,null);
    }

    View=function(p)
    {

        this.e=p;
    }

    update=function(e)
    {
        this.http.post("http://localhost:8083/update",e).subscribe(e=>this.msg=e)
        this.e=new Employee(null,null,null,null,null);
    }

    delete=function(d)
    {
        this.http.delete("http://localhost:8083/delete?id="+d).subscribe(e=>this.msg=e)  
    }
}