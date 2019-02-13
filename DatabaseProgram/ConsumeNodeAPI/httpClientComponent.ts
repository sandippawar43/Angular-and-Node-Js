import {Component} from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Component({
    selector:'app-root',
    template:`
    <ul *ngFor="let u of msg">
    <li> {{ u.EmpId+"  "+u.Name+"  "+"  "+u.Address+"  "+u.Mobile+"  "+u.Salary}}</li>
    </ul>
    `
})

export class HttpClientComponentClass
{
    msg:any;
    constructor(private http:HttpClient)
    {
        alert("hello");
        this.http.get("http://localhost:8084/demo").subscribe(e=>this.msg=e);
    }
}