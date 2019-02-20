import {Component} from "@angular/core"

@Component({
    selector:'app-root',
    template:`
    <a routerLink="/department">Department</a>
    &nbsp;
    <a routerLink="/department/IT">IT Dept</a>    &nbsp;
    <a routerLink="/employee">Employee</a> &nbsp;
    <a routerLink="/employee/about">About Employees</a>
    <hr/>
    <router-outlet></router-outlet>
    `
})

export class MainClass{

}