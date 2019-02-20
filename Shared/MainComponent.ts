import {Component} from "@angular/core"
@Component({
    selector:'app-root',
    template:`
    <h1>Parent View</h1>
    <child-view></child-view>    
    <hr/>
    <second-view></second-view>  
    `
})
export class MainClass{
    
}